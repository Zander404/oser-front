"use client"

import { useState } from "react";
import { ChartBar } from "@/components/charts/bar_chart";
import { ChartArea } from "@/components/charts/area_chart";
import DialogTransaction from "@/components/dialogs/dialog_transaction";
import CashFlowStats from "@/components/stats/cash_flow";
import TransactionTable from "@/components/tables/transaction_table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const initialTransactions = [
  {
    id: "1",
    data: {
      title: "Venda de Produto A",
      type: "receita",
      tags: ["Vendas"],
      status: "Concluido",
      date: "28/05/2026",
      value: "50.00"
    },
  },
  {
    id: "2",
    data: {
      title: "Aluguel Escritório",
      type: "despesa",
      tags: ["Fixo"],
      status: "Pendente",
      date: "28/05/2026",
      value: "1200.00"
    },
  },
];

export default function Page() {
  const [transactions, setTransactions] = useState(initialTransactions);

  const handleAddTransaction = (newT: any) => {
    setTransactions((prev) => [
      {
        id: (prev.length + 1).toString(),
        data: {
          title: newT.description,
          type: newT.type,
          tags: [newT.category],
          status: newT.status,
          date: newT.date,
          value: newT.value.toString()
        }
      },
      ...prev,
    ]);
  };

  return (
    <div className="w-full flex flex-col min-h-svh p-3 md:p-6 overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-4 md:items-center w-full pt-4 md:pt-8 justify-between">
        {/* TITLE */}
        <div className="space-y-1">
          <h1 className="text-3xl md:text-5xl font-extrabold">Fluxo de Caixa</h1>
          <h2 className="text-sm md:text-base font-heading text-slate-600">Controle Financeiro e análise de períodos</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Select>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Período" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Período</SelectLabel>
                <SelectItem value="weekly">Esta Semana</SelectItem>
                <SelectItem value="monthly">Este Mês</SelectItem>
                <SelectItem value="quarterly">Trimestral</SelectItem>
                <SelectItem value="annual">Ano</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <DialogTransaction onSuccess={handleAddTransaction} />
        </div>
      </div>

      <div className="mt-6 md:mt-10">
        <CashFlowStats />
      </div>

      {/* CONTAINER */}
      <div className="flex flex-col gap-6 md:gap-8 w-full mt-6 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="overflow-hidden">
            <ChartArea />
          </div>
          <div className="overflow-hidden">
            <ChartBar />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 md:p-4 overflow-hidden">
          <h3 className="text-lg font-bold mb-4 px-2">Detalhamento de Transações</h3>
          <div className="overflow-x-auto">
            <TransactionTable data={transactions} />
          </div>
        </div>
      </div>
    </div>
  )
}
