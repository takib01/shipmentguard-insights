import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { initialOrders, sampleImportOrders, type Order } from "@/data/mock";

type Ctx = {
  orders: Order[];
  addOrder: (o: Order) => void;
  importSample: () => number;
  selectedPO: string | null;
  openOrder: (po: string) => void;
  closeOrder: () => void;
};

const OrdersContext = createContext<Ctx | null>(null);

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [selectedPO, setSelectedPO] = useState<string | null>(null);

  const value = useMemo<Ctx>(
    () => ({
      orders,
      addOrder: (o) => setOrders((prev) => [o, ...prev]),
      importSample: () => {
        let added = 0;
        setOrders((prev) => {
          const fresh = sampleImportOrders.filter((s) => !prev.some((p) => p.po === s.po));
          added = fresh.length;
          return [...fresh, ...prev];
        });
        return sampleImportOrders.length;
      },
      selectedPO,
      openOrder: setSelectedPO,
      closeOrder: () => setSelectedPO(null),
    }),
    [orders, selectedPO],
  );

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used inside OrdersProvider");
  return ctx;
}
