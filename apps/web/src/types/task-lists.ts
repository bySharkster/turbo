
export interface TaskList {
  id: string;
  title: string;
  description: string;
  user_id: string;
  organization_id: string | null;
  is_template: boolean;
  is_archived: boolean;
  shared_with_org: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateTaskListInput {
  title: string;
  description?: string;
  organization_id?: string | null;
  is_template?: boolean;
  is_archived?: boolean;
  shared_with_org?: boolean;
}

export interface UpdateTaskListInput {
  title?: string;
  description?: string;
  is_template?: boolean;
  is_archived?: boolean;
  shared_with_org?: boolean;
  organization_id?: string | null;
}
