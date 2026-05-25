"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"


const chartData = [
  { month: "January", lucro: 186, despesas: 80 },
  { month: "February", lucro: 305, despesas: 200 },
  { month: "March", lucro: 237, despesas: 120 },
  { month: "April", lucro: 73, despesas: 190 },
  { month: "May", lucro: 209, despesas: 130 },
  { month: "June", lucro: 214, despesas: 140 },
]

const chartConfig = {
  lucro: {
    label: "lucro",
    color: "var(--chart-1)",
  },
  despesas: {
    label: "despesas",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartArea() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Receitas Vs Lucros</CardTitle>
        <CardDescription>
          Mostrar o Lucro dos ultimos 6 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="despesas"
              type="natural"
              fill="var(--color-despesas)"
              fillOpacity={0.4}
              stroke="var(--color-despesas)"
              stackId="a"
            />
            <Area
              dataKey="lucro"
              type="natural"
              fill="var(--color-lucro)"
              fillOpacity={0.4}
              stroke="var(--color-lucro)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
      </CardFooter>
    </Card>
  )
}

