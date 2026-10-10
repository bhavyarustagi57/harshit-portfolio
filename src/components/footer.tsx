import { ArrowUp } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {portfolio.personal.name}</span>
      <a href="#home">Back to top <ArrowUp size={14} /></a>
    </footer>
  );
}
