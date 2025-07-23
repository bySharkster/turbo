import { Button } from '@/src/components/atoms/button';
import CardComponent from '@/src/components/atoms/molecules/cards/base';

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CardComponent
          cardTitle="Todo App"
          cardDescription="Todo App"
          cardContent="Todo List"
          cardFooter={<Button>Add Todo</Button>}
        />
      </main>
    </div>
  );
}
