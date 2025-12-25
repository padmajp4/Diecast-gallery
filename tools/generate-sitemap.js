import fs from "fs";

const SITE = "https://www.diecast.padmajp.com";

const cars = JSON.parse(fs.readFileSync("data/cars.json", "utf8"));

let urls = [
  "/",
  "/?view=all",
  "/?view=brands"
];

for (const car of cars) {
  if (!car.name) continue;
  const slug = encodeURIComponent(car.name.trim());
  urls.push(`/?car=${slug}`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `
  <url>
    <loc>${SITE}${u}</loc>
    <priority>${u.includes("?car=") ? "0.6" : "0.9"}</priority>
  </url>
`).join("")}
</urlset>`;

fs.writeFileSync("sitemap.xml", xml);
console.log("✓ sitemap.xml updated");
