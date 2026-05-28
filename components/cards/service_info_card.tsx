import { Badge } from "../ui/badge";


interface PedidoInfoProps {
  id: number;
  status: "Pronto" | "Pendente" | "Cancelado" | string;

  servico: string;
  cliente: string
  date: string;
}

export default function ServiceInfoCard(props: PedidoInfoProps) {
  const statusStyles: Record<string, string> = {
    Pronto: "bg-emerald-500 hover:bg-emerald-600 text-white border-none",
    Pendente: "bg-amber-500 hover:bg-amber-600 text-white border-none",
    Cancelado: "bg-rose-500 hover:bg-rose-600 text-white border-none",
    Concluido: "bg-slate-500 hover:bg-slate-600 text-white border-none"
  };

  const currentStyle = statusStyles[props.status] || "bg-slate-500 text-white"


  return (
    <div className="w-full p-4 rounded-2xl space-y-4 border">

      <div className="flex items-center gap-4">
        <h1 className="font-semibold">Pedido #{props.id}</h1>
        <Badge className={`w-fit h-8 px-3 font-semibold rounded-md ${currentStyle}`}>
          {props.status}
        </Badge>
      </div>

      <div className="w-fit text-xs md:text-sm">
        <span className="font-medium">Servico: {props.servico}  | Cliente: {props.cliente}  </span>
      </div>

      <div>
        <span>Criado em: {props.date}</span>
      </div>

    </div>
  )
}
