import React from 'react'
import AppBarChart from '@/components/AppBarChart';

const page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 \">
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
  );
}

export default page