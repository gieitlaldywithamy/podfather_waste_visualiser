"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Waste = {
  customer: string;
  site: string;
  year: number;
  month: number;
  wasteType: string;
  estimatedKg: number;
  actualKg: number;
  _id: string;
};

export const wasteTableColumns: ColumnDef<Waste>[] = [
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "wasteType",
    header: "Waste Type",
  },
  {
    accessorKey: "site",
    header: "Site",
  },
  {
    accessorKey: "year",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Year
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "month",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Month
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "estimatedKg",
    header: "estimatedKg",
  },
  {
    accessorKey: "actualKg",
    header: "actualKg",
  },
];
