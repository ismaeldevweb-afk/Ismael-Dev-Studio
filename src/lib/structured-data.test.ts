import { describe, expect, it } from "vitest";
import {
  createFaqJsonLd,
  createProfessionalServiceJsonLd,
  createWebSiteJsonLd,
} from "@/lib/structured-data";
import { siteTitle, siteUrl } from "@/config/site";

describe("structured data", () => {
  it("creates ProfessionalService schema with core business identity", () => {
    const schema = createProfessionalServiceJsonLd();

    expect(schema["@type"]).toBe("ProfessionalService");
    expect(schema.name).toBe(siteTitle);
    expect(schema.url).toBe(siteUrl);
    expect(schema.serviceType).toContain("Landing Pages");
    expect(schema.makesOffer).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "@type": "Offer",
          name: "Profissional",
          priceCurrency: "BRL",
        }),
      ])
    );
  });

  it("creates WebSite schema with canonical site URL", () => {
    const schema = createWebSiteJsonLd();

    expect(schema["@type"]).toBe("WebSite");
    expect(schema.name).toBe(siteTitle);
    expect(schema.url).toBe(siteUrl);
  });

  it("creates FAQPage schema with visible questions", () => {
    const schema = createFaqJsonLd();

    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity.length).toBeGreaterThan(0);
    expect(schema.mainEntity[0]).toEqual(
      expect.objectContaining({
        "@type": "Question",
        acceptedAnswer: expect.objectContaining({
          "@type": "Answer",
        }),
      })
    );
  });
});
