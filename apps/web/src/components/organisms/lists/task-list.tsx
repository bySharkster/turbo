'use client';
import { AnimatePresence, motion } from 'motion/react';
import { Task } from '@/src/lib/dal/tasks';
import { useState, useTransition } from 'react';
import {
  updateTask,
  deleteTask,
  toggleTaskCompletion,
} from '@/src/app/actions/tasks/actions';
import { Button } from '@/src/components/atoms/button';
import { Trash2, Edit3, Check, X, Save } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/src/components/atoms/alert-dialog';
import { Input } from '../../atoms/input';

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [isPending, startTransition] = useTransition();
  const [isCanceling, setIsCanceling] = useState(false);

  const handleToggleComplete = () => {
    startTransition(async () => {
      try {
        await toggleTaskCompletion(task.id);
      } catch (error) {
        console.error('Failed to toggle task:', error);
      }
    });
  };

  const handleSave = () => {
    if (isCanceling) {
      return;
    }
    if (editTitle.trim() && editTitle !== task.title) {
      startTransition(async () => {
        try {
          await updateTask(task.id, editTitle.trim());
          setIsEditing(false);
        } catch (error) {
          console.error('Failed to update task:', error);
        }
      });
    } else {
      setIsEditing(false);
      setEditTitle(task.title);
    }
  };

  const handleCancel = () => {
    setIsCanceling(true);
    setIsEditing(false);
    setEditTitle(task.title);
    setTimeout(() => setIsCanceling(false), 100);
  };

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteTask(task.id);
      } catch (error) {
        console.error('Failed to delete task:', error);
      }
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: -10 }}
      className={`
      group flex items-center gap-3 p-4 rounded-lg border transition-all duration-200
      ${
        task.completed
          ? 'bg-gray-50 border-gray-200 opacity-75'
          : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm'
      }
      ${isPending ? 'opacity-50 pointer-events-none' : ''}
    `}
    >
      {/* Completion Checkbox */}
      <button
        onClick={handleToggleComplete}
        disabled={isPending}
        className={`
          flex items-center justify-center w-5 h-5 rounded border-2 transition-all duration-200
          ${
            task.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400'
          }
        `}
      >
        {task.completed && <Check size={12} />}
      </button>

      {/* Task Content */}
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <Input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <span
            className={`
              text-sm transition-all duration-200
              ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}
            `}
            onDoubleClick={() => !task.completed && setIsEditing(true)}
          >
            {task.title}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div
        className={`
        flex items-center gap-1 transition-opacity duration-200
        ${isEditing ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
      `}
      >
        {isEditing ? (
          <>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleSave}
              disabled={isPending}
              className="h-8 w-8 p-0 text-green-600 hover:text-green-700 hover:bg-green-50"
            >
              <Save size={14} />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onMouseDown={handleCancel}
              disabled={isPending}
              className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            >
              <X size={14} />
            </Button>
          </>
        ) : (
          <>
            {/* Edit Task */}
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setIsEditing(true)}
              disabled={isPending || task.completed}
              className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50 cursor-pointer"
            >
              <Edit3 size={14} />
            </Button>
            {/* Delete Task */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  variant="ghost"
                  disabled={isPending}
                  className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 size={14} />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Task</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete &quot;{task.title}&quot;?
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={handleDelete}
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      </div>

      {/* Completion timestamp */}
      {task.completed && (
        <span className="text-xs text-gray-400 ml-2">✓ Done</span>
      )}
    </motion.li>
  );
}

function TaskList({ tasks }: { tasks: Task[] }) {
  if (!tasks || tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="text-sm">No tasks yet. Add your first task above!</p>
      </div>
    );
  }

  // Separate completed and incomplete tasks
  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="space-y-6">
      {/* Incomplete Tasks */}
      {incompleteTasks.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Active Tasks ({incompleteTasks.length})
          </h3>
          <AnimatePresence mode="wait">
            <ul className="space-y-2">
              {incompleteTasks.map(task => (
                <TaskItem key={task.id} task={task} />
              ))}
            </ul>
          </AnimatePresence>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-3">
            Completed ({completedTasks.length})
          </h3>
          <AnimatePresence mode="wait">
            <ul className="space-y-2">
              {completedTasks.map(task => (
                <TaskItem key={task.id} task={task} />
              ))}
            </ul>
          </AnimatePresence>
        </div>
      )}

      {/* Quick Stats */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex justify-between text-xs text-gray-500">
          <span>{tasks.length} total tasks</span>
          <span>{completedTasks.length} completed</span>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
