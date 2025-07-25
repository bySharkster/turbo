import { BaseDAL } from './base';

// Task interface
export interface Task {
  id: string;
  title: string;
  user_id: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateTaskInput {
  title: string;
}

export interface UpdateTaskInput {
  title?: string;
  completed?: boolean;
}

export class TaskDAL extends BaseDAL {
  /**
   * Create a new task for the authenticated user
   */
  async createTask(input: CreateTaskInput): Promise<Task> {
    const { data, error } = await this.supabase
      .from('tasks')
      .insert({
        title: input.title,
        user_id: this.getCurrentUserId(),
        completed: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
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
    const { data, error } = await this.supabase
      .from('tasks')
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
   * Update a task (only if it belongs to the authenticated user)
   */
  async updateTask(taskId: string, input: UpdateTaskInput): Promise<Task> {
    const { data, error } = await this.supabase
      .from('tasks')
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
    const { error } = await this.supabase
      .from('tasks')
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
    const { data, error } = await this.supabase
      .from('tasks')
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

  /**
   * Toggle task completion status
   */
  async toggleTaskCompletion(taskId: string): Promise<Task> {
    // First get the current task to know its completion status
    const currentTask = await this.getTaskById(taskId);

    if (!currentTask) {
      throw new Error(
        'Task not found or you do not have permission to access it'
      );
    }

    return this.updateTask(taskId, { completed: !currentTask.completed });
  }
}
