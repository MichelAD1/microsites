import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";
export const urlFor = (src: any) =>
  imageUrlBuilder(client).image(src).auto("format");
