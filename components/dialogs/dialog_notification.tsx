import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../ui/dialog";

export default function DialogHistory() {
  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button className="rounded-full w-11 h-11 bg-slate-800 hover:shadow-2xl">
          <Bell />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="-mx-4 no-scrollbar max-h-[50vw] overflow-y-auto px-4">
            <h2>
              Historico
            </h2>
          </div>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  )
}
