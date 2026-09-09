import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-baseline gap-1">
            <span className="font-display text-xl font-semibold tracking-tight">Kms</span>
            <span className="font-display text-xl font-semibold text-primary">And</span>
            <span className="font-display text-xl font-semibold tracking-tight">Miles</span>
          </Link>
          <nav className="flex items-center gap-1 text-sm font-medium">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "rounded-md px-3 py-2 bg-secondary text-foreground" }}
            >
              Home
            </Link>
            <Link
              to="/districts"
              className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 bg-secondary text-foreground" }}
            >
              Districts
            </Link>
            <Link
              to="/destinations"
              className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 bg-secondary text-foreground" }}
            >
              All places
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-16 border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
          <p className="font-display text-base text-foreground">KmsAndMiles</p>
          <p className="mt-1">AI-powered smart tourism platform · Team QIS Innovators</p>
          <p className="mt-1">Smart India Hackathon 2026 · Problem Statement SIH26202 · Travel and Tourism</p>
        </div>
      </footer>
    </div>
  );
}
