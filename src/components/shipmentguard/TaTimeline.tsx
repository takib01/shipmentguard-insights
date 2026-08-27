import { cn } from "@/lib/utils";
import type { Milestone, MilestoneStatus } from "@/data/mock";
import { Check, AlertTriangle, Ban, Clock, Circle, Ship } from "lucide-react";

const statusStyle: Record<
  MilestoneStatus,
  { dot: string; text: string; icon: React.ComponentType<{ className?: string }> }
> = {
  Done: { dot: "bg-risk-green text-white", text: "text-risk-green bg-risk-green-soft", icon: Check },
  Delayed: {
    dot: "bg-risk-red text-white",
    text: "text-risk-red bg-risk-red-soft",
    icon: AlertTriangle,
  },
  Pending: {
    dot: "bg-risk-amber text-white",
    text: "text-risk-amber bg-risk-amber-soft",
    icon: Clock,
  },
  Blocked: { dot: "bg-risk-red text-white", text: "text-risk-red bg-risk-red-soft", icon: Ban },
  "Not Started": {
    dot: "bg-muted text-muted-foreground",
    text: "text-muted-foreground bg-muted",
    icon: Circle,
  },
  "At Risk": {
    dot: "bg-risk-red text-white",
    text: "text-risk-red bg-risk-red-soft",
    icon: Ship,
  },
};

export function TaTimeline({ milestones }: { milestones: Milestone[] }) {
  const firstBreakIdx = milestones.findIndex(
    (m) => m.status === "Delayed" || m.status === "Blocked",
  );

  return (
    <div className="relative">
      <div className="bg-border absolute top-0 bottom-0 left-[13px] w-px" />
      <ul className="space-y-1">
        {milestones.map((m, i) => {
          const s = statusStyle[m.status];
          const Icon = s.icon;
          const impacted = firstBreakIdx >= 0 && i > firstBreakIdx && m.critical;
          return (
            <li key={m.name} className="relative flex gap-3">
              <span
                className={cn(
                  "relative z-10 mt-2 flex size-7 shrink-0 items-center justify-center rounded-full ring-4 ring-card",
                  s.dot,
                )}
              >
                <Icon className="size-3.5" />
              </span>
              <div
                className={cn(
                  "mb-1 flex flex-1 flex-wrap items-center justify-between gap-2 rounded-md border px-3 py-2",
                  m.critical ? "border-border bg-muted/40" : "border-transparent",
                  impacted && "border-risk-red/25 bg-risk-red-soft/50",
                )}
              >
                <div className="min-w-0">
                  <div className="text-foreground flex items-center gap-2 text-sm font-medium">
                    {m.name}
                    {m.critical && (
                      <span className="text-muted-foreground border-border rounded border px-1 text-[10px] tracking-wide uppercase">
                        Critical path
                      </span>
                    )}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {m.owner} · Due {m.due}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {impacted && (
                    <span className="text-risk-red text-[11px] font-medium">
                      Impacted by upstream delay
                    </span>
                  )}
                  <span
                    className={cn("rounded-full px-2 py-0.5 text-xs font-medium", s.text)}
                  >
                    {m.status}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function DependencyChain() {
  const chain = [
    { label: "Fabric In-House", tone: "red" },
    { label: "Cutting", tone: "red" },
    { label: "Sewing", tone: "red" },
    { label: "Inspection", tone: "amber" },
    { label: "Shipment", tone: "red" },
  ] as const;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {chain.map((c, i) => (
        <div key={c.label} className="flex items-center gap-1.5">
          <span
            className={cn(
              "rounded-md border px-2.5 py-1 text-xs font-medium",
              c.tone === "red"
                ? "border-risk-red/30 bg-risk-red-soft text-risk-red"
                : "border-risk-amber/30 bg-risk-amber-soft text-risk-amber",
            )}
          >
            {c.label}
          </span>
          {i < chain.length - 1 && <span className="text-muted-foreground text-xs">→</span>}
        </div>
      ))}
    </div>
  );
}
