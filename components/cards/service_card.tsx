import { Archive, Box, Edit, ShoppingCart, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import DialogService from "../dialogs/dialog_service";
import DialogOrder from "../dialogs/dialog_order";

interface ServiceCardProps {
  name: string;
  description: string;
  status: string;
  price: string;
  duration: number;
  products: [{
    name: string;
  }
  ];
}

export default function ServiceCard(props: ServiceCardProps) {
  const isActive = props.status === "Ativo";

  return (
    <div className="w-full grid auto-rows-auto md:grid-cols-2 h-fit p-4 bg-slate-50 border shadow-md rounded-md">
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

      <div className="flex md:flex-row flex-col justify-end pt-3">
        <DialogOrder />

        <DialogService title={""} icon={Edit} />

        <Button className="rounded-full md:w-11 h-11 bg-slate-400  hover:shadow-2xl hover:bg-destructive">
          <Trash2 />
        </Button>
      </div>
    </div >
  )
}
