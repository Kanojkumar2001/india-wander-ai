import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  const linkClass =
    "rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground";
  const activeClass = { className: "rounded-md px-3 py-2 bg-secondary text-foreground" };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="print-hide sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
          <Link to="/" className="flex items-baseline gap-1">
            <span className="font-display text-xl font-semibold tracking-tight">My</span>
            <span className="font-display text-xl font-semibold text-primary">Bags</span>
            <span className="font-display text-xl font-semibold tracking-tight">Journey</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm font-medium">
            <Link to="/" className={linkClass} activeOptions={{ exact: true }} activeProps={activeClass}>
              Home
            </Link>
            <Link to="/districts" className={linkClass} activeProps={activeClass}>
              Districts
            </Link>
            <Link to="/destinations" className={linkClass} activeProps={activeClass}>
              All places
            </Link>
            <Link to="/trip-planner" className={linkClass} activeProps={activeClass}>
              Trip planning
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="print-hide mt-16 border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <p className="font-display text-base text-foreground">My Bags Journey</p>
          <p className="mt-1">AI-powered smart tourism platform · Team QIS Innovators</p>
        </div>
      </footer>
    </div>
  );
}
