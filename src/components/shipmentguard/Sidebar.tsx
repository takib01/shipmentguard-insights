import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Package,
  AlertTriangle,
  CalendarClock,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const nav = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/orders", label: "Orders", icon: Package },
  { to: "/actions", label: "Critical Actions", icon: AlertTriangle },
  { to: "/ta", label: "T&A", icon: CalendarClock },
  { to: "/reports", label: "Reports", icon: BarChart3 },
] as const;

export function Sidebar() {
  return (
    <aside className="bg-sidebar text-sidebar-foreground sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-sidebar-border md:flex">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-md">
          <ShieldCheck className="size-4.5" />
        </div>
        <div className="leading-tight">
          <div className="text-sidebar-accent-foreground text-sm font-semibold">ShipmentGuard</div>
          <div className="text-sidebar-foreground/60 text-[11px]">Control Tower</div>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5 px-3 py-2">
        {nav.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact: to === "/" }}
            className="text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors"
            activeProps={{
              className:
                "bg-sidebar-accent text-sidebar-accent-foreground font-medium shadow-[inset_2px_0_0_0_var(--sidebar-primary)]",
            }}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-5 py-5">
        <div className="border-sidebar-border rounded-lg border p-3">
          <div className="text-sidebar-foreground/60 text-[11px] uppercase tracking-wide">
            Factory
          </div>
          <div className="text-sidebar-accent-foreground mt-1 text-sm font-medium">
            Meghna Apparels Ltd.
          </div>
          <div className="text-sidebar-foreground/60 text-[11px]">Gazipur, Bangladesh</div>
        </div>
      </div>
    </aside>
  );
}
