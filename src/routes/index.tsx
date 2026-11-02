import { createFileRoute, redirect } from "@tanstack/react-router";

// The DEGEDI site is a single self-contained HTML file in public/degedi.html.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: "/degedi.html" });
  },
  head: () => ({
    meta: [
      { title: "DEGEDI A.C." },
      { name: "description", content: "Grupo de Estudios sobre Derechos, Géneros y Diversidades A.C." },
      { property: "og:title", content: "DEGEDI A.C." },
      { property: "og:description", content: "Grupo de Estudios sobre Derechos, Géneros y Diversidades A.C." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});
