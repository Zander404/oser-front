"use client"

import { useState } from "react";
import DialogWorker from "@/components/dialogs/dialog_worker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialWorkers = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Técnica de Campo",
    email: "maria.silva@exemplo.com",
    phone: "(11) 98765-4321",
    status: "Ativo",
  },
  {
    id: 2,
    name: "João Pereira",
    role: "Administrativo",
    email: "joao.p@exemplo.com",
    phone: "(11) 91234-5678",
    status: "Férias",
  },
  {
    id: 3,
    name: "Carlos Lima",
    role: "Logística",
    email: "carlos.lima@exemplo.com",
    phone: "(11) 99988-7766",
    status: "Ativo",
  },
];

export default function Page() {
  const [workers, setWorkers] = useState(initialWorkers);

  const handleAddWorker = (newWorker: any) => {
    setWorkers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newWorker,
        status: "Ativo",
      }
    ]);
  };

  return (
    <div className="w-full flex flex-col min-h-svh p-3 md:p-6 overflow-x-hidden">
      {/* NAVBAR */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center w-full pt-4 md:pt-8 justify-between">
        {/* TITLE */}
        <div className="space-y-1">
          <h1 className="text-3xl md:text-5xl font-extrabold">Funcionários</h1>
          <h2 className="text-sm md:text-base font-heading text-slate-600">
            Gerenciamento de equipe e cargos
          </h2>
        </div>

        <div className="flex flex-row justify-end align-middle items-center">
          <DialogWorker onSuccess={handleAddWorker} />
        </div>
      </div>

      <div className="pt-6 md:pt-10 grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workers.map((worker) => (
          <Card key={worker.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 bg-slate-50/50 p-4">
              <Avatar className="h-10 w-10 md:h-12 md:w-12 border-2 border-white shadow-sm">
                <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${worker.name}`} />
                <AvatarFallback>{worker.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0 flex-1">
                <CardTitle className="text-base md:text-lg truncate">{worker.name}</CardTitle>
                <p className="text-xs md:text-sm text-muted-foreground truncate">{worker.role}</p>
              </div>
              <Badge variant={worker.status === "Ativo" ? "default" : "secondary"} className="shrink-0">
                {worker.status}
              </Badge>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div className="flex flex-col text-sm">
                <span className="font-semibold text-slate-500 text-xs uppercase tracking-wider">E-mail</span>
                <span className="truncate">{worker.email}</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-semibold text-slate-500 text-xs uppercase tracking-wider">Telefone</span>
                <span>{worker.phone}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
