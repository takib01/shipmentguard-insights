import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, FileSpreadsheet } from "lucide-react";
import { AddOrderDialog } from "./AddOrderDialog";
import { ImportExcelDialog } from "./ImportExcelDialog";

export function Header() {
  const [addOpen, setAddOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);

  return (
    <header className="bg-surface/90 sticky top-0 z-20 border-b backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4">
        <div>
          <h1 className="text-foreground text-lg font-semibold tracking-tight">ShipmentGuard</h1>
          <p className="text-muted-foreground text-sm">
            Order Follow-up &amp; Shipment Risk Control Tower
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setImportOpen(true)}>
            <FileSpreadsheet className="size-4" />
            Import Excel
          </Button>
          <Button size="sm" onClick={() => setAddOpen(true)}>
            <Plus className="size-4" />
            Add Order
          </Button>
        </div>
      </div>
      <AddOrderDialog open={addOpen} onOpenChange={setAddOpen} />
      <ImportExcelDialog open={importOpen} onOpenChange={setImportOpen} />
    </header>
  );
}
