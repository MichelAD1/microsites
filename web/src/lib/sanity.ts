import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "co0d911r",
  dataset: "production",
  apiVersion: "2025-09-22",
  useCdn: false,
});
