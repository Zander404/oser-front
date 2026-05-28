"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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

const chartData = [
  { month: "Janeiro", lucro: 1200 },
  { month: "Fevereiro", lucro: 1400 },
  { month: "Março", lucro: 700 },
  { month: "Abril", lucro: 2200 },
  { month: "Maio", lucro: 1700 },
  { month: "Junho", lucro: 2700 },
]

const chartConfig = {
  lucro: {
    label: "Lucro Mensal",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartLine() {
  const lastMonth = chartData[chartData.length - 1];
  const prevMonth = chartData[chartData.length - 2];
  const growth = ((lastMonth.lucro - prevMonth.lucro) / prevMonth.lucro) * 100;

  return (
    <Card className="shadow-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl">Evolução do Lucro</CardTitle>
        <CardDescription>Desempenho líquido mensal (Jan - Jun 2026)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 20
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tickMargin={10}
              tickFormatter={(value) => `R$ ${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="lucro"
              type="stepAfter"
              stroke="var(--color-lucro)"
              strokeWidth={3}
              dot={{
                fill: "var(--color-lucro)",
                r: 4
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm border-t pt-4">
        <div className="flex gap-2 font-medium leading-none items-center">
          {growth > 0 ? "Crescimento" : "Queda"} de {Math.abs(growth).toFixed(1)}% em relação ao mês anterior {growth > 0 ? <TrendingUp className="h-4 w-4 text-emerald-500" /> : <TrendingDown className="h-4 w-4 text-rose-500" />}
        </div>
        <div className="leading-none text-muted-foreground">
          Dados atualizados em tempo real conforme transações.
        </div>
      </CardFooter>
    </Card>
  )
}

