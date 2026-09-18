export interface Service {
  id: string;
  title: string;
  description: string;
  icon:
    | "prosthesis"
    | "cleaning"
    | "extraction"
    | "braces"
    | "amalgam"
    | "resin";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "facebook";
}
