import type { Service } from "../../types";
import { ServiceIcon } from "../shared/icons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-violet/50 dark:border-line-dark dark:bg-surface-dark dark:hover:border-violet/50">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo/15 to-pink/15 text-indigo dark:text-violet">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="font-display text-lg font-semibold">{service.title}</h3>
      <p className="font-body text-sm leading-relaxed text-ink/65 dark:text-paper/65">
        {service.description}
      </p>
    </article>
  );
}
