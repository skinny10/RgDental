import doctor2 from "../../assets/doctor2.jpeg";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-canvas dark:bg-canvas-dark">
      <img
        src={doctor2}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* tinte de fondo para legibilidad del texto */}
      <div className="absolute inset-0 bg-canvas/55 dark:bg-canvas-dark/60" />

      {/* glow principal */}
      <div className="absolute left-1/2 top-[-10%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-indigo/20 blur-[120px] dark:bg-indigo/40" />
      {/* glow secundario, violeta */}
      <div className="absolute left-1/2 top-[10%] h-[420px] w-[420px] -translate-x-[70%] rounded-full bg-violet/20 blur-[100px] dark:bg-violet/30" />
      {/* glow rosa, esquina */}
      <div className="absolute right-[5%] top-[25%] h-[380px] w-[380px] rounded-full bg-pink/10 blur-[110px] dark:bg-pink/25" />

      {/* viñeta para enmarcar el texto */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_45%,rgba(255,255,255,0.6)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,rgba(7,7,12,0.85)_100%)]" />

      {/* grano sutil */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035] dark:opacity-[0.06]" aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
