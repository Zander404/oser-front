import { Info, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Field, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const teste: any = [];

export default function DialogOrder() {
  return (
    <Dialog>

      <form>
        <DialogTrigger asChild>
          <Button className="w-full md:w-fit h-11 bg-slate-800 rounded-full hover:shadow-2xl">
            <ShoppingCart /> Criar Pedido
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>
              <h1 className="font-bold text-2xl">
                Criar Novo Pedido
              </h1>
            </DialogTitle>

            <DialogDescription className="flex flex-row w-full p-2 space-x-3 text-center bg-emerald-400/10 text-emerald-950 rounded-full ">
              <Info />
              <div className="flex space-x-3 flex-row">
                <label> Servico:</label>
                <span className="font-bold">
                  Nome do Servico
                </span>
              </div>
            </DialogDescription>

          </DialogHeader>
          <FieldGroup>

            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue={"Teste"} />
            </Field>

          </FieldGroup>

          <div>
            <h2>Produtos Necessários</h2>
            <div className="-mx-4 no-scrollbar max-h[50vh] overflow-y-auto px-4">
              {
                Array.isArray(teste) ? (
                  <div className="flex flex-col p-4 bg-slate-100/60  rounded-full">
                    <label className="font-medium">
                      Produto A
                    </label>
                    <span>Quantidade:  2</span>
                  </div>
                ) : (
                  <div>
                    SEM PRODUTO
                  </div>

                )
              }
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"outline"} className="text-slate-50 hover:text-slate-50 bg-destructive hover:bg-red-700 rounded-md">Close</Button>
            </DialogClose>
            <Button variant={"secondary"} className="text-slate-950 bg-slate-100 rounded-md">Criar Pedido</Button>
          </DialogFooter>
        </DialogContent>

      </form>
    </Dialog >
  )
}
