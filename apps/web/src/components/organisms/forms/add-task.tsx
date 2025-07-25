'use client';
import React, { useState, useTransition } from 'react';
import { addTask } from '@/src/app/actions/tasks/actions';
import { useRouter } from 'next/navigation';
import { Input } from '../../atoms/input';
import { Button } from '../../atoms/button';
import { Loader2 } from 'lucide-react';

function AddTaskForm() {
  const [taskTitle, setTaskTitle] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function onSubmit() {
    startTransition(async () => {
      await addTask(taskTitle);
      setTaskTitle('');
      router.refresh();
    });
  }

  return (
    <form action={onSubmit} className="flex items-center gap-2 w-full">
      <Input
        autoFocus
        type="text"
        name="title"
        placeholder="Enter new task"
        onChange={e => setTaskTitle(e.target.value)}
        value={taskTitle}
      />
      <Button type="submit" disabled={isPending}>
        {' '}
        {isPending ? <Loader2 size={16} className="animate-spin" /> : 'Add'}
      </Button>
    </form>
  );
}
export default AddTaskForm;
