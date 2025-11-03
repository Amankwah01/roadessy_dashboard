"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A linear area chart";

// const chartData = [
//   { date: "2024-04-01", desktop: 222, mobile: 150 },
//   { date: "2024-04-02", desktop: 97, mobile: 180 },
//   { date: "2024-04-03", desktop: 167, mobile: 120 },
//   { date: "2024-04-04", desktop: 242, mobile: 260 },
//   { date: "2024-04-05", desktop: 373, mobile: 290 },
//   { date: "2024-04-06", desktop: 301, mobile: 340 },
//   { date: "2024-04-07", desktop: 245, mobile: 180 },
//   { date: "2024-04-08", desktop: 409, mobile: 320 },
//   { date: "2024-04-09", desktop: 59, mobile: 110 },
//   { date: "2024-04-10", desktop: 261, mobile: 190 },
//   { date: "2024-04-11", desktop: 327, mobile: 350 },
//   { date: "2024-04-12", desktop: 292, mobile: 210 },
//   { date: "2024-04-13", desktop: 342, mobile: 380 },
//   { date: "2024-04-14", desktop: 137, mobile: 220 },
//   { date: "2024-04-15", desktop: 120, mobile: 170 },
//   { date: "2024-04-16", desktop: 138, mobile: 190 },
//   { date: "2024-04-17", desktop: 446, mobile: 360 },
//   { date: "2024-04-18", desktop: 364, mobile: 410 },
//   { date: "2024-04-19", desktop: 243, mobile: 180 },
//   { date: "2024-04-20", desktop: 89, mobile: 150 },
//   { date: "2024-04-21", desktop: 137, mobile: 200 },
//   { date: "2024-04-22", desktop: 224, mobile: 170 },
//   { date: "2024-04-23", desktop: 138, mobile: 230 },
//   { date: "2024-04-24", desktop: 387, mobile: 290 },
//   { date: "2024-04-25", desktop: 215, mobile: 250 },
//   { date: "2024-04-26", desktop: 75, mobile: 130 },
//   { date: "2024-04-27", desktop: 383, mobile: 420 },
//   { date: "2024-04-28", desktop: 122, mobile: 180 },
//   { date: "2024-04-29", desktop: 315, mobile: 240 },
//   { date: "2024-04-30", desktop: 454, mobile: 380 },
//   { date: "2024-05-01", desktop: 165, mobile: 220 },
//   { date: "2024-05-02", desktop: 293, mobile: 310 },
//   { date: "2024-05-03", desktop: 247, mobile: 190 },
//   { date: "2024-05-04", desktop: 385, mobile: 420 },
//   { date: "2024-05-05", desktop: 481, mobile: 390 },
//   { date: "2024-05-06", desktop: 498, mobile: 520 },
//   { date: "2024-05-07", desktop: 388, mobile: 300 },
//   { date: "2024-05-08", desktop: 149, mobile: 210 },
//   { date: "2024-05-09", desktop: 227, mobile: 180 },
//   { date: "2024-05-10", desktop: 293, mobile: 330 },
//   { date: "2024-05-11", desktop: 335, mobile: 270 },
//   { date: "2024-05-12", desktop: 197, mobile: 240 },
//   { date: "2024-05-13", desktop: 197, mobile: 160 },
//   { date: "2024-05-14", desktop: 448, mobile: 490 },
//   { date: "2024-05-15", desktop: 473, mobile: 380 },
//   { date: "2024-05-16", desktop: 338, mobile: 400 },
//   { date: "2024-05-17", desktop: 499, mobile: 420 },
//   { date: "2024-05-18", desktop: 315, mobile: 350 },
//   { date: "2024-05-19", desktop: 235, mobile: 180 },
//   { date: "2024-05-20", desktop: 177, mobile: 230 },
//   { date: "2024-05-21", desktop: 82, mobile: 140 },
//   { date: "2024-05-22", desktop: 81, mobile: 120 },
//   { date: "2024-05-23", desktop: 252, mobile: 290 },
//   { date: "2024-05-24", desktop: 294, mobile: 220 },
//   { date: "2024-05-25", desktop: 201, mobile: 250 },
//   { date: "2024-05-26", desktop: 213, mobile: 170 },
//   { date: "2024-05-27", desktop: 420, mobile: 460 },
//   { date: "2024-05-28", desktop: 233, mobile: 190 },
//   { date: "2024-05-29", desktop: 78, mobile: 130 },
//   { date: "2024-05-30", desktop: 340, mobile: 280 },
//   { date: "2024-05-31", desktop: 178, mobile: 230 },
//   { date: "2024-06-01", desktop: 178, mobile: 200 },
//   { date: "2024-06-02", desktop: 470, mobile: 410 },
//   { date: "2024-06-03", desktop: 103, mobile: 160 },
//   { date: "2024-06-04", desktop: 439, mobile: 380 },
//   { date: "2024-06-05", desktop: 88, mobile: 140 },
//   { date: "2024-06-06", desktop: 294, mobile: 250 },
//   { date: "2024-06-07", desktop: 323, mobile: 370 },
//   { date: "2024-06-08", desktop: 385, mobile: 320 },
//   { date: "2024-06-09", desktop: 438, mobile: 480 },
//   { date: "2024-06-10", desktop: 155, mobile: 200 },
//   { date: "2024-06-11", desktop: 92, mobile: 150 },
//   { date: "2024-06-12", desktop: 492, mobile: 420 },
//   { date: "2024-06-13", desktop: 81, mobile: 130 },
//   { date: "2024-06-14", desktop: 426, mobile: 380 },
//   { date: "2024-06-15", desktop: 307, mobile: 350 },
//   { date: "2024-06-16", desktop: 371, mobile: 310 },
//   { date: "2024-06-17", desktop: 475, mobile: 520 },
//   { date: "2024-06-18", desktop: 107, mobile: 170 },
//   { date: "2024-06-19", desktop: 341, mobile: 290 },
//   { date: "2024-06-20", desktop: 408, mobile: 450 },
//   { date: "2024-06-21", desktop: 169, mobile: 210 },
//   { date: "2024-06-22", desktop: 317, mobile: 270 },
//   { date: "2024-06-23", desktop: 480, mobile: 530 },
//   { date: "2024-06-24", desktop: 132, mobile: 180 },
//   { date: "2024-06-25", desktop: 141, mobile: 190 },
//   { date: "2024-06-26", desktop: 434, mobile: 380 },
//   { date: "2024-06-27", desktop: 448, mobile: 490 },
//   { date: "2024-06-28", desktop: 149, mobile: 200 },
//   { date: "2024-06-29", desktop: 103, mobile: 160 },
//   { date: "2024-06-30", desktop: 446, mobile: 400 },

// ]

const chartIRIData = [
  { date: "2024-04-01", IRI: 222 },
  { date: "2024-04-02", IRI: 97 },
  { date: "2024-04-03", IRI: 167 },
  { date: "2024-04-04", IRI: 242 },
  { date: "2024-04-05", IRI: 373 },
  { date: "2024-04-06", IRI: 301 },
  { date: "2024-04-07", IRI: 245 },
  { date: "2024-04-08", IRI: 409 },
  { date: "2024-04-09", IRI: 59 },
  { date: "2024-04-10", IRI: 261 },
  { date: "2024-04-11", IRI: 327 },
  { date: "2024-04-12", IRI: 292 },
  { date: "2024-04-13", IRI: 342 },
  { date: "2024-04-14", IRI: 137 },
  { date: "2024-04-15", IRI: 120 },
  { date: "2024-04-16", IRI: 138 },
  { date: "2024-04-17", IRI: 446 },
  { date: "2024-04-18", IRI: 364 },
  { date: "2024-04-19", IRI: 243 },
  { date: "2024-04-20", IRI: 89 },
  { date: "2024-04-21", IRI: 137 },
  { date: "2024-04-22", IRI: 224 },
  { date: "2024-04-23", IRI: 138 },
  { date: "2024-04-24", IRI: 387 },
  { date: "2024-04-25", IRI: 215 },
  { date: "2024-04-26", IRI: 75 },
  { date: "2024-04-27", IRI: 383 },
  { date: "2024-04-28", IRI: 122 },
  { date: "2024-04-29", IRI: 315 },
  { date: "2024-04-30", IRI: 454 },
  { date: "2024-05-01", IRI: 165 },
  { date: "2024-05-02", IRI: 293 },
  { date: "2024-05-03", IRI: 247 },
  { date: "2024-05-04", IRI: 385 },
  { date: "2024-05-05", IRI: 481 },
  { date: "2024-05-06", IRI: 498 },
  { date: "2024-05-07", IRI: 388 },
  { date: "2024-05-08", IRI: 149 },
  { date: "2024-05-09", IRI: 227 },
  { date: "2024-05-10", IRI: 293 },
  { date: "2024-05-11", IRI: 335 },
  { date: "2024-05-12", IRI: 197 },
  { date: "2024-05-13", IRI: 197 },
  { date: "2024-05-14", IRI: 448 },
  { date: "2024-05-15", IRI: 473 },
  { date: "2024-05-16", IRI: 338 },
  { date: "2024-05-17", IRI: 499 },
  { date: "2024-05-18", IRI: 315 },
  { date: "2024-05-19", IRI: 235 },
  { date: "2024-05-20", IRI: 177 },
  { date: "2024-05-21", IRI: 82 },
  { date: "2024-05-22", IRI: 81 },
  { date: "2024-05-23", IRI: 252 },
  { date: "2024-05-24", IRI: 294 },
  { date: "2024-05-25", IRI: 201 },
  { date: "2024-05-26", IRI: 213 },
  { date: "2024-05-27", IRI: 420 },
  { date: "2024-05-28", IRI: 233 },
  { date: "2024-05-29", IRI: 78 },
  { date: "2024-05-30", IRI: 340 },
  { date: "2024-05-31", IRI: 178 },
  { date: "2024-06-01", IRI: 178 },
  { date: "2024-06-02", IRI: 470 },
  { date: "2024-06-03", IRI: 103 },
  { date: "2024-06-04", IRI: 439 },
  { date: "2024-06-05", IRI: 88 },
  { date: "2024-06-06", IRI: 294 },
  { date: "2024-06-07", IRI: 323 },
  { date: "2024-06-08", IRI: 385 },
  { date: "2024-06-09", IRI: 438 },
  { date: "2024-06-10", IRI: 155 },
  { date: "2024-06-11", IRI: 92 },
  { date: "2024-06-12", IRI: 492 },
  { date: "2024-06-13", IRI: 81 },
  { date: "2024-06-14", IRI: 426 },
  { date: "2024-06-15", IRI: 307 },
  { date: "2024-06-16", IRI: 371 },
  { date: "2024-06-17", IRI: 475 },
  { date: "2024-06-18", IRI: 107 },
  { date: "2024-06-19", IRI: 341 },
  { date: "2024-06-20", IRI: 408 },
  { date: "2024-06-21", IRI: 169 },
  { date: "2024-06-22", IRI: 317 },
  { date: "2024-06-23", IRI: 480 },
  { date: "2024-06-24", IRI: 132 },
  { date: "2024-06-25", IRI: 141 },
  { date: "2024-06-26", IRI: 434 },
  { date: "2024-06-27", IRI: 448 },
  { date: "2024-06-28", IRI: 149 },
  { date: "2024-06-29", IRI: 103 },
  { date: "2024-06-30", IRI: 446 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  // desktop: {
  //   label: "Desktop",
  //   color: "var(--chart-1)",
  // },
  // mobile: {
  //   label: "Mobile",
  //   color: "var(--chart-2)",  
  // },

  IRI: {
    label: "IRI",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function AppLineChart() {
  return (
    <Card>
      <CardHeader className="mb-12">
        <CardTitle>IRI Trend</CardTitle>
        <CardDescription className="-mb-10">
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="w-full h-50 !important"
        >
          <AreaChart data={chartIRIData}>
            <defs>
              {/* <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                /> 
              </linearGradient>*/}
              {/* <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient> */}
              <linearGradient id="fillIRI" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-IRI)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-IRI)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="IRI"
              type="linear"
              fill="url(#fillIRI)"
              stroke="var(--color-IRI)"
              stackId="a"
            />
            {/* <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            /> */}
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}
