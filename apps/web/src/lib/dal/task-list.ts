import { BaseDAL } from './base';

// Re-export types from shared types file
export type {
  TaskList,
  CreateTaskListInput,
  UpdateTaskListInput,
} from '@/src/types/task-lists';

// Import types for internal use
import type {
  TaskList,
  CreateTaskListInput,
  UpdateTaskListInput,
} from '@/src/types/task-lists';

export class TaskListDAL extends BaseDAL {
  async getTaskListById(taskListId: string): Promise<TaskList | null> {
    const { data, error } = await this.supabase!.from('task_lists')
      .select()
      .eq('id', taskListId)
      .single();

    if (error) {
      console.error('Error fetching task list:', error);
      throw new Error(`Failed to fetch task list: ${error.message}`);
    }

    return data;
  }

  async getUserTaskLists(): Promise<TaskList[]> {
    const { data, error } = await this.supabase!.from('task_lists')
      .select()
      .eq('user_id', this.getCurrentUserId());

    if (error) {
      console.error('Error fetching task lists:', error);
      throw new Error(`Failed to fetch task lists: ${error.message}`);
    }

    return data;
  }

  async getOrgTaskLists(): Promise<TaskList[]> {
    const { data, error } = await this.supabase!.from('task_lists')
      .select()
      .eq('organization_id', this.getCurrentOrgId());

    if (error) {
      console.error('Error fetching task lists:', error);
      throw new Error(`Failed to fetch task lists: ${error.message}`);
    }

    return data;
  }

  async createTaskList(input: CreateTaskListInput): Promise<TaskList> {
    const { data, error } = await this.supabase!.from('task_lists')
      .insert({
        title: input.title,
        user_id: this.getCurrentUserId(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        organization_id: input.organization_id,
        is_template: input.is_template || false,
        is_archived: input.is_archived || false,
        shared_with_org: input.shared_with_org || false,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating task list:', error);
      throw new Error(`Failed to create task list: ${error.message}`);
    }

    return data;
  }

  async updateTaskList(
    taskListId: string,
    input: UpdateTaskListInput
  ): Promise<TaskList> {
    const { data, error } = await this.supabase!.from('task_lists')
      .update({
        ...input,
        updated_at: new Date().toISOString(),
      })
      .eq('id', taskListId)
      .select()
      .single();

    if (error) {
      console.error('Error updating task list:', error);
      throw new Error(`Failed to update task list: ${error.message}`);
    }

    return data;
  }

  async deleteTaskList(taskListId: string): Promise<void> {
    const { error } = await this.supabase!.from('task_lists')
      .delete()
      .eq('id', taskListId);

    if (error) {
      console.error('Error deleting task list:', error);
      throw new Error(`Failed to delete task list: ${error.message}`);
    }
  }
}
