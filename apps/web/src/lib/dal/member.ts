import { BaseDAL } from './base';

// Member interface - represents a user's membership in an organization
export interface Member {
  id: string;
  user_id: string;
  organization_id: string;
  role: MemberRole; // e.g., 'admin', 'member'
  created_at: string;
}

export enum MemberRole {
  ADMIN = 'admin',
  MEMBER = 'member',
}

export interface CreateMemberInput {
  user_id: string;
  organization_id: string;
  role: MemberRole;
}

export interface UpdateMemberInput {
  user_id?: string;
  organization_id?: string;
  role?: MemberRole;
}

export class MemberDAL extends BaseDAL {
  async createMember(input: CreateMemberInput): Promise<Member> {
    const { data, error } = await this.supabase!.from('members')
      .insert({
        user_id: input.user_id,
        organization_id: input.organization_id,
        role: input.role,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating member:', error);
      throw new Error(`Failed to create member: ${error.message}`);
    }

    return data;
  }

  async getMembersByOrganizationId(organizationId: string): Promise<Member[]> {
    const { data, error } = await this.supabase!.from('members')
      .select('*')
      .eq('organization_id', organizationId);

    if (error) {
      console.error('Error fetching members:', error);
      throw new Error(`Failed to fetch members: ${error.message}`);
    }

    return data || [];
  }

  async getMemberByUserId(id: string): Promise<Member | null> {
    const { data, error } = await this.supabase!.from('members')
      .select('*')
      .eq('user_id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // Member not found
        return null;
      }
      console.error('Error fetching member:', error);
      throw new Error(`Failed to fetch member: ${error.message}`);
    }

    return data;
  }

  async updateMember(
    memberId: string,
    input: UpdateMemberInput
  ): Promise<Member> {
    const { data, error } = await this.supabase!.from('members')
      .update({
        ...input,
        updated_at: new Date().toISOString(),
      })
      .eq('id', memberId)
      .select()
      .single();

    if (error) {
      console.error('Error updating member:', error);
      throw new Error(`Failed to update member: ${error.message}`);
    }

    return data;
  }

  async deleteMember(memberId: string): Promise<void> {
    const { error } = await this.supabase!.from('members')
      .delete()
      .eq('id', memberId);

    if (error) {
      console.error('Error deleting member:', error);
      throw new Error(`Failed to delete member: ${error.message}`);
    }
  }
}
