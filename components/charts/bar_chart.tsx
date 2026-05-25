"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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

export const description = "A bar chart"

const chartData = [
  { month: "January", lucro: 186, despesas: 100 },
  { month: "February", lucro: 305, despesas: 205 },
  { month: "March", lucro: 237, despesas: 320 },
  { month: "April", lucro: 73, despesas: 51 },
  { month: "May", lucro: 209, despesas: 400 },
  { month: "June", lucro: 214, despesas: 100 },
]

const chartConfig = {
  lucro: {
    label: "Lucro",
    color: "var(--chart-1)",
  },

  despesas: {
    label: "Despesas",
    color: "var(--chart-2)"
  }
} satisfies ChartConfig

export function ChartBar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={"lucro"} fill="var(--color-lucro)" radius={8} />
            <Bar dataKey={"despesas"} fill="var(--color-despesas)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  )
}

