import {
  Card,
  CardProps,
  List,
  ListItem,
  ProgressBar,
  Title,
} from "@tremor/react";
import { Waste } from "../table";

type WasteCardProps = Waste & CardProps;

export const WasteCard: React.FC<WasteCardProps> = ({
  customer,
  actualKg,
  estimatedKg,
  wasteType,
  month,
  year,
  site,
}) => {
  return (
    <Card className="mx-auto" decoration="top" decorationColor="gray">
      <Title className="mb-2 text-bold">{customer}</Title>
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
        <span className="italic">Actual {actualKg}kg</span>
        <span className="italic">Estimated {estimatedKg}kg</span>
      </p>
      <ProgressBar
        value={Math.ceil((actualKg / estimatedKg) * 100)}
        color="green"
        className="mt-3"
      />
      <span>{Math.ceil((actualKg / estimatedKg) * 100)} % </span>
      <List>
        <ListItem>
          <span>Waste Type:</span>
          <span>{wasteType}</span>
        </ListItem>
        <ListItem>
          <span>Date:</span>
          <span>{`${month}/${year}`}</span>
        </ListItem>
        <ListItem>
          <span>Site:</span>
          <span>{site}</span>
        </ListItem>
      </List>
    </Card>
  );
};
