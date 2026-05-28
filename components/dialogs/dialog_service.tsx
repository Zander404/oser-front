"use client"

import { Plus, Trash2 } from "lucide-react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Field, FieldError, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { InputGroup, InputGroupTextarea } from "../ui/input-group";
import { toast } from "sonner";

const serviceSchema = z.object({
  name: z.string().min(1, "Nome do serviço é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  price: z.coerce.number().min(0, "Preço deve ser maior ou igual a 0"),
  duration: z.coerce.number().min(1, "Duração mínima de 1h"),
  products: z.array(
    z.object({
      name: z.string().min(1, "Selecione um produto"),
      quantity: z.coerce.number().min(1, "Mínimo 1"),
    })
  ),
});

type ServiceFormValues = z.infer<typeof serviceSchema>;

interface DialogServiceProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  onSuccess?: (data: ServiceFormValues) => void;
}

export default function DialogService({ title, icon: Icon, onSuccess }: DialogServiceProps) {
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      duration: 1,
      products: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "products",
  });

  function onSubmit(data: ServiceFormValues) {
    console.log(data);
    onSuccess?.(data);
    toast.success("Serviço criado com sucesso!");
    form.reset();
  }

  return (
    <Dialog onOpenChange={(open) => !open && form.reset()}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-fit h-11 bg-slate-800 rounded-full hover:shadow-2xl">
          <Icon className="w-5 h-5 mr-2" />
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Novo Serviço</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FieldGroup>
            <Field>
              <Label htmlFor="service_name">Nome do Serviço</Label>
              <Input
                id="service_name"
                placeholder="Ex: Consultoria Meteorológica"
                {...form.register("name")}
              />
              <FieldError errors={[form.formState.errors.name]} />
            </Field>

            <Field>
              <Label htmlFor="service_description">Descrição</Label>
              <InputGroup>
                <InputGroupTextarea
                  id="service_description"
                  placeholder="Descreva o serviço..."
                  {...form.register("description")}
                />
              </InputGroup>
              <FieldError errors={[form.formState.errors.description]} />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <Label htmlFor="service_price">Preço (R$)</Label>
                <Input
                  id="service_price"
                  type="number"
                  step="0.01"
                  {...form.register("price")}
                />
                <FieldError errors={[form.formState.errors.price]} />
              </Field>
              <Field>
                <Label htmlFor="service_duration">Duração (Horas)</Label>
                <Input
                  id="service_duration"
                  type="number"
                  {...form.register("duration")}
                />
                <FieldError errors={[form.formState.errors.duration]} />
              </Field>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-lg font-semibold">Kit de Produtos</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => append({ name: "", quantity: 1 })}
                >
                  <Plus className="w-4 h-4 mr-1" /> Adicionar Produto
                </Button>
              </div>

              {fields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-12 gap-3 items-end bg-slate-50 p-3 rounded-lg border">
                  <div className="col-span-7">
                    <Field>
                      <Label>Produto</Label>
                      <Input
                        placeholder="Nome do produto"
                        {...form.register(`products.${index}.name` as const)}
                      />
                    </Field>
                  </div>
                  <div className="col-span-3">
                    <Field>
                      <Label>Qtd</Label>
                      <Input
                        type="number"
                        {...form.register(`products.${index}.quantity` as const)}
                      />
                    </Field>
                  </div>
                  <div className="col-span-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:text-destructive/80"
                      onClick={() => remove(index)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
              {form.formState.errors.products && (
                <FieldError errors={[{ message: "Verifique os produtos do kit" }]} />
              )}
            </div>
          </FieldGroup>

          <DialogFooter className="sticky bottom-0 bg-white pt-2 border-t mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-slate-800">
              Criar Serviço
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
