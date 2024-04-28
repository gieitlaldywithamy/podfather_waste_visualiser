"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import {
  BarChart,
  Card,
  List,
  ListItem,
  ProgressBar,
  Title,
} from "@tremor/react";
import { useSearchParams } from "next/navigation";
import { Loading } from "../features";

export default function Home() {
  const waste = useQuery(api.waste.getWaste);
  const searchParams = useSearchParams();

  const search = searchParams.get("ids");
  const ids = search?.split("&");


  if (!waste) return <Loading />;

  return (
    <div className="p-6">
      <BarChart
        className="mt-6"
        data={waste}
        index="id"
        categories={["estimatedKg", "actualKg"]}
        colors={["slate", "violet"]}
        yAxisWidth={48}
      />
      <div className="grid gap-4 md:grid-cols-3 grid-flow-row">
        {waste.map(
          ({
            _id,
            customer,
            wasteType,
            month,
            year,
            site,
            estimatedKg,
            actualKg,
          }) => (
            <Card key={_id} className="mx-auto" decoration="top" decorationColor="gray">
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
          )
        )}
      </div>
    </div>
  );
}
