import { ArrowDownLeft, ArrowUpRight, Pencil, Trash2 } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const invoices = [
  {
    id: "1",
    data: {
      title: "Teste 1",
      type: "Income",
      tags: ["Servicos", "Pagamento"],
      status: "Concluido",
      date: "19/05/2026",
      value: "1"
    },
  },
  {
    id: "2",
    data: {
      title: "Teste 2",
      type: "Outcome",
      tags: "Fornecedores",
      status: "Pendente",
      date: "19/05/2026",
      value: "1"
    },
  },
  {
    id: "3",
    data: {
      title: "Teste 3",
      type: "Income",
      tags: "Vendas",
      status: "Cancelado",
      date: "19/05/2026",
      value: "1"
    },
  },
  {
    id: "4",
    data: {
      title: "Teste 4",
      type: "Outcome",
      tags: "Servicos",
      status: "Concluido",
      date: "19/05/2026",
      value: "1"
    },
  },
  {
    id: "5",
    data: {
      title: "Teste 5",
      type: "Income",
      tags: "Servicos",
      status: "Concluido",
      date: "19/05/2026",
      value: "1"
    },
  },
  {
    id: "6",
    data: {
      title: "Teste 6",
      type: "Outcome",
      tags: "Servicos",
      status: "Concluido",
      date: "19/05/2026",
      value: "1"
    },
  },
]


export default function TransactionTable() {
  return (
    <Table>
      <TableCaption className="text-start"> Transações Recentes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100ox]"></TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Valor</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {
          invoices.map(item => {

            const isIncome = item.data.type == "Income";

            return (

              <TableRow key={item.id}>
                {/* ICON  */}
                <TableCell>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full ${isIncome ? "bg-emerald-500" : "bg-pink-500"}`}>
                    {isIncome ? <ArrowUpRight className="h-5 w-5" /> : <ArrowDownLeft className="h-5 w-5 " />}
                  </div>
                </TableCell>

                {/* TITULO, TAGS */}
                <TableCell className="align-middle">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-semibold text-slate-800 text-base block">
                      {item.data.title}
                    </span>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {
                        Array.isArray(item.data.tags) ? (
                          item.data.tags.map((tag, index) => (
                            <Badge key={`${tag}-${index}`} variant={"secondary"} className="bg-slate-200/60  text-slate-60 hover:bg-slate200/600 font-normal rounded-md whitespace-nowrap">
                              {tag}
                            </Badge>
                          ))
                        ) : (
                          <Badge variant={"secondary"} className="bg-slate-200/60 text-slate-600 hover:bg-slate-200/60 font-normal px-2.5 py-0.5 rounded-md">
                            {item.data.tags}
                          </Badge>
                        )

                      }
                    </div>
                  </div>
                </TableCell>


                {/* STATUS */}
                <TableCell className="text-start align-middle ">
                  {
                    item.data.status === "Concluido" ? (
                      <Badge variant={"outline"} className="bg-emerald-500 text-emerald-950 border-none font-normal px-2.5 py-0.5 rounded-md">
                        Concluido
                      </Badge>

                    ) : (
                      <Badge variant={"outline"} className="bg-amber-500 text-amber-950 border-none font-normal px-2.5 py-0.5 rounded-md">
                        Pendente
                      </Badge>
                    )
                  }
                </TableCell>

                {/* VALOR */}
                <TableCell className={`text-start font-bold text-base whitespace-nowrap align-middle ${isIncome ? "text-emerald-600" : "text-rose-500"}`}>
                  {isIncome ? `+ R$ ${item.data.value}` : `- R$ ${item.data.value}`}
                </TableCell>

                {/* ACOES */}
                <TableCell className="text-right pr-6 w-[100px] align-middle">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant={"ghost"} size={"icon"} className="h-9 w-9 text-slate-400 hover:text-slate-600">
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button variant={"ghost"} size={"icon"} className="h-9 w-9 text-slate-400 hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>

                  </div>
                </TableCell>
              </TableRow>

            )
          }
          )
        }
      </TableBody>
    </Table >
  )
}
