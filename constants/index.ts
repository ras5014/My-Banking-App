import {
  House,
  CircleDollarSign,
  NotebookTabs,
  Landmark,
  CreditCard,
} from "lucide-react";

export const navItems = [
  {
    title: "Home",
    url: "/",
    icon: House,
  },
  {
    title: "My Banks",
    url: "/my-banks",
    icon: Landmark,
  },
  {
    title: "Transaction History",
    url: "/transaction-history",
    icon: NotebookTabs,
  },
  {
    title: "Payment Transfer",
    url: "/payment-transfer",
    icon: CircleDollarSign,
  },
  {
    title: "Connect Bank",
    url: "/connect-bank",
    icon: CreditCard,
  },
];
