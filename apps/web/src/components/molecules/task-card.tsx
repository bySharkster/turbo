'use client';

import { Card, CardContent, CardHeader } from '@/src/components/atoms/card';
import { Button } from '@/src/components/atoms/button';
import { Badge } from '@/src/components/atoms/badge';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/atoms/avatar';
import { Star, Calendar, User, MoreHorizontal } from 'lucide-react';
import { Task, TaskStatus, TaskPriority } from '@/src/types/tasks';

interface TaskCardProps {
  task: Task;
  onToggleComplete?: (taskId: string) => void;
  onToggleStar?: (taskId: string) => void;
  onEdit?: (taskId: string) => void;
  onDelete?: (taskId: string) => void;
}

const priorityColors = {
  [TaskPriority.LOW]: 'bg-blue-100 text-blue-800 border-blue-200',
  [TaskPriority.MEDIUM]: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  [TaskPriority.HIGH]: 'bg-red-100 text-red-800 border-red-200',
};

const statusColors = {
  [TaskStatus.PENDING]: 'bg-gray-100 text-gray-800 border-gray-200',
  [TaskStatus.IN_PROGRESS]: 'bg-blue-100 text-blue-800 border-blue-200',
  [TaskStatus.COMPLETED]: 'bg-green-100 text-green-800 border-green-200',
};

export function TaskCard({
  task,
  onToggleComplete,
  onToggleStar,
}: TaskCardProps) {
  const isCompleted = task.status === TaskStatus.COMPLETED;
  const isStarred = false; // TODO: Add starred functionality later

  // Format due date
  const formatDueDate = (date: string | null) => {
    if (!date) return null;
    const dueDate = new Date(date);
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays === -1) return 'Yesterday';
    if (diffDays < 0) return `${Math.abs(diffDays)} days ago`;
    return `${diffDays} days`;
  };

  return (
    <Card
      className={`relative transition-all hover:shadow-md ${isCompleted ? 'opacity-75' : ''}`}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 flex-1">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => onToggleComplete?.(task.id)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <div className="flex-1">
              <h3
                className={`font-medium text-sm ${isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}`}
              >
                {task.title}
              </h3>
              {task.description && (
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {task.description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className={`p-1 h-6 w-6 ${isStarred ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => onToggleStar?.(task.id)}
            >
              <Star size={14} fill={isStarred ? 'currentColor' : 'none'} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="p-1 h-6 w-6 text-gray-400"
            >
              <MoreHorizontal size={14} />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Status Badge */}
            <Badge
              variant="outline"
              className={`text-xs px-2 py-1 ${statusColors[task.status] || statusColors[TaskStatus.PENDING]}`}
            >
              {task.status === TaskStatus.IN_PROGRESS
                ? 'In Progress'
                : task.status === TaskStatus.PENDING
                  ? 'Pending'
                  : task.status === TaskStatus.COMPLETED
                    ? 'Completed'
                    : task.status}
            </Badge>

            {/* Priority Badge */}
            {task.priority && (
              <Badge
                variant="outline"
                className={`text-xs px-2 py-1 ${priorityColors[task.priority] || priorityColors[TaskPriority.MEDIUM]}`}
              >
                {task.priority === TaskPriority.LOW
                  ? 'Low'
                  : task.priority === TaskPriority.MEDIUM
                    ? 'Medium'
                    : task.priority === TaskPriority.HIGH
                      ? 'High'
                      : task.priority}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            {/* Due Date */}
            {task.due_date && (
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                <span>{formatDueDate(task.due_date)}</span>
              </div>
            )}

            {/* User Avatar - TODO: Add user assignment functionality */}
            <div className="flex items-center gap-1">
              <User size={12} />
              <Avatar className="w-5 h-5">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${task.user_id}`}
                />
                <AvatarFallback className="text-xs">
                  {task.user_id.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* TODO: Add subtask functionality later */}
      </CardContent>
    </Card>
  );
}
