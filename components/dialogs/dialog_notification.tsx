import { Bell } from "lucide-react";
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

const mockNotifications = [
  { id: 1, message: "Estoque baixo: Produto B", type: "warning" },
  { id: 2, message: "Novo pedido recebido de Cliente 1", type: "info" },
];

export default function DialogNotification() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full w-11 h-11 bg-slate-800 hover:shadow-2xl flex items-center justify-center p-0">
          <Bell className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Notificações</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {mockNotifications.length > 0 ? (
            <div className="space-y-3">
              {mockNotifications.map((n) => (
                <div
                  key={n.id}
                  className={`p-3 rounded-lg border ${
                    n.type === "warning"
                      ? "bg-amber-50 border-amber-100 text-amber-900"
                      : "bg-blue-50 border-blue-100 text-blue-900"
                  }`}
                >
                  <p className="text-sm">{n.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-muted-foreground text-sm">
              Nenhuma nova notificação
            </div>
          )}
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
