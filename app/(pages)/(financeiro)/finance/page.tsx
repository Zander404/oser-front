import { ChartBar } from "@/components/charts/bar_chart";
import DialogTransaction from "@/components/dialogs/dialog_transaction";
import CashFlowStats from "@/components/stats/cash_flow";
import TransactionTable from "@/components/tables/transaction_table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusIcon } from "lucide-react";
export default function Page() {
  return (
    <div className="w-full border flex flex-col min-h-svh  p-6">

      <div className="grid auto-rows-auto md:grid-cols-2 w-full pt-8 justify-between ">

        {/* TITLE */}
        <div className="">
          <h1 className="text-5xl font-extrabold">Fluxo de Caixa</h1>
          <h2 className="font-heading text-slate-600">Controle Financeiro e análise de periódos</h2>
        </div>

        <div className="flex flex-row justify-end align-middle space-x-4">
          <Select>
            <SelectTrigger className="w-full max-w-fit">
              <SelectValue placeholder="Selecione um Periodo" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel> Periodo</SelectLabel>
                <SelectItem value="weekly"> Esta Semana</SelectItem>
                <SelectItem value="monthly"> Este Mês</SelectItem>
                <SelectItem value="quarterly">Trimestral</SelectItem>
                <SelectItem value="annual">Ano</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>


          <DialogTransaction />
        </div>
      </div>

      <CashFlowStats />


      {/* CONTAINER */}
      <div className="grid auto-rows-auto md:grid-rows-2 w-full">

        <div className="w-full max-w-4xl mx-auto">
          <ChartBar />
        </div>

        <TransactionTable />
      </div>

    </div>)
}
