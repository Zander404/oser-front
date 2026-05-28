import { HistoryIcon, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog";

export default function DialogHistory() {
  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button className="rounded-full md:w-fit h-11 bg-slate-800 hover:shadow-2xl">
          <HistoryIcon /> Histórico
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            <h2>
              Criar Novo Pedido
            </h2>
          </div>
        </DialogHeader>

        <DialogFooter>
          <Button className="w-fit bg-slate-500 hover:bg-slate-800 text-slate-950 rounded-full">
            Limpar Todas
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  )
}
