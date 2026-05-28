"use client"

import { useState, useEffect } from "react";
import ServiceCard from "@/components/cards/service_card";
import ServiceInfoCard from "@/components/cards/service_info_card";
import DialogService from "@/components/dialogs/dialog_service";
import DialogOrder from "@/components/dialogs/dialog_order";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { toast } from "sonner";

const initialServices = [
  {
    id: "serv-1",
    name: "teste 1",
    description: "Consultoria Metereologica",
    status: "Ativo",
    price: "54",
    duration: 1,
    kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
  },
  {
    id: "serv-2",
    name: "teste 2",
    description: "teastaas dasdsad",
    status: "Desativo",
    price: "54",
    duration: 1,
    kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
  },
];

const initialOrders = [
  { id: 1, status: "Pronto", servico: "Montagem de Camas", cliente: "Teste 1", date: "28/03/2025" },
  { id: 2, status: "Pendente", servico: "Montagem de Camas", cliente: "Teste 1", date: "28/03/2025" },
];

export default function Page() {
  const [services, setServices] = useState(initialServices);
  const [orders, setOrders] = useState(initialOrders);

  useEffect(() => {
    const completedIds = JSON.parse(localStorage.getItem("completedOrderIds") || "[]");
    const finishedIds = JSON.parse(localStorage.getItem("finishedOrderIds") || "[]");

    setOrders(prev => prev.map(o => {
      if (finishedIds.includes(o.id)) return { ...o, status: "Concluido" };
      if (completedIds.includes(o.id)) return { ...o, status: "Pronto" };
      return o;
    }));
  }, []);

  const handleFinishOrder = (id: number) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: "Concluido" } : o))
    );

    const finishedIds = JSON.parse(localStorage.getItem("finishedOrderIds") || "[]");
    if (!finishedIds.includes(id)) {
      localStorage.setItem("finishedOrderIds", JSON.stringify([...finishedIds, id]));
    }

    toast.success(`Serviço do Pedido #${id} concluído!`, {
      description: "O pedido foi movido para o histórico.",
    });
  };

  const handleDeleteOrder = (id: number) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
    toast.error(`Pedido #${id} excluído.`);
  };

  const handleEditOrder = (id: number, data: any) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === id
          ? {
            ...o,
            cliente: data.customerName,
            date: data.date,
          }
          : o
      )
    );
  };

  const handleDeleteService = (id: string) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
    toast.error("Serviço excluído.");
  };

  const handleEditService = (id: string, data: any) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
            ...s,
            name: data.name,
            description: data.description,
            price: data.price.toString(),
            duration: data.duration,
            kits: data.products.map((p: any) => ({ name: `${p.name} (${p.quantity}x)` }))
          }
          : s
      )
    );
  };

  const handleAddService = (newService: any) => {
    setServices((prev) => [
      ...prev,
      {
        ...newService,
        status: "Ativo",
        price: newService.price.toString(),
        kits: newService.products.map((p: any) => ({ name: `${p.name} (${p.quantity}x)` }))
      }
    ]);
  };

  const handleAddOrder = (newOrder: any) => {
    setOrders((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        status: "Pendente",
        servico: "Serviço Selecionado", // In a real app, this would be looked up by serviceId
        cliente: newOrder.customerName,
        date: newOrder.date
      }
    ]);
  };

  return (
    <div className="w-full flex flex-col min-h-svh p-3 md:p-6 overflow-x-hidden">
      {/* NAVBAR */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center w-full pt-4 md:pt-8 justify-between ">
        {/* TITLE */}
        <div className="space-y-1">
          <h1 className="text-3xl md:text-5xl font-extrabold">Ordem de Serviço</h1>
          <h2 className="text-sm md:text-base font-heading text-slate-600">Gerenciar serviços e acompanhamento de pedidos</h2>
        </div>

        <div className="flex flex-row justify-end align-middle items-center">
          <DialogService title="Novo Serviço" icon={Plus} onSuccess={handleAddService} />
        </div>
      </div>

      <div className="pt-6 md:pt-10">
        <Tabs className="w-full" defaultValue="servico">
          <div className="overflow-x-auto no-scrollbar">
            <TabsList className="w-full justify-start md:justify-center border-b" variant={"line"}>
              <TabsTrigger value="servico" className="whitespace-nowrap px-4 py-2">Serviço</TabsTrigger>
              <TabsTrigger value="pedidos_pendentes" className="whitespace-nowrap px-4 py-2">Pedidos Pendentes</TabsTrigger>
              <TabsTrigger value="pedidos_prontos" className="whitespace-nowrap px-4 py-2">Pedidos Prontos</TabsTrigger>
              <TabsTrigger value="historico" className="whitespace-nowrap px-4 py-2">Histórico</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="servico" className="w-full pt-6 mt-0">
            <div className="space-y-3 md:space-y-4">
              {services.map((data, index) => (
                <ServiceCard
                  key={index}
                  id={data.id}
                  name={data.name}
                  description={data.description}
                  status={data.status}
                  price={data.price}
                  duration={data.duration}
                  products={data.kits}
                  onAddOrder={handleAddOrder}
                  onEdit={handleEditService}
                  onDelete={handleDeleteService}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pedidos_pendentes" className="w-full pt-6 mt-0">
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-bold mb-2 md:mb-4 px-2">Pedidos Pendentes</h3>
              {orders.filter(o => o.status === "Pendente").map((order) => (
                                <ServiceInfoCard
                  key={order.id}
                  {...order}
                  onFinish={handleFinishOrder}
                  onDelete={handleDeleteOrder}
                  onEdit={handleEditOrder}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pedidos_prontos" className="w-full pt-6 mt-0">
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-bold mb-2 md:mb-4 px-2">Pedidos Prontos</h3>
              {orders.filter(o => o.status === "Pronto").map((order) => (
                                <ServiceInfoCard
                  key={order.id}
                  {...order}
                  onFinish={handleFinishOrder}
                  onDelete={handleDeleteOrder}
                  onEdit={handleEditOrder}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="historico" className="w-full pt-6 mt-0">
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-bold mb-2 md:mb-4 px-2">Histórico</h3>
              {orders.filter(o => o.status === "Concluido" || o.status === "Cancelado").map((order) => (
                                <ServiceInfoCard
                  key={order.id}
                  {...order}
                  onFinish={handleFinishOrder}
                  onDelete={handleDeleteOrder}
                  onEdit={handleEditOrder}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
