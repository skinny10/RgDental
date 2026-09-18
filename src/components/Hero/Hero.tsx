import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 text-center"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-2xl pt-16">
        <span className="inline-flex items-center rounded-full border border-ink/15 px-4 py-1.5 font-body text-xs text-ink/70 dark:border-paper/20 dark:text-paper/70">
          Citas disponibles esta semana
        </span>

        <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl md:text-6xl">
          Tu sonrisa, en{" "}
          <span className="bg-gradient-to-r from-indigo via-violet to-pink bg-clip-text text-transparent">
            buenas manos
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-md font-body text-base text-ink/70 dark:text-paper/70 sm:text-lg">
          Tratamientos claros y cercanos, cuidando cada detalle de principio
          a fin.
        </p>

        <div className="mt-9">
          <a
            href="#contacto"
            className="inline-block rounded-full bg-ink px-8 py-3.5 font-body text-sm font-medium text-paper shadow-lg shadow-ink/10 transition-transform hover:scale-[1.03] dark:bg-paper dark:text-ink dark:shadow-black/40"
          >
            Agendar cita
          </a>
        </div>
      </div>
    </section>
  );
}
