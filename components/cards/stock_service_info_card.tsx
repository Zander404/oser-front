import { CheckCircle2Icon, CheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";




interface StockServiceInfoCardProps {
  id: number;
  status: "Pronto" | "Pendente" | "Cancelado" | string;
  cliente: string;

  servico: {
    name: string;
    description: string;
    status: string;
    price: number;
    duration: number;
    kits: { name: string }[]

  }[]
  ;
  date: string;
  onComplete?: (id: number) => void;
}






export default function StockServiceInfoCard(props: StockServiceInfoCardProps) {
  const statusStyles: Record<string, string> = {
    Pendente: "bg-amber-500 text-white border-none",
    Pronto: "bg-emerald-500 text-white border-none",
  };

  const currentStyle = statusStyles[props.status] || "bg-slate-500 text-white"


  return (
    <div className={`grid grid-cols-2 w-full p-4 rounded-2xl space-y-4 border ${props.status === "Pronto" ? "bg-emerald-50 border-emerald-500" : "bg-yellow-100 border-yellow-500"}`}>

      <div className="flex flex-col justify-center space-y-2">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold">Pedido #{props.id}</h1>
          <Badge className={`w-fit h-8 px-3 font-semibold rounded-md ${currentStyle}`}>
            {props.status}
          </Badge>
        </div>


        {/* SERVICO */}
        <div className="w-fit text-xs space-y-2 md:text-sm">
          <label className="font-medium">Servicos:</label>
          <div className="flex flex-col pl-1 space-y-2">
            {
              Array.isArray(props.servico) ? (
                props.servico.map((service, index) => (
                  <label key={index}>{service.name}</label>
                ))
              )
                :
                (
                  <div>
                    <label>Nenhum Servico Informado</label>
                  </div>
                )
            }
          </div>

          {/* CLIENTE */}
          <div className="flex flex-col">
            <label>
              Cliente:
            </label>
            <span className="pr-2">
              {props.cliente}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold uppercase text-slate-500">Produtos Necessários: </label>
          <div className="flex flex-wrap gap-1">
            {
              Array.isArray(props.servico) ? (
                props.servico.flatMap((service) => 
                  service.kits?.map((kit, idx) => (
                    <Badge key={`${service.name}-${idx}`} className="bg-amber-100 text-amber-900 hover:bg-amber-100 border-amber-200 shadow-sm">
                      {kit.name}
                    </Badge>
                  )) || []
                )
              )
                :
                (
                  <span className="text-sm text-slate-500 italic"> Nenhum Produto Necessário </span>
                )
            }
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-2">
        <Button
          onClick={() => props.onComplete && props.onComplete(props.id)}
          disabled={props.status === "Pronto"}
          className={`h-11 rounded-full ${props.status === "Pronto" ? "bg-emerald-600 hover:bg-emerald-600" : ""}`}
        >
          {props.status === "Pronto" ? (
            <>
              <CheckIcon /> Kit Montado
            </>
          ) : (
            <>
              <CheckCircle2Icon /> Montar Kit
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
