import { ChartArea } from "@/components/charts/area_chart"
import { ChartBar } from "@/components/charts/bar_chart"
import { ChartLine } from "@/components/charts/line_chart"
import HomeStats from "@/components/stats/home_stats"

export default function Page() {
  return (
    <div className="w-full border flex flex-col min-h-svh  p-6">
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <HomeStats />
        {/* GRAFICOS */}
        <div className="grid auto-rows-auto md:grid-rows-1 min-h-[50px] rounded-xl bg-muted/50   ">
          <ChartArea />
          <div className="grid auto-rows-auto md:grid-cols-2">
            <ChartBar />
            <ChartLine />
          </div>
        </div>

      </div>
    </div>
  )
}
