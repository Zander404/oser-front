import { Archive, Box, Edit, ShoppingCart, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import DialogService from "../dialogs/dialog_service";
import DialogOrder from "../dialogs/dialog_order";

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  status: string;
  price: string;
  duration: number;
  products: {
    name: string;
  }[];
  onAddOrder?: (data: any) => void;
  onEdit?: (id: string, data: any) => void;
  onDelete?: (id: string) => void;
}

export default function ServiceCard(props: ServiceCardProps) {
  const isActive = props.status === "Ativo";

  return (
    <div className="w-full grid auto-rows-auto md:grid-cols-2 h-fit p-4 bg-white border shadow-sm rounded-2xl hover:shadow-md transition-all">
      <div className="w-full space-y-4">

        {/* TITLE */}
        <div>
          <div className="w-full space-x-4">
            <span className="text-xl font-bold">
              {props.name}
            </span>

            <Badge variant={"secondary"} className={` ${isActive ? "bg-emerald-500 text-emerald-950" : "bg-pink-500 text-pink-950"}font-normal rounded-md whitespace-nowrap`}>
              <span className="text-md">
                {props.status}
              </span>
            </Badge>
          </div>

          {/* SUBTITLE */}
          <div className="">
            {props.description}
          </div>
        </div>

        {/* PRECO E DURACAO */}
        <div className="grid grid-cols-2 justify-between">
          <div className="grid grid-rows-2">
            <label className="text-md font-bold">Preço</label>
            <span>
              R${props.price}
            </span>
          </div>
          <div className="grid grid-rows-2">
            <label className=" text-md font-bold">Duração</label>
            <span>{props.duration} hora</span>
          </div>

        </div>

        {/* KIT */}
        <div>
          <div className="flex space-x-3 flex-row">
            <Archive />
            <label>
              Kit de Produtos
            </label>
          </div>

          <div className="space-x-2" >
            {
              props.products.map((product, index) => (
                <Badge key={`${product.name} - ${index}`} variant={"secondary"} className="bg-amber-500">
                  {product.name}
                </Badge>
              ))
            }
          </div>
        </div>

      </div>

      <div className="flex flex-row items-center justify-end gap-2 pt-4 md:pt-0">
        <DialogService
          title="Editar Serviço"
          icon={Edit}
          initialData={{
            name: props.name,
            description: props.description,
            price: Number(props.price),
            duration: props.duration,
            products: props.products.map(p => ({ name: p.name, quantity: 1 }))
          }}
          onSuccess={(data) => props.onEdit?.(props.id, data)}
          trigger={
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
              <Edit className="size-5 text-slate-600" />
            </Button>
          }
        />

        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-rose-50 hover:text-rose-600"
          onClick={() => props.onDelete?.(props.id)}
        >
          <Trash2 className="size-5" />
        </Button>
      </div>
    </div >
  )
}
