import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { useOrders } from "@/store/orders-store";
import {
  defaultMilestones,
  milestonesByPO,
  recommendedActions,
  riskReasons,
} from "@/data/mock";
import { RiskBadge } from "./RiskBadge";
import { DependencyChain, TaTimeline } from "./TaTimeline";

export function OrderDetailPanel() {
  const { orders, selectedPO, closeOrder } = useOrders();
  const order = orders.find((o) => o.po === selectedPO) ?? null;

  const milestones = order ? (milestonesByPO[order.po] ?? defaultMilestones) : [];
  const reason =
    order &&
    (riskReasons[order.po] ??
      (order.risk === "GREEN"
        ? "All critical-path milestones are on schedule. No recovery action required today."
        : `${order.blocker} is currently affecting the critical path. ${order.buffer} days of recovery buffer remain before ex-factory on ${order.exFactory}.`));
  const actions =
    order &&
    (recommendedActions[order.po] ?? [
      { dept: "Merchandising", text: `Follow up on: ${order.blocker}` },
      { dept: "Planning", text: "Re-check capacity against the revised plan" },
      { dept: "Commercial", text: "Confirm booking window with forwarder" },
    ]);

  return (
    <Sheet open={!!order} onOpenChange={(v) => !v && closeOrder()}>
      <SheetContent className="w-full overflow-y-auto p-0 sm:max-w-2xl">
        {order && (
          <>
            <SheetHeader className="border-b px-6 py-5">
              <SheetTitle className="flex flex-wrap items-center gap-3 text-xl">
                {order.po} — Shipment Risk
                <RiskBadge risk={order.risk} />
              </SheetTitle>
              <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-4">
                <Meta label="Buyer" value={order.buyer} />
                <Meta label="Style" value={order.style} />
                <Meta label="Quantity" value={`${order.qty.toLocaleString()} pcs`} />
                <Meta label="Ex-Factory" value={order.exFactory} />
              </dl>
            </SheetHeader>

            <div className="space-y-6 px-6 py-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-card rounded-lg border p-4 shadow-card">
                  <div className="text-muted-foreground text-xs tracking-wide uppercase">
                    Current Shipment Confidence
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="tnum text-2xl font-semibold">{order.confidence}%</span>
                    <span
                      className={
                        order.confidence < 65
                          ? "text-risk-red text-sm font-medium"
                          : order.confidence < 85
                            ? "text-risk-amber text-sm font-medium"
                            : "text-risk-green text-sm font-medium"
                      }
                    >
                      {order.confidence < 65
                        ? "HIGH RISK"
                        : order.confidence < 85
                          ? "WATCH"
                          : "STABLE"}
                    </span>
                  </div>
                  <Progress value={order.confidence} className="mt-3 h-1.5" />
                </div>
                <div className="bg-card rounded-lg border p-4 shadow-card">
                  <div className="text-muted-foreground text-xs tracking-wide uppercase">
                    Remaining Buffer
                  </div>
                  <div className="tnum mt-1 text-2xl font-semibold">{order.buffer} Days</div>
                  <div className="text-muted-foreground mt-3 text-xs">
                    Recovery window before ex-factory slips
                  </div>
                </div>
              </div>

              <div className="border-risk-red/30 bg-risk-red-soft rounded-lg border p-4">
                <div className="text-risk-red flex items-center gap-2 text-sm font-semibold">
                  <AlertTriangle className="size-4" />
                  Why is this order at risk?
                </div>
                <p className="text-foreground/80 mt-2 text-sm leading-relaxed">{reason}</p>
                <div className="mt-4">
                  <div className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
                    Dependency chain
                  </div>
                  <DependencyChain />
                </div>
              </div>

              <section>
                <h3 className="text-sm font-semibold">Recommended Actions Today</h3>
                <ul className="mt-3 space-y-2">
                  {actions?.map((a) => (
                    <li
                      key={a.text}
                      className="bg-card flex items-start gap-3 rounded-lg border p-3 shadow-card"
                    >
                      <span className="bg-secondary text-secondary-foreground mt-0.5 rounded px-2 py-0.5 text-[11px] font-medium">
                        {a.dept}
                      </span>
                      <span className="text-sm">{a.text}</span>
                      <ArrowRight className="text-muted-foreground ml-auto size-4 shrink-0" />
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-3 text-sm font-semibold">T&amp;A Milestone Timeline</h3>
                <div className="bg-card rounded-lg border p-4 shadow-card">
                  <TaTimeline milestones={milestones} />
                </div>
              </section>

              <div className="flex flex-wrap gap-2 pb-4">
                <Button onClick={() => toast.success("Recovery plan requested from Planning.")}>
                  Request Recovery Plan
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toast.success("Escalated to management. Demo notification sent.")}
                >
                  Escalate to Management
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted-foreground text-xs">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
