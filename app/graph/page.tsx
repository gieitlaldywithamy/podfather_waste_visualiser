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
import _ from 'lodash';
import { useSearchParams } from "next/navigation";
import { Loading } from "../features";
import { WasteCard } from "../features/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react";


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

type GraphFilterProps = {
  currentFilter?: string;
  onChange: (newValue: string) => void;
  filterValues: string[];
  placeholder: string;
}

const GraphFilter: React.FC<GraphFilterProps> = ({ onChange, placeholder, filterValues }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {filterValues.map(newFilterValue => <SelectItem value={newFilterValue} key={newFilterValue}>{newFilterValue}</SelectItem>)}
      </SelectContent>
    </Select>
  );
};

export default function Home() {
  const [customerFilter, setCustomerFilter] = useState(undefined);

  const waste = useQuery(api.waste.getWaste);
  const searchParams = useSearchParams();

  

  const search = searchParams.get("ids");
  const ids = search?.split("&");

  const wasteToGraph = customerFilter ? waste?.filter(waste => waste.customer === customerFilter) : waste;

  if (!waste) return <Loading />;

  const customerValues = _.uniq(waste?.map(wasteRow => wasteRow.customer));


  return (
    <div className="p-6">
      <GraphFilter filterValue={customerFilter} onChange={setCustomerFilter} placeholder="Filter By Customer" filterValues={customerValues}/>
      {wasteToGraph && (<BarChart
        className="mt-6"
        data={wasteToGraph}
        index="id"
        categories={["estimatedKg", "actualKg"]}
        colors={["slate", "violet"]}
        yAxisWidth={48}
        customTooltip={customTooltip}
      />)}
      <div className="grid gap-4 md:grid-cols-3 grid-flow-row">
        {wasteToGraph?.map((waste) => (
          <WasteCard
            key={waste._id}
            className="mx-auto"
            decoration="top"
            decorationColor="gray"
            {...waste}
          />
        ))}
      </div>
    </div>
  );
}
