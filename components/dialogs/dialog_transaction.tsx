import { Plus, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog";
import { Field } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "../ui/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

export default function DialogTransaction
  () {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="rounded-full md:w-fit h-11 bg-slate-800 hover:shadow-2xl">
            <Plus /> Nova Transação
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>

            <Field>
              <Label>Data</Label>
              <Input type="date" placeholder="Descrição" />
            </Field>


            <Field>
              <Label>Descrição</Label>
              <Input placeholder="Descrição" />
            </Field>

            <Field>
              <Label>Categoria</Label>
              <Input placeholder="Categoria" />
            </Field>

            <Field>
              <Label>Tipo</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categoria</SelectLabel>
                    <SelectItem value="receita">Receita</SelectItem>
                    <SelectItem value="despesa">Despesa</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>


            <Field>
              <Label>Valor</Label>
              <InputGroup>
                <InputGroupAddon>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="0.00" />

              </InputGroup>
            </Field>


            <Field>
              <Label>Status</Label>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Selecione o Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="apple">Concluido</SelectItem>
                    <SelectItem value="pineapple">Pendente</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>


          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button className="w-fit bg-slate-500 hover:bg-slate-700 rounded-full">
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>

      </form>
    </Dialog>
  )
}
