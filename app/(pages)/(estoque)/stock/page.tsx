"use client"

import { useState } from "react";
import ProductCard from "@/components/cards/product_stock_card";
import StockServiceInfoCard from "@/components/cards/stock_service_info_card";
import DialogHistory from "@/components/dialogs/dialog_history";
import DialogNotification from "@/components/dialogs/dialog_notification";
import DialogProduct from "@/components/dialogs/dialog_product";
import DialogOrder from "@/components/dialogs/dialog_order";
import StockStats from "@/components/stats/stock_stats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const initialProducts = [
  {
    id: 1,
    name: "Produto A",
    units: 100,
    minimum: 20,
    price: 50,
    category: "CATEGORIA 1"
  },
  {
    id: 2,
    name: "Produto A",
    units: 100,
    minimum: 20,
    price: 50,
    category: "CATEGORIA 1"
  },
  {
    id: 3,
    name: "Produto C",
    units: 100,
    minimum: 20,
    price: 50,
    category: "CATEGORIA 3"
  },
  {
    id: 4,
    name: "Produto B",
    units: 100,
    minimum: 20,
    price: 50,
    category: "CATEGORIA 1"
  }
]
const initialServices = [
  {
    id: 1,
    cliente: "Cliente 1",
    services: [{
      name: "teste 1", description: "Consultoria Metereologica", status: "Ativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
    }],
    status: "Pendente",
    date: "26/05/2026"
  },
]

export default function Page() {
  const [products, setProducts] = useState(initialProducts);
  const [services, setServices] = useState(initialServices);

  const handleAddProduct = (newProduct: any) => {
    setProducts((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: newProduct.name,
        category: newProduct.category,
        units: newProduct.units,
        minimum: newProduct.minUnits,
        price: newProduct.price,
      }
    ]);
  };


  return (
    <div className="w-full flex flex-col min-h-svh p-3 md:p-6 overflow-x-hidden" >

      {/* NAVBAR */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center w-full pt-4 md:pt-8 justify-between ">
        {/* TITLE */}
        <div className="space-y-1">
          <h1 className="text-3xl md:text-5xl font-extrabold">Estoque</h1>
          <h2 className="text-sm md:text-base font-heading text-slate-600">Controle de Produtos e Pedidos</h2>
        </div>


        <div className="flex flex-wrap items-center gap-3">
          <DialogNotification />
          <DialogHistory />
          <DialogProduct onSuccess={handleAddProduct} />
        </div>
      </div>


      <div className="pt-6 md:pt-10">
        <Tabs defaultValue={"pedido_pendente"} className="w-full">
          <div className="overflow-x-auto no-scrollbar">
            <TabsList variant={"line"} className="w-full justify-start md:justify-center border-b">
              <TabsTrigger value={"pedido_pendente"} className="whitespace-nowrap px-4 py-2">Pedidos Pendentes</TabsTrigger>
              <TabsTrigger value={"produtos_estoque"} className="whitespace-nowrap px-4 py-2">Produtos em Estoque</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="pedido_pendente" className="pt-6">
            {/* PEDIDO PENDENTE */}
            <div className="space-y-3 md:space-y-4">
              {
                Array.isArray(services) && services.length > 0 ? (
                  services.map((data, index) => (
                    <StockServiceInfoCard key={`${index}-${index}`} id={data.id} cliente={data.cliente} date={data.date} servico={data.services} status={data.status} />
                  ))) : (

                  <div className=" w-full flex justify-center items-center rounded-xl  border border-slate-200 bg-slate-50 h-32 text-muted-foreground">
                    Nenhum pedido pendente para preparar
                  </div>
                )
              }
            </div>

          </TabsContent>

          <TabsContent value="produtos_estoque" className="pt-6">
            <div className="space-y-6">
              <StockStats />

              <div className="grid grid-cols-1 gap-4">
                {products.length > 0 ? (
                  products.map((data) => (
                    <ProductCard
                      key={data.id}
                      name={data.name}
                      category={data.category}
                      units={data.units}
                      minimum={data.minimum}
                      price={data.price}
                    />
                  ))
                ) : (
                  <div className="w-full flex justify-center items-center rounded-xl border border-slate-200 bg-slate-50 h-32 text-muted-foreground">
                    Nenhum produto em estoque
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div >
  )
}
