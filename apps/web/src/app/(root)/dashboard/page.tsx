import CardComponent from '@/src/components/molecules/cards/base';
import AddTaskForm from '@/src/components/organisms/forms/add-task';
import { createServerSupabaseClient } from '@/src/utils/supabase/clerk/client';
import TasksList from '@/src/components/organisms/lists/task-list';
import { Task } from '@/src/lib/dal/tasks';

export default async function Dashboard() {
  const supabase = await createServerSupabaseClient();

  // Query the 'tasks' table to render the list of tasks
  const { data, error } = await supabase.from('tasks').select();

  if (error) {
    throw error;
  }

  const tasks = data as Task[];
  if (tasks?.length === 0) {
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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CardComponent
          cardTitle="Tasks App"
          cardDescription="Create your tasks"
          cardContent={<AddTaskForm />}
          cardFooter={<TasksList tasks={tasks} />}
        />
      </main>
    </div>
  );
}
