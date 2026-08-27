export type Risk = "RED" | "YELLOW" | "GREEN";

export type Order = {
  po: string;
  buyer: string;
  style: string;
  qty: number;
  fob?: number;
  merchandiser: string;
  exFactory: string; // display date e.g. "05 Oct"
  stage: string;
  risk: Risk;
  buffer: number;
  blocker: string;
  confidence: number;
};

export type MilestoneStatus =
  | "Done"
  | "Delayed"
  | "Pending"
  | "Blocked"
  | "Not Started"
  | "At Risk";

export type Milestone = {
  name: string;
  owner: string;
  due: string;
  status: MilestoneStatus;
  critical?: boolean;
};

export type CriticalAction = {
  id: string;
  priority: "CRITICAL" | "HIGH" | "MEDIUM";
  po: string;
  issue: string;
  dept: string;
  deadline: string;
  action: string;
};

export const initialOrders: Order[] = [
  {
    po: "PO-456",
    buyer: "H&M",
    style: "HM-1024",
    qty: 18500,
    fob: 92500,
    merchandiser: "Rahim",
    exFactory: "05 Oct",
    stage: "Cutting (Blocked)",
    risk: "RED",
    buffer: 3,
    blocker: "Fabric delayed",
    confidence: 54,
  },
  {
    po: "PO-231",
    buyer: "Zara",
    style: "ZR-804",
    qty: 12000,
    fob: 68400,
    merchandiser: "Nusrat",
    exFactory: "12 Oct",
    stage: "Trims receiving",
    risk: "YELLOW",
    buffer: 6,
    blocker: "Trims incomplete",
    confidence: 72,
  },
  {
    po: "PO-117",
    buyer: "C&A",
    style: "CA-441",
    qty: 22400,
    fob: 110800,
    merchandiser: "Fahim",
    exFactory: "18 Oct",
    stage: "Sewing",
    risk: "GREEN",
    buffer: 11,
    blocker: "None",
    confidence: 94,
  },
  {
    po: "PO-672",
    buyer: "M&S",
    style: "MS-2210",
    qty: 15200,
    fob: 84300,
    merchandiser: "Rahim",
    exFactory: "08 Oct",
    stage: "Sewing",
    risk: "RED",
    buffer: 2,
    blocker: "Sewing behind target",
    confidence: 48,
  },
  {
    po: "PO-901",
    buyer: "M&S",
    style: "MS-3308",
    qty: 9800,
    fob: 51200,
    merchandiser: "Tania",
    exFactory: "10 Oct",
    stage: "Finishing",
    risk: "RED",
    buffer: 4,
    blocker: "Inspection not booked",
    confidence: 61,
  },
  {
    po: "PO-782",
    buyer: "H&M",
    style: "HM-1188",
    qty: 26500,
    fob: 132000,
    merchandiser: "Nusrat",
    exFactory: "22 Oct",
    stage: "Pre-production",
    risk: "YELLOW",
    buffer: 7,
    blocker: "PP approval pending",
    confidence: 70,
  },
  {
    po: "PO-334",
    buyer: "Primark",
    style: "PR-556",
    qty: 31000,
    fob: 121500,
    merchandiser: "Fahim",
    exFactory: "26 Oct",
    stage: "Cutting",
    risk: "GREEN",
    buffer: 14,
    blocker: "None",
    confidence: 92,
  },
  {
    po: "PO-208",
    buyer: "Zara",
    style: "ZR-912",
    qty: 8600,
    fob: 47300,
    merchandiser: "Tania",
    exFactory: "15 Oct",
    stage: "Sewing",
    risk: "GREEN",
    buffer: 9,
    blocker: "None",
    confidence: 89,
  },
  {
    po: "PO-540",
    buyer: "C&A",
    style: "CA-770",
    qty: 17400,
    fob: 79800,
    merchandiser: "Rahim",
    exFactory: "29 Oct",
    stage: "Fabric in-house",
    risk: "YELLOW",
    buffer: 8,
    blocker: "Shade approval pending",
    confidence: 76,
  },
  {
    po: "PO-615",
    buyer: "H&M",
    style: "HM-1290",
    qty: 20200,
    fob: 96400,
    merchandiser: "Nusrat",
    exFactory: "02 Nov",
    stage: "Fabric booking",
    risk: "GREEN",
    buffer: 16,
    blocker: "None",
    confidence: 95,
  },
  {
    po: "PO-873",
    buyer: "Primark",
    style: "PR-611",
    qty: 13800,
    fob: 58900,
    merchandiser: "Fahim",
    exFactory: "06 Nov",
    stage: "Sampling",
    risk: "GREEN",
    buffer: 18,
    blocker: "None",
    confidence: 96,
  },
  {
    po: "PO-490",
    buyer: "M&S",
    style: "MS-4102",
    qty: 11500,
    fob: 62700,
    merchandiser: "Tania",
    exFactory: "20 Oct",
    stage: "Finishing",
    risk: "YELLOW",
    buffer: 5,
    blocker: "Packing accessories short",
    confidence: 74,
  },
];

export const sampleImportOrders: Order[] = [
  {
    po: "PO-1201",
    buyer: "Next",
    style: "NX-220",
    qty: 14300,
    fob: 71500,
    merchandiser: "Rahim",
    exFactory: "11 Nov",
    stage: "Fabric booking",
    risk: "GREEN",
    buffer: 15,
    blocker: "None",
    confidence: 93,
  },
  {
    po: "PO-1202",
    buyer: "Next",
    style: "NX-224",
    qty: 9700,
    fob: 44100,
    merchandiser: "Tania",
    exFactory: "14 Nov",
    stage: "Sampling",
    risk: "YELLOW",
    buffer: 6,
    blocker: "Lab dip pending",
    confidence: 78,
  },
  {
    po: "PO-1203",
    buyer: "Lidl",
    style: "LD-108",
    qty: 24800,
    fob: 108900,
    merchandiser: "Fahim",
    exFactory: "19 Nov",
    stage: "PO received",
    risk: "GREEN",
    buffer: 20,
    blocker: "None",
    confidence: 97,
  },
];

export const milestonesByPO: Record<string, Milestone[]> = {
  "PO-456": [
    { name: "PO Received", owner: "Merchandising", due: "02 Sep", status: "Done" },
    { name: "Fabric Booking", owner: "Procurement", due: "04 Sep", status: "Done" },
    { name: "PP Sample Approved", owner: "QA / Merchandising", due: "10 Sep", status: "Done" },
    { name: "Fabric In-House", owner: "Store", due: "12 Sep", status: "Delayed", critical: true },
    { name: "Trims Complete", owner: "Store", due: "14 Sep", status: "Pending" },
    { name: "Cutting Start", owner: "Production", due: "16 Sep", status: "Blocked", critical: true },
    { name: "Sewing Start", owner: "Production", due: "18 Sep", status: "Blocked", critical: true },
    { name: "Final Inspection", owner: "QA", due: "02 Oct", status: "Not Started", critical: true },
    { name: "Ex-Factory", owner: "Commercial", due: "05 Oct", status: "At Risk", critical: true },
  ],
};

export const defaultMilestones: Milestone[] = [
  { name: "PO Received", owner: "Merchandising", due: "—", status: "Done" },
  { name: "Fabric Booking", owner: "Procurement", due: "—", status: "Done" },
  { name: "PP Sample Approved", owner: "QA / Merchandising", due: "—", status: "Pending" },
  { name: "Fabric In-House", owner: "Store", due: "—", status: "Pending", critical: true },
  { name: "Cutting Start", owner: "Production", due: "—", status: "Not Started", critical: true },
  { name: "Sewing Start", owner: "Production", due: "—", status: "Not Started", critical: true },
  { name: "Final Inspection", owner: "QA", due: "—", status: "Not Started", critical: true },
  { name: "Ex-Factory", owner: "Commercial", due: "—", status: "Not Started", critical: true },
];

export const riskReasons: Record<string, string> = {
  "PO-456":
    "Fabric was expected in-house on 12 September but has not been fully received. Cutting must begin by 16 September to maintain the planned shipment date. Only 3 days of recovery buffer remain.",
  "PO-672":
    "Sewing output is running 18% below the daily target since 11 September. At the current rate finishing will start 4 days late, leaving only 2 days of buffer before ex-factory.",
  "PO-901":
    "Final inspection has not been booked with the buyer QA team. Booking lead time is 7 days, which consumes almost the entire remaining buffer of 4 days.",
};

export const recommendedActions: Record<string, { dept: string; text: string }[]> = {
  "PO-456": [
    { dept: "Procurement", text: "Confirm revised fabric arrival time" },
    { dept: "Planning", text: "Reserve alternative cutting capacity" },
    { dept: "Merchandising", text: "Escalate delay and prepare recovery plan" },
    { dept: "Management", text: "Review if air shipment exposure is increasing" },
  ],
};

export const criticalActions: CriticalAction[] = [
  {
    id: "a1",
    priority: "CRITICAL",
    po: "PO-456",
    issue: "Fabric not received",
    dept: "Procurement",
    deadline: "Today",
    action: "Confirm fabric ETA",
  },
  {
    id: "a2",
    priority: "CRITICAL",
    po: "PO-672",
    issue: "Sewing 18% behind daily target",
    dept: "Production",
    deadline: "Today",
    action: "Add overtime line & re-balance",
  },
  {
    id: "a3",
    priority: "HIGH",
    po: "PO-231",
    issue: "Trims only 80% received",
    dept: "Procurement",
    deadline: "Today",
    action: "Complete remaining trims",
  },
  {
    id: "a4",
    priority: "HIGH",
    po: "PO-782",
    issue: "PP approval pending",
    dept: "Merchandising",
    deadline: "Tomorrow",
    action: "Escalate buyer approval",
  },
  {
    id: "a5",
    priority: "CRITICAL",
    po: "PO-901",
    issue: "Final inspection not booked",
    dept: "QA",
    deadline: "Today",
    action: "Book buyer inspection slot",
  },
  {
    id: "a6",
    priority: "HIGH",
    po: "PO-456",
    issue: "Cutting capacity not reserved",
    dept: "Production",
    deadline: "Today",
    action: "Reserve alternative cutting table",
  },
  {
    id: "a7",
    priority: "MEDIUM",
    po: "PO-540",
    issue: "Shade approval pending with buyer",
    dept: "Merchandising",
    deadline: "Tomorrow",
    action: "Follow up shade band approval",
  },
  {
    id: "a8",
    priority: "HIGH",
    po: "PO-490",
    issue: "Packing accessories short by 12%",
    dept: "Procurement",
    deadline: "Today",
    action: "Chase accessory supplier delivery",
  },
  {
    id: "a9",
    priority: "MEDIUM",
    po: "PO-672",
    issue: "Booking not opened with forwarder",
    dept: "Commercial",
    deadline: "Tomorrow",
    action: "Open shipment booking",
  },
  {
    id: "a10",
    priority: "HIGH",
    po: "PO-231",
    issue: "Inline QA defect rate at 5.4%",
    dept: "QA",
    deadline: "Today",
    action: "Run root-cause on sewing line 4",
  },
];

export const buyerRisk = [
  { buyer: "H&M", atRisk: 2 },
  { buyer: "Zara", atRisk: 1 },
  { buyer: "C&A", atRisk: 0 },
  { buyer: "M&S", atRisk: 2 },
];

export const delayCauses = [
  { cause: "Fabric", pct: 40 },
  { cause: "Trims", pct: 25 },
  { cause: "Buyer Approval", pct: 15 },
  { cause: "Production", pct: 12 },
  { cause: "Inspection", pct: 8 },
];

export const merchandiserPending = [
  { name: "Rahim", count: 4 },
  { name: "Nusrat", count: 3 },
  { name: "Fahim", count: 2 },
  { name: "Tania", count: 1 },
];
