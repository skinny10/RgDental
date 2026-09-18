import type { SocialLink } from "../../types";
import { SocialIcon } from "../shared/icons";

const socials: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/rg.dentall?stkn=N3o5bXc3cHB2bmd5",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DUFqyA6hn/",
    icon: "facebook",
  },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-canvas-dark py-16 text-paper md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-xl font-semibold">RG Dental</p>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-paper/60">
            Consultorio del Dr. José Ricardo Gómez Gómez, enfocado en un
            trato cercano y tratamientos claros, de principio a fin.
          </p>
          <div className="mt-6 flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-violet hover:text-violet"
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-sm font-medium text-violet">Contacto</p>
          <ul className="mt-4 space-y-2 font-body text-sm text-paper/70">
            <li>
              <a href="tel:+529613307508" className="hover:text-paper">
                +52 961 330 7508
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/529613307508"
                target="_blank"
                rel="noreferrer"
                className="hover:text-paper"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-body text-sm font-medium text-violet">Horario</p>
          <ul className="mt-4 space-y-2 font-body text-sm text-paper/70">
            <li>Lunes a viernes · 9:00–18:00</li>
            <li>Sábados · 9:00–14:00</li>
            <li>Domingos cerrado</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-paper/10 px-6 pt-6 md:px-10">
        <p className="font-body text-xs text-paper/40">
          © {new Date().getFullYear()} RG Dental. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
