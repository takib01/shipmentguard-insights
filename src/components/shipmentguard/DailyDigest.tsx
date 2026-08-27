import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

const risks = [
  { po: "PO-456", reason: "Fabric delayed", buffer: "3-day buffer" },
  { po: "PO-672", reason: "Sewing behind target", buffer: "2-day buffer" },
  { po: "PO-901", reason: "Inspection not booked", buffer: "4-day buffer" },
];

const actions = [
  "Confirm fabric ETA — Procurement",
  "Complete trims — Store",
  "Escalate PP approval — Merchandising",
  "Reserve cutting capacity — Planning",
];

export function DailyDigest() {
  return (
    <section className="bg-card rounded-lg border shadow-card">
      <div className="flex items-center justify-between border-b px-4 py-3">
        <h3 className="text-sm font-semibold">Daily Risk Digest — 15 September</h3>
        <span className="text-muted-foreground text-xs">Preview</span>
      </div>
      <div className="space-y-4 px-4 py-4 text-sm">
        <div>
          <div className="text-foreground font-medium">3 Orders at Shipment Risk</div>
          <ul className="mt-2 space-y-1.5">
            {risks.map((r) => (
              <li key={r.po} className="flex items-center gap-2">
                <span className="bg-risk-red size-2 shrink-0 rounded-full" />
                <span className="font-medium">{r.po}</span>
                <span className="text-muted-foreground">
                  — {r.reason} — {r.buffer}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-foreground font-medium">8 Critical Actions Today</div>
          <ol className="text-muted-foreground mt-2 list-inside list-decimal space-y-1">
            {actions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ol>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-t px-4 py-3">
        <Button
          size="sm"
          variant="outline"
          onClick={() => toast.success("Demo digest sent successfully.")}
        >
          <Mail className="size-4" />
          Send Email Digest
        </Button>
        <Button size="sm" onClick={() => toast.success("Demo digest sent successfully.")}>
          <MessageCircle className="size-4" />
          Send WhatsApp Digest
        </Button>
      </div>
    </section>
  );
}
