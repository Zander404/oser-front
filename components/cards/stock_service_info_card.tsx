import { CheckCircle2Icon, CheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";



interface StockServiceInfoCardProps {
  id: number;
  status: "Pronto" | "Pendente" | "Cancelado" | string;
  cliente: string;

  servico: [{
    name: string;
    description: string;
    status: string;
    price: number;
    duration: number;
    kits: [
      { name: string }
    ]

  }
  ];
  date: string;
}




export default function StockServiceInfoCard(props: StockServiceInfoCardProps) {
  const statusStyles: Record<string, string> = {
    Pendente: "bg-amber-500 text-white border-none",
  };

  const currentStyle = statusStyles[props.status] || "bg-slate-500 text-white"


  return (
    <div className="grid grid-cols-2 w-full p-4 rounded-2xl space-y-4 bg-yellow-100 border border-yellow-500">

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

        <div className=" grid grid-rows-2">
          <label>Produtos Necessários: </label>
          <div className="pl-2 space-x-1">
            {
              Array.isArray(props.servico) ? (
                props.servico.map((service) => (
                  <Badge className={`w-fit h-6 px-3 font-semibold rounded-full bg-emerald-400`}>
                    {service.name}
                  </Badge>

                ))
              )
                :
                (
                  <span> Nenhum Produto Necessário </span>
                )
            }
          </div>
        </div>
      </div>

      <div className="flex justify-end pr-2">
        <Button className="h-11 rounded-full">
          <CheckCircle2Icon /> Montar Kit
        </Button>
      </div>
    </div>
  )
}
