import type { Service } from "../types";

export const services: Service[] = [
  {
    id: "protesis",
    title: "Prótesis",
    description:
      "Prótesis fijas y removibles hechas a la medida para recuperar función y estética en tu boca.",
    icon: "prosthesis",
  },
  {
    id: "limpieza",
    title: "Limpieza dental",
    description:
      "Eliminamos placa y sarro con un protocolo suave, pensado para dejar tu boca sana sin molestias.",
    icon: "cleaning",
  },
  {
    id: "extracciones",
    title: "Extracciones",
    description:
      "Retiro de piezas dañadas o mal posicionadas con anestesia local y un proceso lo más cómodo posible.",
    icon: "extraction",
  },
  {
    id: "ortodoncia",
    title: "Ortodoncia",
    description:
      "Brackets a la medida de tu mordida, con seguimiento cercano durante todo el tratamiento.",
    icon: "braces",
  },
  {
    id: "amalgamas",
    title: "Amalgamas",
    description:
      "Restauraciones resistentes para caries en piezas posteriores, con acabado duradero.",
    icon: "amalgam",
  },
  {
    id: "resinas",
    title: "Resinas",
    description:
      "Restauraciones estéticas del color de tu diente, ideales para piezas visibles al sonreír.",
    icon: "resin",
  },
];
