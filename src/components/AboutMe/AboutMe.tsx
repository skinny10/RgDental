import AboutPortrait from "./AboutPortrait";
import { ArcDivider } from "../shared/icons";

const credentials = [
  "Cirujano dentista",
  "5 años de experiencia clínica",
  "Atención personalizada en cada consulta",
  "Seguimiento cercano durante todo el tratamiento",
];

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="bg-canvas py-20 transition-colors dark:bg-canvas-dark md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16 md:px-10">
        <div className="w-full max-w-sm md:w-1/2 md:max-w-none">
          <div className="mx-auto w-full max-w-md">
            <AboutPortrait />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Dr. José Ricardo Gómez Gómez
          </h2>
          <ArcDivider className="mt-3 h-4 w-24 text-violet" />
          <p className="mt-5 max-w-prose font-body leading-relaxed text-ink/70 dark:text-paper/70">
            Con 5 años de experiencia, mi trabajo es explicarte cada paso de
            tu tratamiento con claridad y acompañarte hasta que te sientas
            cómodo con tu sonrisa, no solo satisfecho con el resultado.
          </p>

          <ul className="mt-7 space-y-3">
            {credentials.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-body text-sm text-ink/80 dark:text-paper/80"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo to-pink" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
