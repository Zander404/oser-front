"use client"

import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
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
import { toast } from "sonner";

const productSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  category: z.string().min(1, "Categoria é obrigatória"),
  units: z.coerce.number().min(0, "Quantidade deve ser maior ou igual a 0"),
  minUnits: z.coerce.number().min(0, "Quantidade mínima deve ser maior ou igual a 0"),
  price: z.coerce.number().min(0, "Preço deve ser maior ou igual a 0"),
});

type ProductFormValues = z.infer<typeof productSchema>;

interface DialogProductProps {
  onSuccess?: (data: ProductFormValues) => void;
}

export default function DialogProduct({ onSuccess }: DialogProductProps) {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema) as any,
    defaultValues: {
      name: "",
      category: "",
      units: 0,
      minUnits: 0,
      price: 0,
    },
  });

  function onSubmit(data: ProductFormValues) {
    console.log(data);
    onSuccess?.(data);
    toast.success("Produto criado com sucesso!");
    form.reset();
  }

  return (
    <Dialog onOpenChange={(open) => !open && form.reset()}>
      <DialogTrigger asChild>
        <Button className="rounded-full md:w-fit h-11 bg-slate-800 hover:shadow-2xl">
          <Plus /> Criar Produto
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Produto</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FieldGroup>
            <Field>
              <Label htmlFor="product_name">Nome do Produto</Label>
              <Input
                id="product_name"
                placeholder="Nome do Produto"
                {...form.register("name")}
              />
              <FieldError errors={[form.formState.errors.name]} />
            </Field>

            <Field>
              <Label htmlFor="product_category">Categoria</Label>
              <Input
                id="product_category"
                placeholder="Categoria"
                {...form.register("category")}
              />
              <FieldError errors={[form.formState.errors.category]} />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <Label htmlFor="product_units">Quantidade</Label>
                <Input
                  id="product_units"
                  type="number"
                  {...form.register("units")}
                />
                <FieldError errors={[form.formState.errors.units]} />
              </Field>
              <Field>
                <Label htmlFor="product_min_units">Quantidade Minima</Label>
                <Input
                  id="product_min_units"
                  type="number"
                  {...form.register("minUnits")}
                />
                <FieldError errors={[form.formState.errors.minUnits]} />
              </Field>
            </div>

            <Field>
              <Label htmlFor="product_price">Preço</Label>
              <Input
                id="product_price"
                type="number"
                step="0.01"
                prefix="R$"
                placeholder="0,00"
                {...form.register("price")}
              />
              <FieldError errors={[form.formState.errors.price]} />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-slate-800">
              Salvar Produto
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
