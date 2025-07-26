import { TaskListDAL } from '@/src/lib/dal/task-list';
import { TaskDAL } from '@/src/lib/dal/tasks';
import { DashboardClient } from './dashboard-client';



export default async function DashboardPage() {
  // Fetch data on the server
  const taskDAL = await TaskDAL.createOrRedirect('/sign-in');
  const taskListDAL = await TaskListDAL.createOrRedirect('/sign-in');
  
  // Get user tasks and task lists
  const personalTasks = await taskDAL.getUserTasks();
  const orgTasks = await taskDAL.getOrgTasks();
  const taskLists = await taskListDAL.getUserTaskLists();
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <DashboardClient 
        personalTasks={personalTasks} 
        orgTasks={orgTasks}
        taskLists={taskLists}
      />
    </div>
  );
}
