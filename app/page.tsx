import { ChartArea } from "@/components/charts/area_chart"
import { ChartBar } from "@/components/charts/bar_chart"
import { ChartLine } from "@/components/charts/line_chart"
import HomeStats from "@/components/stats/home_stats"

export default function Page() {
  return (
    <div className="w-full flex flex-col min-h-svh p-3 md:p-6 bg-slate-50/30 overflow-x-hidden">
      <div className="flex flex-1 flex-col gap-6 md:gap-8 pt-0">
        <HomeStats />
        
        {/* GRAFICOS */}
        <div className="flex flex-col gap-6">
          <div className="w-full overflow-hidden">
            <ChartArea />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <ChartBar />
            </div>
            <div className="overflow-hidden">
              <ChartLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
