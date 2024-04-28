"use client";


import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Loading, SearchableTable, wasteTableColumns as wasteColumns } from "./features";

export default function Home() {
  const wasteData = useQuery(api.waste.getWaste);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 py-2">
        {!wasteData ? <Loading />: <SearchableTable data={wasteData} columns={wasteColumns} />}
    </main>
  );
}
