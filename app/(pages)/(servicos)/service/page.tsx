import ServiceCard from "@/components/cards/service_card";
import ServiceInfoCard from "@/components/cards/service_info_card";
import { description } from "@/components/charts/bar_chart";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";


const services = [
  {
    name: "teste 1", description: "Consultoria Metereologica", status: "Ativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
  },
  {
    name: "teste 2", description: "teastaas dasdsad", status: "Desativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
  },
  {
    name: "teste 3", description: "tesadas ", status: "Ativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
  },
  {
    name: "teste 4", description: "dadasdasdasd", status: "Desativo", price: "54", duration: 1, kits: [{ name: "Produto A (2x) - Estoque 100" }, { name: "Produto B (2x) - Estoque 100" }]
  },
]

export default function Page() {
  return (
    <div className="w-full border flex flex-col min-h-svh p-6">
      {/* NAVBAR */}
      <div className="grid auto-rows-auto md:grid-cols-2 w-full pt-8 justify-between ">

        {/* TITLE */}
        <div className="">
          <h1 className="text-5xl font-extrabold">Servico e Pedidos</h1>
          <h2 className="font-heading text-slate-600">Gerenciar serviços e acompanhamento de pedidos</h2>
        </div>


        <div className="flex flex-row justify-end align-middle space-x-4">
          <Button className="w-fit h-11">
            <Plus />
            Novo Serviço
          </Button>
        </div>
      </div>

      <div className="pt-10 px-4">
        <Tabs className="" defaultValue="servico">
          <TabsList className="w-full" variant={"line"}>
            <TabsTrigger value="servico">Serviço</TabsTrigger>
            <TabsTrigger value="pedidos_pendentes">Pedidos Pendentes</TabsTrigger>
            <TabsTrigger value="pedidos_prontos">Pedidos Prontos</TabsTrigger>
            <TabsTrigger value="historico">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="servico" className="w-full pt-6 mt-0">
            <div className="p-4 borde space-y-2 rounded-x">
              {
                Array.isArray(services) ? (
                  services.map((data, index) =>
                  (
                    <ServiceCard key={index} name={data.name} description={data.description} status={data.status} price={data.price} duration={data.duration} products={data.kits} />
                  ))
                ) : (
                  <div></div>
                )

              }
            </div>
          </TabsContent>

          <TabsContent value="pedidos_pendentes" className="w-full pt-6 mt-0">
            <div className="p-4 rounded-xl">
              Pedidos Pendentes
              <ServiceInfoCard id={1} status="Pronto" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={2} status="Pendente" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={3} status="Cancelado" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={4} status="Pronto" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={5} status="Pendente" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />



            </div>
          </TabsContent>

          <TabsContent value="pedidos_prontos" className="w-full pt-6 mt-0">
            <div className="p-4 rounded-xl">
              Pedidos Pendentes
              <ServiceInfoCard id={1} status="Pronto" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={2} status="Pronto" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={3} status="Pronto" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={4} status="Pronto" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={5} status="Pronto" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
            </div>
          </TabsContent>

          <TabsContent value="historico" className="w-full pt-6 mt-0">
            <div className="p-4 rounded-xl">
              Pedidos Pendentes
              <ServiceInfoCard id={1} status="Concluido" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={2} status="Concluido" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={3} status="Concluido" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={4} status="Concluido" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
              <ServiceInfoCard id={5} status="Concluido" servico="Montagem de Camas" cliente="Teste 1" date="28/03/2025" />
            </div>
          </TabsContent>

        </Tabs>
      </div>

    </div>
  )
}
