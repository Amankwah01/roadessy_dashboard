import React from 'react'
import AppBarChart from '@/components/charts/AppBarChart';
import { AppLineChart } from '@/components/charts/AppLineChart';
import { AppMapCard } from '@/components/AppMap';

const page = () => {
  return (
    <div className="">
      <div className="flex my-4">
        <div className="w-full h-full bg-primary-foreground p-4 rounded-lg">
          <AppMapCard />
        </div>
      </div>
      <div className="flex my-4">
        <div className="w-full bg-primary-foreground p-4 rounded-lg">
          <AppLineChart />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
        <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
        <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
        <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2">
          Test2
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      </div>
    </div>
  );
}

export default page