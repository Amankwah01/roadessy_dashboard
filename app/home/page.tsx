import { columns, DataColumn } from "@/components/data/columns";
import { DataTable } from "@/components/data/data-table";
import getData from "@/components/data/data";
import DropDown from "@/components/DropDown";
import NestedDropdown from "@/components/DropDown";
import NestedDropdowns from "@/components/DropDown";
import { AppPieChart } from "@/components/charts/AppPieChart";
import { AppMapCard } from "@/components/AppMap";
import { AppBarChart } from "@/components/charts/AppBarChart";
import { AppLineChart } from "@/components/charts/AppLineChart";

async function Home() {
  const data = await getData();
  return (
    <div className="flex w-full justify-center">
      <div className="w-full h-full p-1">
        <h1>Overview Map</h1>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4 h-full ">
          <div className="">
            <NestedDropdowns />
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="grid grid-cols-12 gap-2 mt-5 w-5/6">
            <div className="md:col-span-12 lg:col-span-3  col-span-12 h-[40vh]">
              <AppPieChart />
            </div>
            <div className="md:col-span-9 lg:col-span-6  col-span-12 ...">
              <AppMapCard />
            </div>
            <div className="col-span-3 ...">
              <AppBarChart />
            </div>
            <div className="col-span-3 ...">
              <AppBarChart />
            </div>
            <div className="col-span-6">
              <AppLineChart />
            </div>
            <div className="col-span-3 ...">
              <AppBarChart />
            </div>
          </div>

          <div className="flex-col mt-5 w-1/6">
            <div className="h-full">
              <AppPieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
