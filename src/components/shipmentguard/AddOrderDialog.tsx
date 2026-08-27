import { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOrders } from "@/store/orders-store";

const empty = {
  po: "",
  buyer: "",
  style: "",
  qty: "",
  fob: "",
  merchandiser: "",
  exFactory: "",
};

export function AddOrderDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { addOrder } = useOrders();
  const [form, setForm] = useState(empty);

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.po || !form.buyer) {
      toast.error("PO Number and Buyer are required.");
      return;
    }
    addOrder({
      po: form.po,
      buyer: form.buyer,
      style: form.style || "—",
      qty: Number(form.qty) || 0,
      fob: Number(form.fob) || 0,
      merchandiser: form.merchandiser || "Unassigned",
      exFactory: form.exFactory || "TBC",
      stage: "PO received",
      risk: "GREEN",
      buffer: 12,
      blocker: "None",
      confidence: 95,
    });
    toast.success(`${form.po} added to the order book.`);
    setForm(empty);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Order</DialogTitle>
          <DialogDescription>
            Demo mode — the order is stored in the browser session only.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
          <Field label="PO Number" value={form.po} onChange={set("po")} placeholder="PO-1300" />
          <Field label="Buyer" value={form.buyer} onChange={set("buyer")} placeholder="H&M" />
          <Field label="Style" value={form.style} onChange={set("style")} placeholder="HM-1400" />
          <Field
            label="Quantity (pcs)"
            value={form.qty}
            onChange={set("qty")}
            type="number"
            placeholder="15000"
          />
          <Field
            label="FOB Value (USD)"
            value={form.fob}
            onChange={set("fob")}
            type="number"
            placeholder="72000"
          />
          <Field
            label="Merchandiser"
            value={form.merchandiser}
            onChange={set("merchandiser")}
            placeholder="Rahim"
          />
          <Field
            label="Ex-Factory Date"
            value={form.exFactory}
            onChange={set("exFactory")}
            placeholder="15 Nov"
          />
          <DialogFooter className="sm:col-span-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Order</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="grid gap-1.5">
      <Label className="text-xs">{label}</Label>
      <Input {...props} />
    </div>
  );
}
