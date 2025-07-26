export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  user_id: string;
  status: TaskStatus;
  priority: TaskPriority;
  due_date: string | null;
  completed_at: string | null;
  created_at: string;
  updated_at: string;
  organization_id: string | null;
  shared_with_org: boolean;
  list_id: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  list_id: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  due_date?: string | null;
  organization_id?: string;
  shared_with_org?: boolean;
}

export interface UpdateTaskInput {
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  due_date?: string | null;
  completed_at?: string | null;
  shared_with_org?: boolean;
  organization_id?: string | null;
}
