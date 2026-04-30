import { describe, expect, it } from "vitest";
import {
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
  });

  it("creates WebSite schema with canonical site URL", () => {
    const schema = createWebSiteJsonLd();

    expect(schema["@type"]).toBe("WebSite");
    expect(schema.name).toBe(siteTitle);
    expect(schema.url).toBe(siteUrl);
  });
});
