import { AlertTriangleIcon, ArchiveIcon, BadgeAlertIcon, Box, DollarSign, Scale, Wrench } from "lucide-react";

export default function StockStats() {
  return (
    <div className="mx-auto max-w-full px-6 py-20">


      <div className="text-white mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-xl border bg-emerald-400 p-6 py-7">
          <ArchiveIcon className=" mb-8 h-10 w-10 stroke-[1.75px]" />
          <span className=" font-medium text-5xl tracking-[-0.01em]">24</span>
          <p className="mt-4 text-xl">
            Total de Items
          </p>
        </div>

        <div className=" rounded-xl border bg-blue-400 p-6 py-7">
          <ArchiveIcon className="mb-8 h-10 w-10 stroke-[1.75px]" />
          <span className="font-medium text-5xl tracking-[-0.01em]"> R$ 114,864</span>
          <p className="mt-4 text-xl">
            Valor Total
          </p>
        </div>
        <div className="rounded-xl border bg-red-400 p-6 py-7">
          <AlertTriangleIcon className="mb-8 h-10 w-10 stroke-[1.75px]" />
          <span className="font-medium text-5xl tracking-[-0.01em]">0</span>
          <p className="mt-4 text-xl">
            Estoque Baixo
          </p>
        </div>
      </div>
    </div>
  );
}
