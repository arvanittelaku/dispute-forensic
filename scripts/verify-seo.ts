/**
 * Verifies public/sitemap.xml and public/robots.txt match buildPublicUrlInventory().
 * Run: npm run seo:verify
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  buildPublicUrlInventory,
  CANONICAL_HOST,
  ROBOTS_DISALLOW_PATHS,
} from "../src/lib/seo/publicUrlInventory";

function parseSitemapLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(xml)) !== null) {
    locs.push(match[1].trim());
  }
  return locs.sort();
}

function verifyRobots(robots: string): string[] {
  const errors: string[] = [];
  const expectedSitemap = `Sitemap: ${CANONICAL_HOST}/sitemap.xml`;

  if (!robots.includes(expectedSitemap)) {
    errors.push(`robots.txt missing line: ${expectedSitemap}`);
  }
  if (!robots.includes("User-agent: *")) {
    errors.push("robots.txt missing User-agent: *");
  }
  if (!robots.includes("Allow: /")) {
    errors.push("robots.txt missing Allow: /");
  }

  for (const path of ROBOTS_DISALLOW_PATHS) {
    if (!robots.includes(`Disallow: ${path}`)) {
      errors.push(`robots.txt missing Disallow: ${path}`);
    }
  }

  return errors;
}

async function main() {
  const publicDir = join(process.cwd(), "public");
  const sitemapPath = join(publicDir, "sitemap.xml");
  const robotsPath = join(publicDir, "robots.txt");

  let xml: string;
  let robots: string;
  try {
    xml = await readFile(sitemapPath, "utf8");
    robots = await readFile(robotsPath, "utf8");
  } catch {
    console.error(
      "Missing public/sitemap.xml or public/robots.txt — run npm run seo:generate first."
    );
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory();
  const expected = [...inventory.allUrls].sort();
  const actual = parseSitemapLocs(xml);

  const missing = expected.filter((url) => !actual.includes(url));
  const extra = actual.filter((url) => !expected.includes(url));
  const robotsErrors = verifyRobots(robots);

  let failed = false;

  if (missing.length > 0) {
    failed = true;
    console.error("URLs in inventory but missing from sitemap.xml:");
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    failed = true;
    console.error("URLs in sitemap.xml but not in inventory:");
    extra.forEach((u) => console.error(`  - ${u}`));
  }
  if (robotsErrors.length > 0) {
    failed = true;
    console.error("robots.txt issues:");
    robotsErrors.forEach((e) => console.error(`  - ${e}`));
  }

  if (failed) {
    process.exit(1);
  }

  console.log(
    `OK: sitemap.xml matches inventory (${actual.length} URLs).`
  );
  console.log(`OK: robots.txt canonical Sitemap and disallow rules.`);
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
