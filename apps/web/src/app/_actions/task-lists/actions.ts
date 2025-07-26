'use server';

import {
  CreateTaskListInput,
  TaskListDAL,
  UpdateTaskListInput,
} from '@/src/lib/dal/task-list';
import { TaskDAL } from '@/src/lib/dal/tasks';
import { revalidatePath } from 'next/cache';

export async function addTaskList(input: CreateTaskListInput) {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();

    // Create the tasklist
    const taskList = await taskListDAL.createTaskList(input);

    console.log('Tasklist successfully added!', taskList);

    // Revalidate the page to show the new tasklist
    revalidatePath('/');

    return { success: true, taskList };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error adding tasklist:', errorMessage);
    throw new Error(`Failed to add tasklist: ${errorMessage}`);
  }
}

export async function getTaskListById(taskListId: string) {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();

    // Get the tasklist by ID
    const taskList = await taskListDAL.getTaskListById(taskListId);

    return { success: true, taskList };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching tasklist:', errorMessage);
    throw new Error(`Failed to fetch tasklist: ${errorMessage}`);
  }
}

export async function getUserTaskLists() {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();

    // Get all tasks for the user
    const taskLists = await taskListDAL.getUserTaskLists();

    return { success: true, taskLists };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching tasklists:', errorMessage);
    throw new Error(`Failed to fetch tasklists: ${errorMessage}`);
  }
}

export async function getOrgTaskLists() {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();

    // Get all tasks for the user
    const taskLists = await taskListDAL.getOrgTaskLists();

    return { success: true, taskLists };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching tasklists:', errorMessage);
    throw new Error(`Failed to fetch tasklists: ${errorMessage}`);
  }
}

export async function updateTaskList(
  taskId: string,
  input: UpdateTaskListInput
) {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();

    // Update the task
    const taskList = await taskListDAL.updateTaskList(taskId, input);

    console.log('Tasklist successfully updated!', taskList);

    // Revalidate the page to show the updated task
    revalidatePath('/');

    return { success: true, taskList };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error updating tasklist:', errorMessage);
    throw new Error(`Failed to update tasklist: ${errorMessage}`);
  }
}

export async function deleteTaskList(taskId: string) {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();

    // Delete the task
    await taskListDAL.deleteTaskList(taskId);

    console.log('Tasklist successfully deleted!');

    // Revalidate the page to remove the deleted task
    revalidatePath('/');

    return { success: true };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error deleting tasklist:', errorMessage);
    throw new Error(`Failed to delete tasklist: ${errorMessage}`);
  }
}

export async function archiveTaskList(taskId: string) {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();

    // Toggle task completion
    const taskList = await taskListDAL.updateTaskList(taskId, {
      is_archived: true,
    });

    console.log('Tasklist completion toggled!', taskList);

    // Revalidate the page to show the updated task
    revalidatePath('/');

    return { success: true, taskList };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error toggling task completion:', errorMessage);
    throw new Error(`Failed to toggle task completion: ${errorMessage}`);
  }
}

export async function unarchiveTaskList(taskId: string) {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();

    // Toggle task completion
    const taskList = await taskListDAL.updateTaskList(taskId, {
      is_archived: false,
    });

    console.log('Tasklist completion toggled!', taskList);

    // Revalidate the page to show the updated task
    revalidatePath('/');

    return { success: true, taskList };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error toggling task completion:', errorMessage);
    throw new Error(`Failed to toggle task completion: ${errorMessage}`);
  }
}

export async function duplicateTaskList(taskId: string) {
  try {
    // Create authenticated DAL instance
    const taskListDAL = await TaskListDAL.create();
    const taskDAL = await TaskDAL.create();

    const originalTaskList = await taskListDAL.getTaskListById(taskId);
    if (!originalTaskList) {
      throw new Error('Tasklist not found');
    }

    const newTaskList = await taskListDAL.createTaskList({
      title: originalTaskList.title + ' (Copy)',
      is_template: originalTaskList.is_template,
      is_archived: originalTaskList.is_archived,
      shared_with_org: originalTaskList.shared_with_org,
      organization_id: originalTaskList.organization_id,
    });

    console.log('Tasklist successfully duplicated!', newTaskList);

    const originalTasks = await taskDAL.getTasksByListId(taskId);
    console.log('Tasks successfully duplicated!', originalTasks);
    const newTasks = await Promise.all(
      originalTasks.map(async task => {
        return taskDAL.createTask({
          title: task.title,
          description: task.description,
          list_id: newTaskList.id,
          status: task.status,
          priority: task.priority,
          due_date: task.due_date,
          organization_id: task.organization_id || undefined,
          shared_with_org: task.shared_with_org,
        });
      })
    );

    console.log('Tasks successfully duplicated!', newTasks);

    // Revalidate the page to show the new tasklist
    revalidatePath('/');

    return { success: true, taskList: newTaskList, tasks: newTasks };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error duplicating tasklist:', errorMessage);
    throw new Error(`Failed to duplicate tasklist: ${errorMessage}`);
  }
}
