"use client"

import { Plus } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";
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

const transactionSchema = z.object({
  date: z.string().min(1, "Data é obrigatória"),
  description: z.string().min(1, "Descrição é obrigatória"),
  category: z.string().min(1, "Categoria é obrigatória"),
  type: z.enum(["receita", "despesa"]),
  value: z.coerce.number().min(0.01, "Valor deve ser maior que 0"),
  status: z.enum(["concluido", "pendente"]),
});

type TransactionFormValues = z.infer<typeof transactionSchema>;

interface DialogTransactionProps {
  onSuccess?: (data: TransactionFormValues) => void;
}

export default function DialogTransaction({ onSuccess }: DialogTransactionProps) {
  const form = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      date: new Date().toISOString().split("T")[0],
      description: "",
      category: "",
      type: "receita",
      value: 0,
      status: "pendente",
    },
  });

  function onSubmit(data: TransactionFormValues) {
    console.log(data);
    onSuccess?.(data);
    toast.success("Transação salva com sucesso!");
    form.reset();
  }

  return (
    <Dialog onOpenChange={(open) => !open && form.reset()}>
      <DialogTrigger asChild>
        <Button className="rounded-full md:w-fit h-11 bg-slate-800 hover:shadow-2xl">
          <Plus /> Nova Transação
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova Transação</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FieldGroup>
            <Field>
              <Label htmlFor="t_date">Data</Label>
              <Input id="t_date" type="date" {...form.register("date")} />
              <FieldError errors={[form.formState.errors.date]} />
            </Field>

            <Field>
              <Label htmlFor="t_desc">Descrição</Label>
              <Input
                id="t_desc"
                placeholder="Descrição da transação"
                {...form.register("description")}
              />
              <FieldError errors={[form.formState.errors.description]} />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <Label htmlFor="t_category">Categoria</Label>
                <Input
                  id="t_category"
                  placeholder="Ex: Venda, Aluguel"
                  {...form.register("category")}
                />
                <FieldError errors={[form.formState.errors.category]} />
              </Field>

              <Field>
                <Label>Tipo</Label>
                <Controller
                  name="type"
                  control={form.control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione um tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Tipo de Transação</SelectLabel>
                          <SelectItem value="receita">Receita</SelectItem>
                          <SelectItem value="despesa">Despesa</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError errors={[form.formState.errors.type]} />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field>
                <Label htmlFor="t_value">Valor</Label>
                <InputGroup>
                  <InputGroupAddon>
                    <InputGroupText>R$</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput
                    id="t_value"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    {...form.register("value")}
                  />
                </InputGroup>
                <FieldError errors={[form.formState.errors.value]} />
              </Field>

              <Field>
                <Label>Status</Label>
                <Controller
                  name="status"
                  control={form.control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Status</SelectLabel>
                          <SelectItem value="concluido">Concluído</SelectItem>
                          <SelectItem value="pendente">Pendente</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                <FieldError errors={[form.formState.errors.status]} />
              </Field>
            </div>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-slate-800">
              Salvar Transação
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
