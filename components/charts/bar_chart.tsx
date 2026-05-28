"use client"

import { TrendingUp, TrendingDown } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend } from "recharts"

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
  { month: "Janeiro", receita: 4500, despesas: 3200 },
  { month: "Fevereiro", receita: 5200, despesas: 3800 },
  { month: "Março", receita: 4800, despesas: 4100 },
  { month: "Abril", receita: 6100, despesas: 3900 },
  { month: "Maio", receita: 5900, despesas: 4200 },
  { month: "Junho", receita: 7200, despesas: 4500 },
]

const chartConfig = {
  receita: {
    label: "Receita",
    color: "hsl(var(--chart-1))",
  },
  despesas: {
    label: "Despesas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartBar() {
  const lastMonth = chartData[chartData.length - 1];
  const prevMonth = chartData[chartData.length - 2];
  const trend = ((lastMonth.receita - prevMonth.receita) / prevMonth.receita) * 100;

  return (
    <Card className="shadow-sm border-slate-200">
      <CardHeader>
        <CardTitle className="text-xl">Fluxo de Caixa Mensal</CardTitle>
        <CardDescription>Comparativo de Receitas e Despesas (Jan - Jun 2026)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
          <BarChart accessibilityLayer data={chartData} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.5} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              tickMargin={10}
              tickFormatter={(value) => `R$ ${value}`}
            />
            <ChartTooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              content={<ChartTooltipContent />}
            />
            <Legend verticalAlign="top" height={36}/>
            <Bar dataKey="receita" fill="var(--color-receita)" radius={[4, 4, 0, 0]} barSize={30} />
            <Bar dataKey="despesas" fill="var(--color-despesas)" radius={[4, 4, 0, 0]} barSize={30} />
          </BarChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm border-t pt-4">
        <div className="flex gap-2 font-medium leading-none items-center">
          Tendência de {trend.toFixed(1)}% este mês {trend > 0 ? <TrendingUp className="h-4 w-4 text-emerald-500" /> : <TrendingDown className="h-4 w-4 text-rose-500" />}
        </div>
        <div className="leading-none text-muted-foreground">
          Baseado nos dados de faturamento bruto e custos operacionais.
        </div>
      </CardFooter>
    </Card>
  )
}

