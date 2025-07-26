'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/atoms/tabs';
import { Button } from '@/src/components/atoms/button';
import { Plus, ListPlus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/atoms/card';
import { toast } from 'sonner';
import { Task } from '@/src/lib/dal/tasks';
import { TaskList } from '@/src/lib/dal/task-list';
import { Input } from '@/src/components/atoms/input';
import { cn } from '@/src/lib/utils';



// Task Lists Section
function TaskListsSection({ taskLists = [] }: { taskLists: TaskList[] }) {
  
  const handleCreateList = () => {
    // This would be replaced with actual list creation logic
    toast.info('Creating a new list...');
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Your Lists</h2>
        <Button 
          size="sm" 
          variant="outline" 
          className="flex items-center gap-1"
          onClick={handleCreateList}
        >
          <ListPlus size={16} />
          <span>New List</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {taskLists.length === 0 ? (
          <Card className="col-span-full">
            <CardContent className="pt-6 text-center text-muted-foreground">
              <p>No lists yet. Create your first list to get started!</p>
            </CardContent>
          </Card>
        ) : (
          taskLists.map(list => (
            <Card key={list.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{list.title}</CardTitle>
                <CardDescription className="text-xs">
                  Created {new Date(list.created_at).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-2 flex justify-between">
                <Button variant="ghost" size="sm">View Tasks</Button>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-red-600"
                  >
                    Delete
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

// Personal Tasks Section
function PersonalTasksSection({ tasks = [] }: { tasks: Task[] }) {
  
  const handleAddTask = () => {
    // This would be replaced with actual task creation logic
    toast.info('Adding a new task...');
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Your Tasks</h2>
        <Button 
          size="sm" 
          variant="outline" 
          className="flex items-center gap-1"
          onClick={handleAddTask}
        >
          <Plus size={16} />
          <span>Add Task</span>
        </Button>
      </div>
      
      <Card className="">
        <CardHeader>
          <CardTitle>Quick Add</CardTitle>
          <CardDescription>Add a new task to your list</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex items-center gap-2 w-full">
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Enter new task"
            />
            <Button type="submit">Add</Button>
          </form>
        </CardContent>
        <CardFooter>
          {tasks.length === 0 ? (
            <div className="text-center py-8 text-gray-500 w-full">
              <p className="text-sm">No tasks yet. Add your first task above!</p>
            </div>
          ) : (
            <div className="space-y-6 w-full">
              {/* Task list would go here */}
              <div className="space-y-2">
                {tasks.map(task => (
                  <div 
                    key={task.id}
                    className="flex items-center justify-between p-3  bg-secondary rounded-md border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-center gap-2 w-full">
                      <Input type="checkbox" defaultChecked={task.status === 'completed'} className="w-4 h-4" />
                      <span className={cn("w-full", task.status === 'completed' ? 'line-through text-gray-400' : '')}>
                        {task.title}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">Edit</Button>
                      <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

// Organization Tasks Section
function OrganizationTasksSection({ tasks = [] }: { tasks: Task[] }) {
  if (tasks.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center text-muted-foreground">
          <p>No organization tasks available.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Organization Tasks</CardTitle>
        <CardDescription>Tasks shared with your organization</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {tasks.map(task => (
            <div 
              key={task.id}
              className="flex items-center justify-between p-3 bg-white rounded-md border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={task.status === 'completed'} />
                <span className={task.status === 'completed' ? 'line-through text-gray-400' : ''}>
                  {task.title}
                </span>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface DashboardClientProps {
  personalTasks: Task[];
  orgTasks: Task[];
  taskLists: TaskList[];
}

export function DashboardClient({ personalTasks, orgTasks, taskLists }: DashboardClientProps) {
  // Using onValueChange for analytics or other side effects if needed
  const handleTabChange = (value: string) => {
    // Could be used for analytics or other side effects
    console.log(`Tab changed to: ${value}`);
  };
  
  return (
    <Tabs defaultValue="tasks" className="w-full" onValueChange={handleTabChange}>
      <TabsList className="mb-6">
        <TabsTrigger value="tasks">Tasks</TabsTrigger>
        <TabsTrigger value="lists">Lists</TabsTrigger>
        <TabsTrigger value="organization">Organization</TabsTrigger>
      </TabsList>
      
      <TabsContent value="tasks" className="space-y-6">
        <PersonalTasksSection tasks={personalTasks} />
      </TabsContent>
      
      <TabsContent value="lists" className="space-y-6">
        <TaskListsSection taskLists={taskLists} />
      </TabsContent>
      
      <TabsContent value="organization" className="space-y-6">
        <OrganizationTasksSection tasks={orgTasks} />
      </TabsContent>
    </Tabs>
  );
}
