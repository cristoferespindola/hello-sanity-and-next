import { createClient, groq } from "next-sanity";
import { Testimonial } from "@/types/Testimonial";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

export async function getTestimonial(): Promise<Testimonial[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "testimonial"]{
      _id,
      _createdAt,
      name,
      url,
    }`
  );
}

export async function getProject(slug: string): Promise<Testimonial> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "testimonial" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      url
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
