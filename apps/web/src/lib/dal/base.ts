import { auth } from '@clerk/nextjs/server';
import { createServerSupabaseClient } from '@/src/utils/supabase/clerk/client';
import { redirect } from 'next/navigation';

export class BaseDAL {
  protected supabase;
  protected userId: string;

  constructor() {
    // This will be initialized in the static create method
    this.supabase = null as any;
    this.userId = '';
  }

  /**
   * Static factory method to create an authenticated DAL instance
   * Throws an error if user is not authenticated
   */
  static async create<T extends BaseDAL>(this: new () => T): Promise<T> {
    const session = await auth();

    if (!session.userId) {
      throw new Error('Unauthorized: User must be authenticated');
    }

    const instance = new this();
    instance.supabase = createServerSupabaseClient();
    instance.userId = session.userId;

    return instance;
  }

  /**
   * Static factory method for actions that should redirect if not authenticated
   */
  static async createOrRedirect<T extends BaseDAL>(
    this: new () => T,
    redirectTo: string = '/sign-in'
  ): Promise<T> {
    const session = await auth();

    if (!session.userId) {
      redirect(redirectTo);
    }

    const instance = new this();
    instance.supabase = createServerSupabaseClient();
    instance.userId = session.userId;

    return instance;
  }

  /**
   * Get the current authenticated user ID
   */
  protected getCurrentUserId(): string {
    return this.userId;
  }

  /**
   * Get the Supabase client instance
   */
  protected getSupabaseClient() {
    return this.supabase;
  }
}
