'use server';

import { TaskDAL } from '@/src/lib/dal/tasks';
import { revalidatePath } from 'next/cache';

export async function addTask(title: string) {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Create the task
    const task = await taskDAL.createTask({ title });

    console.log('Task successfully added!', task);

    // Revalidate the page to show the new task
    revalidatePath('/');

    return { success: true, task };
  } catch (error: any) {
    console.error('Error adding task:', error.message);
    throw new Error(`Failed to add task: ${error.message}`);
  }
}

export async function getTasks() {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Get all tasks for the user
    const tasks = await taskDAL.getUserTasks();

    return { success: true, tasks };
  } catch (error: any) {
    console.error('Error fetching tasks:', error.message);
    throw new Error(`Failed to fetch tasks: ${error.message}`);
  }
}

export async function updateTask(
  taskId: string,
  title?: string,
  completed?: boolean
) {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Update the task
    const task = await taskDAL.updateTask(taskId, { title, completed });

    console.log('Task successfully updated!', task);

    // Revalidate the page to show the updated task
    revalidatePath('/');

    return { success: true, task };
  } catch (error: any) {
    console.error('Error updating task:', error.message);
    throw new Error(`Failed to update task: ${error.message}`);
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
  } catch (error: any) {
    console.error('Error deleting task:', error.message);
    throw new Error(`Failed to delete task: ${error.message}`);
  }
}

export async function toggleTaskCompletion(taskId: string) {
  try {
    // Create authenticated DAL instance
    const taskDAL = await TaskDAL.create();

    // Toggle task completion
    const task = await taskDAL.toggleTaskCompletion(taskId);

    console.log('Task completion toggled!', task);

    // Revalidate the page to show the updated task
    revalidatePath('/');

    return { success: true, task };
  } catch (error: any) {
    console.error('Error toggling task completion:', error.message);
    throw new Error(`Failed to toggle task completion: ${error.message}`);
  }
}
