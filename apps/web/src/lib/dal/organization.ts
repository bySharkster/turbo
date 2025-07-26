import { BaseDAL } from './base';

// Organization interface
export interface Organization {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CreateOrganizationInput {
  name: string;
}

export interface UpdateOrganizationInput {
  name?: string;
}

export class OrganizationDAL extends BaseDAL {
  async createOrganization(
    input: CreateOrganizationInput
  ): Promise<Organization> {
    const { data, error } = await this.supabase!.from('organizations')
      .insert({
        name: input.name,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating organization:', error);
      throw new Error(`Failed to create organization: ${error.message}`);
    }

    return data;
  }

  async updateOrganization(
    organizationId: string,
    input: UpdateOrganizationInput
  ): Promise<Organization> {
    const { data, error } = await this.supabase!.from('organizations')
      .update({
        ...input,
        updated_at: new Date().toISOString(),
      })
      .eq('id', organizationId)
      .select()
      .single();

    if (error) {
      console.error('Error updating organization:', error);
      throw new Error(`Failed to update organization: ${error.message}`);
    }

    return data;
  }

  async deleteOrganization(organizationId: string): Promise<void> {
    const { error } = await this.supabase!.from('organizations')
      .delete()
      .eq('id', organizationId);

    if (error) {
      console.error('Error deleting organization:', error);
      throw new Error(`Failed to delete organization: ${error.message}`);
    }
  }
}
