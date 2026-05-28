import { Archive, Box, Edit, ShoppingCart, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Field, FieldLabel } from "../ui/field";

interface ProductCardProps {
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

export default function ProductCard() {

  return (
    <div className="w-full grid auto-rows-auto md:grid-rows-3 h-fit p-4 bg-slate-50 border shadow-md rounded-md">
      {/* TITLE AND CONTROLS */}
      <div className="w-full grid grid-cols-2 space-x-4">
        <div className="space-x-3">
          <label className="">
            Produto A
          </label>

          <span className="space-x-2">
            <Badge>Teste</Badge>
            <Badge>Teste</Badge>
          </span>
        </div>

        <div className="flex space-x-3 justify-end">
          <Button variant={"secondary"} className=" w-11 h-11 bg-slate-300 hover:bg-yellow-400 rounded-full shadow-md">
            <Edit />
          </Button>

          <Button variant={"ghost"} className="w-11 h-11 bg-slate-300 hover:bg-destructive rounded-full shadow-md">
            <Trash2 />
          </Button>
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="grid  grid-cols-3 w-fit h-fit">
        <div className="grid grid-rows-1 sm:grid-rows-2 space-x-3  p-4 text-center">
          <label>Quantidade:</label>
          <span>100</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-rows-2 space-x-3 p-4 text-center">
          <label>Minimo:</label>
          <span>10</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-rows-2 space-x-3 p-4 text-center">

          <label>Preço: </label>
          <span>R$ 58,00</span>
        </div>


      </div>

      {/* STOCK LEVEL */}
      <div className="m-auto w-full ">
        <Field className="w-full max-w-6xl">
          <FieldLabel>
            <span>Nível do Estoque</span>
            <span className="ml-auto">33  %</span>
          </FieldLabel>
          <Progress value={33} />
        </Field>
      </div>

    </div>
  )
}
