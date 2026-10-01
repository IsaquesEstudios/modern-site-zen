import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/design-system/cozy-code-library-1062b4";
import { SERVICE_LINKS } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export const QUOTE_ANCHOR = "orcamento";

/** Coluna lateral padrão (20%) das páginas de serviço. */
export function ServiceSidebar({ currentSlug }: { currentSlug?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isPost = BLOG_POSTS.some((p) => p.to === pathname);
  const related = BLOG_POSTS.filter((p) => p.to !== pathname).slice(0, 5);
  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-24">
      <a href={`#${QUOTE_ANCHOR}`} className="block">
        <Button variant="gradient" className="w-full">
          Orçamento agora
        </Button>
      </a>

      <nav aria-label="Serviços" className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">Serviços</p>
        <ul className="flex flex-col divide-y divide-border border-t border-border">
          {SERVICE_LINKS.map((item) => {
            const active = item.slug === currentSlug;
            return (
              <li key={item.slug}>
                <Link
                  to={item.to}
                  className={[
                    "block py-3 text-sm leading-snug transition-colors duration-200",
                    active ? "font-semibold text-primary" : "text-muted hover:text-primary",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="/servicos" className="pt-2 text-sm font-semibold text-accent hover:text-primary">
          Ver todos os serviços
        </Link>
      </nav>

      {isPost && (
        <nav aria-label="Posts referentes" className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Posts referentes
          </p>
          <ul className="flex flex-col divide-y divide-border border-t border-border">
            {related.map((post) => (
              <li key={post.to}>
                <Link
                  to={post.to}
                  className="block py-3 text-sm leading-snug text-muted transition-colors duration-200 hover:text-primary"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/blog" className="pt-2 text-sm font-semibold text-accent hover:text-primary">
            Ver todos os posts
          </Link>
        </nav>
      )}
    </div>
  );
}

/** Grade padrão 80/20 das páginas de serviço. */
export function ServiceGrid({
  currentSlug,
  children,
}: {
  currentSlug?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,1fr)] lg:gap-16">
      <div className="order-2 min-w-0 lg:order-1">{children}</div>
      <aside className="order-1 lg:order-2">
        <ServiceSidebar currentSlug={currentSlug} />
      </aside>
    </div>
  );
}
