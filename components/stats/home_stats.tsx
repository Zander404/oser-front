import { Box, DollarSign, Scale, Wrench } from "lucide-react";

export default function HomeStats() {
  return (
    <div className="mx-auto max-w-full px-6 py-20">

      {/* HEADER */}
      <nav>
        <h2 className="text-balance text-center font-medium text-4xl tracking-[-0.04em] md:text-[2.75rem]">
          Visão Geral
        </h2>
        <p className="mt-3.5 text-center text-muted-foreground text-xl tracking-[-0.015em] sm:text-lg md:text-2xl">
          Visão Geral dos Négocios
        </p>
      </nav>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="rounded-xl border bg-muted p-6 py-7">
          <Wrench className="mb-8 h-10 w-10 stroke-[1.75px] text-yellow-500" />
          <span className="font-medium text-5xl tracking-[-0.01em]">24</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Servicos ativos
          </p>
        </div>

        <div className="rounded-xl border bg-muted p-6 py-7">
          <Box className="mb-8 h-10 w-10 stroke-[1.75px] text-blue-500" />
          <span className="font-medium text-5xl tracking-[-0.01em]">184</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Produtos em estoque
          </p>
        </div>
        <div className="rounded-xl border bg-muted p-6 py-7">
          <Scale className="mb-8 h-10 w-10 stroke-[1.75px] text-red-500" />
          <span className="font-medium text-5xl tracking-[-0.01em]">R$ 14,454</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Receita Mensal
          </p>
        </div>
        <div className="rounded-xl border bg-muted p-6 py-7">
          <DollarSign className="mb-8 h-10 w-10 stroke-[1.75px] text-green-500" />
          <span className="font-medium text-5xl tracking-[-0.01em]">R$ 9.000</span>
          <p className="mt-4 text-foreground/80 text-xl">
            Lucro Liquido
          </p>
        </div>
      </div>
    </div>
  );
}

