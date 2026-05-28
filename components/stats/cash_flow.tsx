import { ArrowDownLeft, ArrowUpRight, Calendar } from "lucide-react";

export default function CashFlowStats() {

  return (
    <div className="mx-auto max-w-full px-6 py-20">


      <div className="text-white mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-xl border bg-emerald-400 p-6 py-7">
          <div className="flex flex-row">
            <ArrowUpRight className=" mb-8 h-10 w-10 stroke-[1.75px]" />
            <span className="font-medium text-2xl">RECEITA</span>
          </div>
          <span className=" font-medium text-5xl tracking-[-0.01em]">24</span>
          <p className="mt-4 text-xl">
            Total Recebido no periodo
          </p>
        </div>

        <div className=" rounded-xl border bg-blue-400 p-6 py-7">
          <div className="flex flex-row">
            <ArrowDownLeft className="mb-8 h-10 w-10 stroke-[1.75px]" />
            <span className="font-medium text-2xl">DESPESAS</span>
          </div>
          <span className="font-medium text-5xl tracking-[-0.01em]"> R$ 114,864</span>
          <p className="mt-4 text-xl">
            Total Gasto no periodo
          </p>
        </div>
        <div className="rounded-xl border bg-red-400 p-6 py-7">
          <div className="flex flex-row space-x-3 text-center items-cente">
            <Calendar className="mb-8 h-10 w-10 stroke-[1.75px]" />
            <span className="font-medium text-2xl">SALDO</span>
          </div>
          <span className="font-medium text-5xl tracking-[-0.01em]">0</span>
          <p className="mt-4 text-xl">
            Lucro no periodo
          </p>
        </div>
      </div>
    </div>
  );
}
