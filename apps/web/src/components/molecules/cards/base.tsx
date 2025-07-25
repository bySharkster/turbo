import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/atoms/card';

interface CardProps {
  cardTitle: string;
  cardDescription: string;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
}
const CardComponent = ({
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
}: CardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDescription>{cardDescription}</CardDescription>
      </CardHeader>
      {cardContent && <CardContent>{cardContent}</CardContent>}
      <CardFooter>
        {cardFooter && <CardAction className="w-full">{cardFooter}</CardAction>}
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
