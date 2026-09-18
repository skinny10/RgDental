import { useState } from "react";
import type { NavLink } from "../../types";
import { useTheme } from "../../hooks/useTheme";
import { MoonIcon, SunIcon } from "../shared/icons";

const links: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-canvas/80 backdrop-blur-md transition-colors dark:border-line-dark/60 dark:bg-canvas-dark/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#inicio" className="font-display text-xl font-semibold">
          RG Dental
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-ink/70 transition-colors hover:text-ink dark:text-paper/70 dark:hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink/70 transition-colors hover:text-ink dark:border-line-dark dark:text-paper/70 dark:hover:text-paper"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#contacto"
            className="rounded-full bg-ink px-5 py-2.5 font-body text-sm font-medium text-paper transition-opacity hover:opacity-85 dark:bg-paper dark:text-ink"
          >
            Agendar cita
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink/70 dark:border-line-dark dark:text-paper/70"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-0.5 w-6 bg-ink transition-transform dark:bg-paper ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-opacity dark:bg-paper ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-ink transition-transform dark:bg-paper ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-canvas px-6 py-4 dark:border-line-dark dark:bg-canvas-dark md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-base text-ink/80 dark:text-paper/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 inline-block rounded-full bg-ink px-5 py-2.5 font-body text-sm font-medium text-paper dark:bg-paper dark:text-ink"
              >
                Agendar cita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
