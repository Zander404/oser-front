import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog";
import { Field, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function DialogProduct() {
  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button className="rounded-full md:w-fit h-11 bg-slate-800 hover:shadow-2xl">
          <Plus /> Criar Produto
        </Button>
      </DialogTrigger>
      <DialogContent>

        <DialogHeader className="">
          Criar Produto
          <form>
            <Field>
              <Label>Nome do Produto</Label>
              <Input placeholder={"Nome do Produto"} />
            </Field>
            <Field>
              <Label htmlFor="product_category">Categoria</Label>
              <Input id="product_category" placeholder={"Categoria"} />
            </Field>
            <FieldGroup className="flex flex-row">
              <Field>
                <Label htmlFor="product_units">Quantidade</Label>
                <Input id="product_units" type="number" defaultValue={0} />
              </Field>
              <Field>
                <Label htmlFor="product_min_units">Quantidade Minima</Label>
                <Input id="product_min_units" type="number" defaultValue={0} />
              </Field>
            </FieldGroup>
            <Field>
              <Label htmlFor="product_price">Preço</Label>
              <Input id="product_price" type="number" prefix="R$" placeholder="R$ 0,00 " />
            </Field>


          </form>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>

    </Dialog >
  )
}
