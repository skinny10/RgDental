import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="servicios" className="bg-surface py-20 transition-colors dark:bg-surface-dark/40 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-prose">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Servicios
          </h2>
          <p className="mt-4 font-body leading-relaxed text-ink/70 dark:text-paper/70">
            Tratamientos pensados para cada etapa de tu salud dental, desde
            el cuidado preventivo hasta soluciones más completas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
