import { CheckCircle, Edit, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import DialogOrder from "../dialogs/dialog_order";


interface PedidoInfoProps {
  id: number;
  status: "Pronto" | "Pendente" | "Cancelado" | "Concluido" | string;

  servico: string;
  cliente: string
  date: string;
  onFinish?: (id: number) => void;
  onDelete?: (id: number) => void;
  onEdit?: (id: number, data: any) => void;
}

export default function ServiceInfoCard(props: PedidoInfoProps) {
  const statusStyles: Record<string, string> = {
    Pronto: "bg-emerald-500 hover:bg-emerald-600 text-white border-none",
    Pendente: "bg-amber-500 hover:bg-amber-600 text-white border-none",
    Cancelado: "bg-rose-500 hover:bg-rose-600 text-white border-none",
    Concluido: "bg-blue-500 hover:bg-blue-600 text-white border-none"
  };

  const currentStyle = statusStyles[props.status] || "bg-slate-500 text-white"


  return (
    <div className={`w-full p-4 rounded-2xl space-y-4 border flex flex-col md:flex-row md:items-center justify-between transition-all hover:shadow-md ${props.status === "Pronto" ? "bg-emerald-50/50 border-emerald-200" : "bg-white"}`}>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold">Pedido #{props.id}</h1>
          <Badge className={`w-fit h-8 px-3 font-semibold rounded-md ${currentStyle}`}>
            {props.status}
          </Badge>
        </div>

        <div className="w-fit text-xs md:text-sm">
          <span className="font-medium">Servico: {props.servico}  | Cliente: {props.cliente}  </span>
        </div>

        <div className="text-xs text-muted-foreground">
          <span>Criado em: {props.date}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {props.onEdit && (
          <DialogOrder
            title="Editar Pedido"
            initialData={{
              customerName: props.cliente,
              serviceId: "serv-1", // Fallback for mock
              date: props.date,
            }}
            onSuccess={(data) => props.onEdit!(props.id, data)}
            trigger={
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
                <Edit className="size-5 text-slate-600" />
              </Button>
            }
          />
        )}

        {props.onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-rose-50 hover:text-rose-600"
            onClick={() => props.onDelete!(props.id)}
          >
            <Trash2 className="size-5" />
          </Button>
        )}

        {props.status === "Pronto" && props.onFinish && (
          <Button
            onClick={() => props.onFinish!(props.id)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full h-11 px-6 gap-2 ml-2"
          >
            <CheckCircle className="size-5" />
            Finalizar Serviço
          </Button>
        )}
      </div>

    </div>
  )
}
