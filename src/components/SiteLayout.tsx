import { Link, Outlet } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/design-system/cozy-code-library-1062b4";
import { NAV } from "@/lib/site";
import logo from "@/assets/vidagua-logo.png.asset.json";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 shadow-system backdrop-blur-md"
          : "border-transparent bg-background/60 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="Vid'Água — Soluções para Água">
          <img
            src={logo.url}
            alt="Vid'Água — Soluções para Água"
            className="h-10 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
              activeProps={{ className: "text-sm font-medium text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contato">
            <Button variant="gradient" size="sm">
              Solicitar orçamento
            </Button>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-primary md:hidden"
        >
          <span className="block h-px w-6 bg-primary" />
          <span className="mt-1.5 block h-px w-6 bg-primary" />
          <span className="mt-1.5 block h-px w-6 bg-primary" />
        </button>
      </div>

      <div
        className={[
          "overflow-hidden border-border transition-all duration-300 md:hidden",
          open ? "max-h-96 border-t" : "max-h-0",
        ].join(" ")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted">{title}</p>
      {children}
    </div>
  );
}

const footerLink =
  "text-sm text-muted transition-colors duration-200 hover:text-primary";

function Footer() {
  return (
    <footer className="border-t border-border bg-surface-soft">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <img
            src={logo.url}
            alt="Vid'Água — Soluções para Água"
            className="h-10 w-auto self-start"
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Análise, tratamento e legalização de poços há mais de 30 anos. Atendemos em todo o
            Brasil.
          </p>
        </div>

        <FooterColumn title="Serviços">
          <Link to="/servicos/analise-de-agua" className={footerLink}>
            Análise de Água
          </Link>
          <Link to="/servicos/tratamento-de-agua" className={footerLink}>
            Tratamento de Água
          </Link>
          <Link to="/servicos/legalizacao-poco-artesiano" className={footerLink}>
            Legalização de Poço
          </Link>
          <Link to="/servicos/monitoramento-qualidade-agua" className={footerLink}>
            Monitoramento
          </Link>
          <Link to="/servicos" className={footerLink}>
            Ver todos
          </Link>
        </FooterColumn>

        <FooterColumn title="Produtos">
          <Link to="/produtos/filtros-de-agua" className={footerLink}>
            Filtros de Água
          </Link>
          <Link to="/produtos/abrandador-de-agua" className={footerLink}>
            Abrandador de Água
          </Link>
          <Link to="/produtos/bomba-dosadora-cloro" className={footerLink}>
            Bomba Dosadora de Cloro
          </Link>
          <Link to="/produtos" className={footerLink}>
            Ver todos
          </Link>
        </FooterColumn>

        <FooterColumn title="Empresa">
          <Link to="/sobre" className={footerLink}>
            Sobre Nós
          </Link>
          <Link to="/por-que-vidagua" className={footerLink}>
            Por que Vid&rsquo;Água
          </Link>
          <Link to="/blog" className={footerLink}>
            Blog
          </Link>
          <Link to="/contato" className={footerLink}>
            Contato
          </Link>
        </FooterColumn>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted">
          © {new Date().getFullYear()} Vid&rsquo;Água — Soluções em Análise e Tratamento de Água.
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
