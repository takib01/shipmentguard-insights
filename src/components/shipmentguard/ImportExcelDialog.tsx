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
import { UploadCloud } from "lucide-react";
import { useOrders } from "@/store/orders-store";

export function ImportExcelDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { importSample } = useOrders();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import Orders from Excel</DialogTitle>
          <DialogDescription>
            Upload your existing order Excel file. Demo mode: sample data will be imported.
          </DialogDescription>
        </DialogHeader>
        <div className="border-border bg-muted/40 text-muted-foreground flex flex-col items-center gap-2 rounded-lg border border-dashed px-6 py-8 text-center text-sm">
          <UploadCloud className="text-muted-foreground size-6" />
          Drop <span className="font-mono text-xs">order_book.xlsx</span> here
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              const n = importSample();
              toast.success(`Demo import complete — ${n} sample orders loaded.`);
              onOpenChange(false);
            }}
          >
            Load Sample Excel Data
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
