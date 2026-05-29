"use client";

import Link from "next/link";
import { useState } from "react";
import { NavDropdown } from "./NavDropdown";
import {
  navServiceLinks,
  navDisciplineLinks,
  navCaseTypeLinks,
  navSectorLinks,
  navResourcesLinks,
  mobileNavGroups,
} from "@/data/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="min-w-0 shrink truncate text-base font-bold text-primary sm:text-lg"
          onClick={closeMobile}
        >
          Dispute<span className="text-accent">Forensic</span>
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Main"
        >
          <Link
            href="/"
            className="rounded px-2 py-2 text-sm text-body transition-colors hover:bg-section-alt hover:text-primary"
          >
            Home
          </Link>
          <NavDropdown
            label="Services"
            href="/services"
            items={navServiceLinks}
          />
          <Link
            href="/forensic-disciplines"
            className="rounded px-2 py-2 text-sm text-body transition-colors hover:bg-section-alt hover:text-primary"
          >
            Forensic Disciplines
          </Link>
          <NavDropdown
            label="Disciplines"
            href="/disciplines"
            items={navDisciplineLinks}
          />
          <NavDropdown
            label="Case Types"
            href="/case-types"
            items={navCaseTypeLinks}
          />
          <NavDropdown
            label="Sectors"
            href="/sectors"
            items={navSectorLinks}
          />
          <NavDropdown
            label="Resources"
            href="/guides"
            items={navResourcesLinks}
          />
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center rounded bg-accent px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8] sm:px-4 md:inline-flex"
          >
            Contact Us
          </Link>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-border p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="max-h-[min(85vh,36rem)] overflow-y-auto border-t border-border bg-white lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
            <Link
              href="/"
              className="mb-4 flex min-h-[44px] items-center text-sm font-medium text-body"
              onClick={closeMobile}
            >
              Home
            </Link>
            <div className="grid gap-6 xs:grid-cols-2">
              {mobileNavGroups.map((group) => (
                <div key={group.label} className="min-w-0">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary/60">
                    {group.label}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="flex min-h-[44px] items-center rounded px-2 text-sm text-body hover:bg-section-alt"
                          onClick={closeMobile}
                        >
                          <span className="line-clamp-2">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-4 py-3 font-semibold text-white"
              onClick={closeMobile}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
