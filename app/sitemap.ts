import type { MetadataRoute } from "next";
import { courses } from "./courses";
import { siteOrigin } from "./site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{url: siteOrigin, priority: 1}, ...courses.map(({slug}) => ({url: siteOrigin+"/"+slug, priority: .9}))];
}
