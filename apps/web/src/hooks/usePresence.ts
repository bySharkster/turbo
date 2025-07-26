import { useEffect, useState } from 'react';
import { createClient } from '@/src/utils/supabase/client';
import { useAuth } from '@clerk/nextjs';

// Define the structure of the presence data we track
type UserPresence = {
  userId: string;
  lastSeen: string;
};

// Define the structure of our presence state
type PresenceState = {
  count: number;
  users: Record<string, UserPresence>;
};

// Define the structure of what we expect from Supabase presence
type SupabasePresence = {
  userId?: string;
  lastSeen?: string;
  [key: string]: unknown;
};

export function usePresence() {
  const [presenceState, setPresenceState] = useState<PresenceState>({
    count: 0,
    users: {},
  });
  const { userId, isSignedIn } = useAuth();

  useEffect(() => {
    if (!userId || !isSignedIn) return;

    const supabase = createClient();
    const channel = supabase.channel('online-users');

    // Function to update user presence
    const updatePresence = async () => {
      await channel.track({
        userId,
        lastSeen: new Date().toISOString(),
      });
    };

    // Connect to the channel and track presence
    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const users = Object.entries(state).reduce(
          (acc, [key, presences]) => {
            // Handle the actual presence data structure from Supabase
            const presence = presences[0] as SupabasePresence;
            // Make sure we have the expected structure
            if (presence && typeof presence === 'object') {
              // Extract the data we need or use defaults
              acc[key] = {
                userId: presence.userId || key,
                lastSeen: presence.lastSeen || new Date().toISOString(),
              };
            }
            return acc;
          },
          {} as Record<string, { userId: string; lastSeen: string }>
        );

        setPresenceState({
          count: Object.keys(users).length,
          users,
        });
      })
      .subscribe(async status => {
        if (status === 'SUBSCRIBED') {
          await updatePresence();

          // Update presence every minute to keep the user "online"
          const interval = setInterval(updatePresence, 60000);
          return () => clearInterval(interval);
        }
      });

    // Clean up the subscription when the component unmounts
    return () => {
      channel.unsubscribe();
    };
  }, [userId, isSignedIn]);

  return presenceState;
}
