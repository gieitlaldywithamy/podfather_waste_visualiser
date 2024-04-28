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
import { WasteCard } from "../features/card";

type CustomTooltipTypeBar = {
  payload: any;
  active: boolean | undefined;
  label: any;
};

const customTooltip = (props: CustomTooltipTypeBar) => {
  const { payload, active } = props;
  if (!active || !payload) return null;

  return (
    <div className="w-56 rounded-tremor-default border border-tremor-border bg-white p-2 text-tremor-default shadow-tremor-dropdown">
      <WasteCard {...payload[0].payload} />
    </div>
  );
};


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
        customTooltip={customTooltip}
      />
      <div className="grid gap-4 md:grid-cols-3 grid-flow-row">
        {waste.map(
          (waste) => (
            <WasteCard key={waste._id} className="mx-auto" decoration="top" decorationColor="gray" {...waste} />
          )
        )}
      </div>
    </div>
  );
}
