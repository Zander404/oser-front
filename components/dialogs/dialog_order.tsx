"use client"

import { Info, ShoppingCart } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Field, FieldError, FieldGroup } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";

const orderSchema = z.object({
  customerName: z.string().min(1, "Nome do cliente é obrigatório"),
  serviceId: z.string().min(1, "Selecione um serviço"),
  date: z.string().min(1, "Data é obrigatória"),
  notes: z.string().optional(),
});

type OrderFormValues = z.infer<typeof orderSchema>;

interface DialogOrderProps {
  onSuccess?: (data: OrderFormValues) => void;
  defaultServiceId?: string;
}

export default function DialogOrder({ onSuccess, defaultServiceId }: DialogOrderProps) {
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      customerName: "",
      serviceId: defaultServiceId || "",
      date: new Date().toISOString().split("T")[0],
      notes: "",
    },
  });

  function onSubmit(data: OrderFormValues) {
    console.log(data);
    onSuccess?.(data);
    toast.success("Pedido criado com sucesso!");
    form.reset();
  }

  return (
    <Dialog onOpenChange={(open) => !open && form.reset()}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-fit h-11 bg-slate-800 rounded-full hover:shadow-2xl">
          <ShoppingCart className="w-5 h-5 mr-2" /> Criar Pedido
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Criar Novo Pedido</DialogTitle>
          <DialogDescription className="flex items-center p-3 bg-emerald-50 text-emerald-900 rounded-lg border border-emerald-100">
            <Info className="w-5 h-5 mr-2" />
            <span>Preencha os dados do cliente e selecione o serviço solicitado.</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FieldGroup>
            <Field>
              <Label htmlFor="customer_name">Nome do Cliente</Label>
              <Input
                id="customer_name"
                placeholder="Ex: João da Silva"
                {...form.register("customerName")}
              />
              <FieldError errors={[form.formState.errors.customerName]} />
            </Field>

            <Field>
              <Label>Serviço</Label>
              <Controller
                name="serviceId"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Serviços Disponíveis</SelectLabel>
                        <SelectItem value="serv-1">Consultoria Meteorológica</SelectItem>
                        <SelectItem value="serv-2">Montagem de Equipamentos</SelectItem>
                        <SelectItem value="serv-3">Manutenção Preventiva</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <FieldError errors={[form.formState.errors.serviceId]} />
            </Field>

            <Field>
              <Label htmlFor="order_date">Data do Pedido</Label>
              <Input id="order_date" type="date" {...form.register("date")} />
              <FieldError errors={[form.formState.errors.date]} />
            </Field>

            <Field>
              <Label htmlFor="order_notes">Observações (Opcional)</Label>
              <Input
                id="order_notes"
                placeholder="Detalhes adicionais..."
                {...form.register("notes")}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-slate-800">
              Confirmar Pedido
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
