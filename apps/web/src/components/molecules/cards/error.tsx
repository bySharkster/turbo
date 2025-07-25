import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
} from '@/src/components/atoms/card';
import { cn } from '@/src/lib/utils';

interface CardProps {
  cardTitle: string;
  cardDescription: string;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
  className?: string;
}
const CardComponent = ({
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
  className,
}: CardProps) => {
  return (
    <Card
      className={cn(
        `w-full h-[60vh] flex flex-col items-center justify-center gap-auto`,
        className
      )}
    >
      {cardContent && (
        <CardContent className="flex flex-row items-center justify-center gap-2 shrink ">
          <div className="flex flex-col items-center justify-center gap-2 grow">
            <h1 className="text-4xl font-bold">{cardTitle}</h1>
            <h2 className="text-2xl font-semibold">{cardDescription}</h2>
          </div>
          {cardContent}
        </CardContent>
      )}
      <CardFooter>
        {cardFooter && <CardAction>{cardFooter}</CardAction>}
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
