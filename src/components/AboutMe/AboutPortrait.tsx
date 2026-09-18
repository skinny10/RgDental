import presentacion from "../../assets/presentacion.jpeg";

export default function AboutPortrait() {
  return (
    <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl border border-line bg-surface shadow-xl shadow-ink/5 dark:border-line-dark dark:bg-surface-dark">
      <img
        src={presentacion}
        alt="Presentación del doctor en consulta"
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}