import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// The DEGEDI site is a single static HTML file; the rules below come from the
// organization itself, so they are checked on the source of truth.
const html = readFileSync(join(process.cwd(), "public", "degedi.html"), "utf8");

describe("DEGEDI site content rules", () => {
  it("never mentions a cost in the workshops wording", () => {
    expect(html).not.toMatch(/cotiz/i);
    expect(html).not.toMatch(/\bprecio\b/i);
    expect(html).not.toMatch(/presupuesto/i);
  });

  it("asks to schedule a workshop instead of quoting one", () => {
    expect(html).toContain(">Agendar un taller</a>");
    expect(html).toContain(">Escribir para agendar un taller</a>");
    expect(html).toContain("<h3>Talleres y otros asuntos</h3>");
    expect(html.match(/subject=Informaci%C3%B3n%20de%20taller/g)).toHaveLength(4);
  });

  it("carries an image in every text-only section", () => {
    for (const id of ["portada", "beleguí", "talleres", "quienes", "mision", "proyectos"]) {
      const section = html.match(new RegExp(`<section[^>]*id="${id}"[\\s\\S]*?</section>`))?.[0];
      expect(section, `section ${id} is missing`).toBeDefined();
      expect(section).toContain("<img");
    }
  });
});
