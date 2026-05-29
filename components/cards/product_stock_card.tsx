import { Edit, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Field, FieldLabel } from "../ui/field";
import DialogProduct from "../dialogs/dialog_product";

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  units: number;
  minimum: number;
  price: number;
  onEdit?: (id: number, data: any) => void;
  onDelete?: (id: number) => void;
}

export default function ProductCard({
  id,
  name,
  category,
  units,
  minimum,
  price,
  onEdit,
  onDelete,
}: ProductCardProps) {
  const stockLevel = Math.min(Math.round((units / (minimum * 2 || 1)) * 100), 100);
  const isLowStock = units <= minimum;

  return (
    <div className="w-full flex flex-col gap-4 p-4 bg-white border shadow-sm rounded-xl hover:shadow-md transition-shadow">
      {/* TITLE AND CONTROLS */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-lg">{name}</h3>
          <Badge variant="secondary">{category}</Badge>
          {isLowStock && <Badge variant="destructive">Estoque Baixo</Badge>}
        </div>

        <div className="flex gap-2">
          <DialogProduct
            initialData={{ id, name, category, units, minUnits: minimum, price }}
            onSuccess={(data) => onEdit?.(id, data)}
            trigger={
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
                <Edit className="w-4 h-4" />
              </Button>
            }
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete?.(id)}
            className="h-9 w-9 rounded-full text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* PRODUCT INFO */}
      <div className="grid grid-cols-3 gap-4 border-y py-3">
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-500 uppercase">Quantidade</span>
          <span className="font-medium">{units} un</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-500 uppercase">Mínimo</span>
          <span className="font-medium">{minimum} un</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-slate-500 uppercase">Preço</span>
          <span className="font-medium">R$ {price.toFixed(2)}</span>
        </div>
      </div>

      {/* STOCK LEVEL */}
      <div className="w-full">
        <Field>
          <FieldLabel className="flex justify-between text-xs mb-1">
            <span>Nível do Estoque</span>
            <span className={isLowStock ? "text-destructive font-bold" : ""}>{stockLevel}%</span>
          </FieldLabel>
          <Progress value={stockLevel} className="h-2" />
        </Field>
      </div>
    </div>
  );
}
