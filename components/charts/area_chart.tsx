"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

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
  { month: "Janeiro", lucro: 1200, despesas: 3300 },
  { month: "Fevereiro", lucro: 1400, despesas: 3800 },
  { month: "Março", lucro: 700, despesas: 4100 },
  { month: "Abril", lucro: 2200, despesas: 3900 },
  { month: "Maio", lucro: 1700, despesas: 4200 },
  { month: "Junho", lucro: 2700, despesas: 4500 },
]

const chartConfig = {
  lucro: {
    label: "Lucro Líquido",
    color: "hsl(var(--chart-1))",
  },
  despesas: {
    label: "Custos Totais",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartArea() {
  return (
    <Card className="shadow-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl">Análise de Lucratividade</CardTitle>
        <CardDescription>
          Visão acumulada de Lucro e Despesas (Jan - Jun 2026)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 10
            }}
          >
            <defs>
              <linearGradient id="fillLucro" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-lucro)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-lucro)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillDespesas" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-despesas)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-despesas)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
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
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="despesas"
              type="monotone"
              fill="url(#fillDespesas)"
              fillOpacity={0.4}
              stroke="var(--color-despesas)"
              stackId="a"
            />
            <Area
              dataKey="lucro"
              type="monotone"
              fill="url(#fillLucro)"
              fillOpacity={0.4}
              stroke="var(--color-lucro)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Crescimento de 12% na margem <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Janeiro - Junho 2026
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

