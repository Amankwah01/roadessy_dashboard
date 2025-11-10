import React from "react";
import { AppBarChart } from "@/components/charts/AppBarChart";
import { AppLineChart } from "@/components/charts/AppLineChart";
import { AppPieChart } from "@/components/charts/AppPieChart";
import { AppMapCard } from "@/components/AppMap";
import { columns, DataColumn } from "@/components/data/columns";
import { DataTable } from "@/components/data/data-table";
import { ChartBarHorizontal } from "@/components/charts/AppBarChartH";
import getData from "@/components/data/data";

async function page() {
  const data = await getData();
  return (
    <div className="flex w-full justify-center">
      <div className="w-full h-full  p-1 rounded-lg">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default page;
