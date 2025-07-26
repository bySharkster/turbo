import { BaseDAL } from './base';

// Task interface with organization support
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

export class TaskDAL extends BaseDAL {
  /**
   * Create a new task for the authenticated user
   */
  async createTask(input: CreateTaskInput): Promise<Task> {
    const { data, error } = await this.supabase!.from('tasks')
      .insert({
        title: input.title,
        description: input.description,
        list_id: input.list_id,
        status: input.status,
        priority: input.priority,
        due_date: input.due_date,
        user_id: this.getCurrentUserId(),
        completed_at: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        organization_id: input.organization_id,
        shared_with_org: input.shared_with_org || false,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating task:', error);
      throw new Error(`Failed to create task: ${error.message}`);
    }

    return data;
  }

  /**
   * Get all tasks for the authenticated user
   */
  async getUserTasks(): Promise<Task[]> {
    const { data, error } = await this.supabase!.from('tasks')
      .select('*')
      .eq('user_id', this.getCurrentUserId())
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tasks:', error);
      throw new Error(`Failed to fetch tasks: ${error.message}`);
    }

    return data || [];
  }

  /**
   * Get all tasks shared with the authenticated user
   */
  async getOrgTasks(): Promise<Task[]> {
    const { data, error } = await this.supabase!.from('tasks')
      .select('*')
      .eq('shared_with_org', true)
      .eq('organization_id', this.getCurrentOrgId())
      .neq('user_id', this.getCurrentUserId())
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tasks:', error);
      throw new Error(`Failed to fetch tasks: ${error.message}`);
    }

    return data || [];
  }

  async getTasksByListId(listId: string): Promise<Task[]> {
    const { data, error } = await this.supabase!.from('tasks')
      .select('*')
      .eq('list_id', listId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching tasks:', error);
      throw new Error(`Failed to fetch tasks: ${error.message}`);
    }

    return data || [];
  }

  /**
   * Update a task (only if it belongs to the authenticated user)
   */
  async updateTask(taskId: string, input: UpdateTaskInput): Promise<Task> {
    const { data, error } = await this.supabase!.from('tasks')
      .update({
        ...input,
        updated_at: new Date().toISOString(),
      })
      .eq('id', taskId)
      .eq('user_id', this.getCurrentUserId()) // Ensure user can only update their own tasks
      .select()
      .single();

    if (error) {
      console.error('Error updating task:', error);
      throw new Error(`Failed to update task: ${error.message}`);
    }

    if (!data) {
      throw new Error(
        'Task not found or you do not have permission to update it'
      );
    }

    return data;
  }

  /**
   * Delete a task (only if it belongs to the authenticated user)
   */
  async deleteTask(taskId: string): Promise<void> {
    const { error } = await this.supabase!.from('tasks')
      .delete()
      .eq('id', taskId)
      .eq('user_id', this.getCurrentUserId()); // Ensure user can only delete their own tasks

    if (error) {
      console.error('Error deleting task:', error);
      throw new Error(`Failed to delete task: ${error.message}`);
    }
  }

  /**
   * Get a specific task by ID (only if it belongs to the authenticated user)
   */
  async getTaskById(taskId: string): Promise<Task | null> {
    const { data, error } = await this.supabase!.from('tasks')
      .select('*')
      .eq('id', taskId)
      .eq('user_id', this.getCurrentUserId())
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // Task not found
        return null;
      }
      console.error('Error fetching task:', error);
      throw new Error(`Failed to fetch task: ${error.message}`);
    }

    return data;
  }
}
