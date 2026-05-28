import ProductCard from "@/components/cards/product_stock_card";
import StockServiceInfoCard from "@/components/cards/stock_service_info_card";
import StockStats from "@/components/stats/stock_stats";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bell, History, Plus } from "lucide-react";


const product = [
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
const services = [
  {
    id: 1,
    cliente: "Cliente 1",
    services: [{
      name: "teste 1", description: "Consultoria Metereologica", status: "Ativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
    }],
    status: "Pendente",
    date: "26/05/2026"
  },

  {
    id: 2,
    cliente: "Cliente 2",
    services: [{

      name: "teste 2", description: "teastaas dasdsad", status: "Desativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
    }],
    status: "Pendente",
    date: "26/05/2026"


  },
  {
    id: 3,
    cliente: "Cliente 3",
    services: [{
      name: "teste 3", description: "tesadas ", status: "Ativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
    }],
    status: "Pendente",
    date: "26/05/2026"

  },
  {
    id: 4,
    cliente: "Cliente 4",
    services: [
      { name: "teste 4", description: "dadasdasdasd", status: "Desativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }] },
      { name: "teste 5", description: "dadasdasdasd", status: "Desativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }] }

    ],
    status: "Pendente",
    date: "26/05/2026"

  },
]



export default function Page() {
  return (
    <div className="w-full border flex flex-col min-h-svh p-6" >

      {/* NAVBAR */}
      <div className="grid auto-rows-auto md:grid-cols-2 w-full pt-8 justify-between ">

        {/* TITLE */}
        <div>
          <h1 className="text-5xl font-extrabold">Estoque</h1>
          <h2 className="font-heading text-slate-600">Controle de Produtos e Pedidos</h2>
        </div>


        <div className="flex flex-row justify-end align-middle space-x-4">
          <Button variant={"outline"} className="h-11 w-11 hover:shadow-xl rounded-full ">
            <Bell />
          </Button>

          <Button className="w-fit h-11 rounded-lg hover:shadow-xl">
            <History />
            Historico
          </Button>

          <Button className="w-fit h-11 rounded-lg hover:shadow-xl">
            <Plus />
            Novo Produto
          </Button>
        </div>
      </div>


      <div className="pt-10 px-4">
        <Tabs defaultValue={"pedido_pendente"}>
          <TabsList variant={"line"}>
            <TabsTrigger value={"pedido_pendente"}>Pedidos Pendentes</TabsTrigger>
            <TabsTrigger value={"produtos_estoque"}>Produtos em Estoque</TabsTrigger>
          </TabsList>

          <TabsContent value="pedido_pendente">
            {/* PEDIDO PENDENTE */}
            <div className="space-y-2">
              {
                Array.isArray(services) ? (
                  services.map((data, index) => (
                    <StockServiceInfoCard key={`${index}-${index}`} id={data.id} cliente={data.cliente} date={data.date} servico={data.services} status={data.status} />
                  ))) : (

                  <div className=" w-full flex justify-center items-center jus  rounded-xl  border border-slate-800 h-32">
                    Nenhum pedido pendente para preparar
                  </div>
                )
              }
            </div>

          </TabsContent>

          <TabsContent value="produtos_estoque">
            <div>
              <StockStats />


              <div className="space-y-2">
                {
                  Array.isArray(services) ? (
                    product.map((data, index) => (
                      <ProductCard />
                    ))) : (

                    <div className=" w-full flex justify-center items-center jus  rounded-xl  border border-slate-800 h-32">
                      Nenhum pedido pendente para preparar
                    </div>
                  )
                }
              </div>


            </div>
          </TabsContent>
        </Tabs>

      </div>
    </div >
  )
}
