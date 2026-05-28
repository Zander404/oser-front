import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Field, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";

const teste: any = []
interface DialogServiceProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>
}

export default function DialogService(props: DialogServiceProps) {
  const Icon = props.icon;

  return (
    <Dialog>

      <form>
        <DialogTrigger asChild>
          <Button className="w-full md:w-fit h-11 bg-slate-800 rounded-full hover:shadow-2xl">
            <Icon className="w-11 h-11" />
            {props.title}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>
              <h1 className="font-bold text-2xl">
                Novo Servico
              </h1>
            </DialogTitle>


          </DialogHeader>
          <FieldGroup>

            <Field>
              <Label htmlFor="service_name">Nome do Servico</Label>
              <Input id="service_name" name="name" placeholder="Nome do Serviço" />
            </Field>

            <Field>
              <Label htmlFor="service_description">Descrição</Label>
              <InputGroup>
                <InputGroupTextarea id="service_description" placeholder="Descrição"></InputGroupTextarea>
              </InputGroup>
            </Field>

            <div className="grid auto-rows-auto md:grid-cols-2">
              <Field>
                <Label>Preço</Label>
                <Input type={"number"} />
              </Field>
              <Field>
                <Label>Duração</Label>
                <Input type={"number"} />
              </Field>
            </div>

            <div className="w-full p-4 bg-slate-100/20 border rounded-md">
              <h2>Kit de Produtos</h2>
              <div className="grid auto-rows-auto sm: grid-cols-2 p-2">
                <Field>
                  <Label>Selecione o Produto</Label>
                  <Input />
                </Field>

                <Field>
                  <Label>Quantidade</Label>
                  <Input type="number" className="" />
                </Field>

              </div>

              <Field>
                <Button className="p-2 rounded-full">Adicionar</Button>
              </Field>
            </div>



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
