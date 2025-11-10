
import { columns, DataColumn } from "@/components/data/columns";
import { DataTable } from "@/components/data/data-table";
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
