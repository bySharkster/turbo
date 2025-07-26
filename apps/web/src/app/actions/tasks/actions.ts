'use server';

import {
  CreateTaskInput,
  TaskDAL,
  TaskStatus,
  UpdateTaskInput,
} from '@/src/lib/dal/tasks';
import { revalidatePath } from 'next/cache';

export async function addTask(input: CreateTaskInput) {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Create the task
    const task = await taskDAL.createTask(input);

    console.log('Task successfully added!', task);

    // Revalidate the page to show the new task
    revalidatePath('/');

    return { success: true, task };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error adding task:', errorMessage);
    throw new Error(`Failed to add task: ${errorMessage}`);
  }
}

export async function getTasks() {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Get all tasks for the user
    const tasks = await taskDAL.getUserTasks();

    return { success: true, tasks };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching tasks:', errorMessage);
    throw new Error(`Failed to fetch tasks: ${errorMessage}`);
  }
}

export async function getTasksByListId(listId: string) {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Get all tasks for the user
    const tasks = await taskDAL.getTasksByListId(listId);

    return { success: true, tasks };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error fetching tasks:', errorMessage);
    throw new Error(`Failed to fetch tasks: ${errorMessage}`);
  }
}

export async function updateTask(taskId: string, input: UpdateTaskInput) {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Update the task
    const task = await taskDAL.updateTask(taskId, input);

    console.log('Task successfully updated!', task);

    // Revalidate the page to show the updated task
    revalidatePath('/');

    return { success: true, task };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error updating task:', errorMessage);
    throw new Error(`Failed to update task: ${errorMessage}`);
  }
}

export async function deleteTask(taskId: string) {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Delete the task
    await taskDAL.deleteTask(taskId);

    console.log('Task successfully deleted!');

    // Revalidate the page to remove the deleted task
    revalidatePath('/');

    return { success: true };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error deleting task:', errorMessage);
    throw new Error(`Failed to delete task: ${errorMessage}`);
  }
}

export async function toggleTaskStatus(taskId: string, status: TaskStatus) {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Toggle task completion
    const task = await taskDAL.updateTask(taskId, { status });

    console.log('Task completion toggled!', task);

    // Revalidate the page to show the updated task
    revalidatePath('/');

    return { success: true, task };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';
    console.error('Error toggling task completion:', errorMessage);
    throw new Error(`Failed to toggle task completion: ${errorMessage}`);
  }
}
