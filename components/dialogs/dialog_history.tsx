import { HistoryIcon } from "lucide-react";
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

const mockHistory = [
  { id: 1, action: "Produto A adicionado", date: "28/05/2026 10:30" },
  { id: 2, action: "Pedido #123 finalizado", date: "28/05/2026 09:15" },
  { id: 3, action: "Transação de R$ 500,00 registrada", date: "27/05/2026 16:45" },
];

export default function DialogHistory() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full md:w-fit h-11 bg-slate-800 hover:shadow-2xl">
          <HistoryIcon className="w-5 h-5 mr-2" /> Histórico
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Histórico de Atividades</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="max-h-[40vh] overflow-y-auto pr-2 space-y-3">
            {mockHistory.map((item) => (
              <div key={item.id} className="flex flex-col border-b pb-2 last:border-0">
                <span className="text-sm font-medium">{item.action}</span>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <DialogFooter className="flex flex-row justify-between sm:justify-between items-center">
          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
            Limpar Histórico
          </Button>
          <DialogClose asChild>
            <Button variant="outline">Fechar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
