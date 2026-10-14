"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { business, navigation } from "@/lib/data";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          aria-label={`${business.name} — início`}
          onClick={() => setOpen(false)}
        >
          <Scissors aria-hidden="true" />
          <span>
            Ateliê <em>Nice</em>
            <small>COSTURA COM CUIDADO</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          className={open ? "nav open" : "nav"}
          aria-label="Navegação principal"
        >
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={
                path.replace(/\/$/, "") === n.href.replace(/\/$/, "")
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <Link
            className="button small"
            href="/orcamento/"
            onClick={() => setOpen(false)}
          >
            Solicitar orçamento
          </Link>
        </nav>
      </div>
    </header>
  );
}
