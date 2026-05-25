"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A line chart"

const chartData = [
  { month: "January", lucro: 186 },
  { month: "February", lucro: 305 },
  { month: "March", lucro: 237 },
  { month: "April", lucro: 73 },
  { month: "May", lucro: 209 },
  { month: "June", lucro: 214 },
]

const chartConfig = {
  lucro: {
    label: "lucro",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartLine() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lucro Mensal</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="lucro"
              type="natural"
              stroke="var(--color-lucro)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>

      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  )
}

