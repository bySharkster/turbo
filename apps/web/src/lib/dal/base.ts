import { auth } from '@clerk/nextjs/server';
import { createServerSupabaseClient } from '@/src/utils/supabase/clerk/client';
import { redirect } from 'next/navigation';
import type { SupabaseClient } from '@supabase/supabase-js';

export class BaseDAL {
  protected supabase: SupabaseClient | null;
  protected userId: string;
  protected orgId: string;

  constructor() {
    // This will be initialized in the static create method
    this.supabase = null;
    this.userId = '';
    this.orgId = '';
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
    if (session.orgId) {
      instance.orgId = session.orgId;
    }

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
console.log("Session", session)
    if (!session.userId) {
      redirect(redirectTo);
    }

    const instance = new this();
    instance.supabase = createServerSupabaseClient();
    instance.userId = session.userId;
    if (session.orgId) {
      instance.orgId = session.orgId;
    }

    return instance;
  }

  /**
   * Get the current authenticated user ID
   */
  protected getCurrentUserId(): string {
    return this.userId;
  }

  /**
   * Get the current authenticated organization ID
   */
  protected getCurrentOrgId(): string {
    return this.orgId;
  }

  /**
   * Get the Supabase client instance
   */
  protected getSupabaseClient() {
    return this.supabase;
  }
}
