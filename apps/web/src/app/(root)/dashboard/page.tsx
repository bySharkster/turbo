import CardComponent from '@/src/components/molecules/cards/base';
import AddTaskForm from '@/src/components/organisms/forms/add-task';
import TasksList from '@/src/components/organisms/lists/task-list';
import { TaskDAL } from '@/src/lib/dal/tasks';

export default async function DashboardPage() {
  const taskDAL = await TaskDAL.createOrRedirect('/sign-in');
  const personalTasks = await taskDAL.getUserTasks();
  const orgTasks = await taskDAL.getOrgTasks();

  if (personalTasks?.length === 0) {
    return (
      <div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <CardComponent
            cardTitle="Tasks App"
            cardDescription="Create your tasks"
            cardContent={<AddTaskForm />}
            cardFooter={<pre className="text-center">no tasks found</pre>}
          />
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-around py-12 px-4 md:p-24">
        <CardComponent
          cardTitle="Tasks App"
          cardDescription="Create your tasks"
          cardContent={<AddTaskForm />}
          cardFooter={<TasksList tasks={personalTasks} />}
        />
        {orgTasks?.length > 0 && (
          <CardComponent
            cardTitle="Organization Tasks"
            cardDescription="Tasks from your organization"
            cardContent={<TasksList tasks={orgTasks} />}
          />
        )}
      </main>
    </div>
  );
}
