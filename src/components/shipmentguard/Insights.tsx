import { buyerRisk, delayCauses, merchandiserPending } from "@/data/mock";
import { cn } from "@/lib/utils";

function Panel({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("bg-card rounded-lg border p-4 shadow-card", className)}>
      <h3 className="text-foreground text-sm font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function BuyerRiskPanel() {
  const max = Math.max(...buyerRisk.map((b) => b.atRisk), 1);
  return (
    <Panel title="Buyer-wise Delivery Risk">
      <ul className="space-y-3">
        {buyerRisk.map((b) => (
          <li key={b.buyer} className="flex items-center gap-3 text-sm">
            <span className="w-14 shrink-0 font-medium">{b.buyer}</span>
            <span className="bg-muted h-2 flex-1 overflow-hidden rounded-full">
              <span
                className={cn(
                  "block h-full rounded-full",
                  b.atRisk === 0 ? "bg-risk-green" : "bg-risk-red",
                )}
                style={{ width: `${Math.max((b.atRisk / max) * 100, 4)}%` }}
              />
            </span>
            <span className="tnum text-muted-foreground w-16 text-right text-xs">
              {b.atRisk} at risk
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function DelayCausePanel() {
  return (
    <Panel title="Main Causes of Delay">
      <div className="flex h-2.5 overflow-hidden rounded-full">
        {delayCauses.map((c, i) => (
          <span
            key={c.cause}
            style={{ width: `${c.pct}%` }}
            className={
              ["bg-risk-red", "bg-risk-amber", "bg-chart-4", "bg-chart-5", "bg-risk-green"][i]
            }
          />
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {delayCauses.map((c, i) => (
          <li key={c.cause} className="flex items-center gap-2">
            <span
              className={cn(
                "size-2 rounded-full",
                ["bg-risk-red", "bg-risk-amber", "bg-chart-4", "bg-chart-5", "bg-risk-green"][i],
              )}
            />
            <span className="flex-1">{c.cause}</span>
            <span className="tnum text-muted-foreground">{c.pct}%</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

export function MerchandiserPanel() {
  const max = Math.max(...merchandiserPending.map((m) => m.count));
  return (
    <Panel title="Merchandiser Pending Actions">
      <ul className="space-y-3">
        {merchandiserPending.map((m) => (
          <li key={m.name} className="flex items-center gap-3 text-sm">
            <span className="w-14 shrink-0 font-medium">{m.name}</span>
            <span className="bg-muted h-2 flex-1 overflow-hidden rounded-full">
              <span
                className="bg-brand block h-full rounded-full"
                style={{ width: `${(m.count / max) * 100}%` }}
              />
            </span>
            <span className="tnum text-muted-foreground w-6 text-right text-xs">{m.count}</span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
