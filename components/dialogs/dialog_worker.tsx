"use client"

import { UserPlus } from "lucide-react";
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

const workerSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  role: z.string().min(1, "Cargo é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(1, "Telefone é obrigatório"),
});

type WorkerFormValues = z.infer<typeof workerSchema>;

interface DialogWorkerProps {
  onSuccess?: (data: WorkerFormValues) => void;
}

export default function DialogWorker({ onSuccess }: DialogWorkerProps) {
  const form = useForm<WorkerFormValues>({
    resolver: zodResolver(workerSchema),
    defaultValues: {
      name: "",
      role: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(data: WorkerFormValues) {
    console.log(data);
    onSuccess?.(data);
    toast.success("Funcionário cadastrado com sucesso!");
    form.reset();
  }

  return (
    <Dialog onOpenChange={(open) => !open && form.reset()}>
      <DialogTrigger asChild>
        <Button className="rounded-full md:w-fit h-11 bg-slate-800 hover:shadow-2xl">
          <UserPlus className="w-5 h-5 mr-2" /> Novo Funcionário
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar Funcionário</DialogTitle>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FieldGroup>
            <Field>
              <Label htmlFor="worker_name">Nome Completo</Label>
              <Input
                id="worker_name"
                placeholder="Ex: Maria Souza"
                {...form.register("name")}
              />
              <FieldError errors={[form.formState.errors.name]} />
            </Field>

            <Field>
              <Label htmlFor="worker_role">Cargo</Label>
              <Input
                id="worker_role"
                placeholder="Ex: Técnico de Campo"
                {...form.register("role")}
              />
              <FieldError errors={[form.formState.errors.role]} />
            </Field>

            <Field>
              <Label htmlFor="worker_email">E-mail</Label>
              <Input
                id="worker_email"
                type="email"
                placeholder="maria@empresa.com"
                {...form.register("email")}
              />
              <FieldError errors={[form.formState.errors.email]} />
            </Field>

            <Field>
              <Label htmlFor="worker_phone">Telefone</Label>
              <Input
                id="worker_phone"
                placeholder="(00) 00000-0000"
                {...form.register("phone")}
              />
              <FieldError errors={[form.formState.errors.phone]} />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-slate-800">
              Salvar Funcionário
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
