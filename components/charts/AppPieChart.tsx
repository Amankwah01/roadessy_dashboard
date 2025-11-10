"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart with text";

const chartData = [
  { defects: "Potholes", roads: 275, fill: "var(--color-potholes)" },
  { defects: "Depressions", roads: 200, fill: "var(--color-depressions)" },
  { defects: "Cracks", roads: 287, fill: "var(--color-cracks)" },
  { defects: "Rutting", roads: 173, fill: "var(--color-rutting)" },
  { defects: "Other", roads: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  roads: {
    label: "Roads",
  },
  potholes: {
    label: "potholes",
    color: "var(--chart-1)",
  },
  depressions: {
    label: "depressions",
    color: "var(--chart-2)",
  },
  cracks: {
    label: "cracks",
    color: "var(--chart-3)",
  },
  rutting: {
    label: "rutting",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function AppPieChart() {
  const totalroads = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.roads, 0);
  }, []);

  return (
    <Card className="flex flex-col min-h-[425px] w-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Road Defects</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="roads"
              nameKey="defects"
              innerRadius={50}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalroads.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          roads
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total roads for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
