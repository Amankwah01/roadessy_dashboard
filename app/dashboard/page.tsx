import React from "react";
import {AppBarChart} from "@/components/charts/AppBarChart";
import { AppLineChart } from "@/components/charts/AppLineChart";
import { AppPieChart } from "@/components/charts/AppPieChart";
import { AppMapCard } from "@/components/AppMap";
import { columns, DataColumn } from "@/components/data/columns";
import { DataTable } from "@/components/data/data-table";
import { ChartBarHorizontal } from "@/components/charts/AppBarChartH";
import getData  from "@/components/data/data";



async function page() {
  const data = await getData();
  return (
    <div className="">
      <div className="flex w-full gap-4">
        <div className="bg-primary-foreground p-1 rounded-lg w-1/3">
          <AppPieChart />
        </div>
        <div className="bg-primary-foreground p-1 rounded-lg w-1/3">
          <ChartBarHorizontal />
        </div>
        <div className="bg-primary-foreground p-1 rounded-lg w-1/3">
          <AppBarChart />
        </div>
      </div>
      <div className="flex my-4">
        <div className="w-full h-full bg-primary-foreground p-1 rounded-lg">
          <AppMapCard />
        </div>
      </div>
      <div className="flex my-4">
        <div className="w-full bg-primary-foreground p-1 rounded-lg">
          <AppLineChart />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-1 rounded-lg lg:col-span-2">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-1 rounded-lg">Test</div>
        <div className="bg-primary-foreground p-1 rounded-lg">Test</div>
        <div className="bg-primary-foreground p-1 rounded-lg">Test</div>
        <div className="bg-primary-foreground p-1 rounded-lg lg:col-span-2">
          Test2
        </div>
        <div className="bg-primary-foreground p-1 rounded-lg">Test</div>
      </div>
      
    </div>
  );
}

export default page;
