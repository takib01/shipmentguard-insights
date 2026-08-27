import { cn } from "@/lib/utils";
import type { Risk } from "@/data/mock";

const map: Record<Risk, { label: string; cls: string }> = {
  RED: {
    label: "Shipment Risk",
    cls: "bg-risk-red-soft text-risk-red border-risk-red/30",
  },
  YELLOW: {
    label: "Attention",
    cls: "bg-risk-amber-soft text-risk-amber border-risk-amber/30",
  },
  GREEN: {
    label: "On Track",
    cls: "bg-risk-green-soft text-risk-green border-risk-green/30",
  },
};

export function RiskBadge({ risk, className }: { risk: Risk; className?: string }) {
  const m = map[risk];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap",
        m.cls,
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {m.label}
    </span>
  );
}

export function BufferPill({ days }: { days: number }) {
  const tone =
    days <= 3
      ? "text-risk-red bg-risk-red-soft"
      : days <= 7
        ? "text-risk-amber bg-risk-amber-soft"
        : "text-risk-green bg-risk-green-soft";
  return (
    <span className={cn("tnum rounded-md px-2 py-0.5 text-xs font-semibold", tone)}>
      {days} d
    </span>
  );
}
