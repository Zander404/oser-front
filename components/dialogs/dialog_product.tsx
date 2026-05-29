"use client"

import { useState, useEffect } from "react";
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
  initialData?: Partial<ProductFormValues> & { id?: number };
  trigger?: React.ReactNode;
}

export default function DialogProduct({ onSuccess, initialData, trigger }: DialogProductProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema) as any,
    defaultValues: {
      name: initialData?.name || "",
      category: initialData?.category || "",
      units: initialData?.units || 0,
      minUnits: initialData?.minUnits || 0,
      price: initialData?.price || 0,
    },
  });

  useEffect(() => {
    if (open) {
      form.reset({
        name: initialData?.name || "",
        category: initialData?.category || "",
        units: initialData?.units || 0,
        minUnits: initialData?.minUnits || 0,
        price: initialData?.price || 0,
      });
    }
  }, [open, initialData, form]);

  function onSubmit(data: ProductFormValues) {
    onSuccess?.({ ...data, id: initialData?.id } as any);
    toast.success(initialData ? "Produto atualizado!" : "Produto criado com sucesso!");
    setOpen(false);
    if (!initialData) form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="rounded-full md:w-fit h-11 bg-slate-800 hover:shadow-2xl">
            <Plus /> Criar Produto
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialData ? "Editar Produto" : "Criar Produto"}</DialogTitle>
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
