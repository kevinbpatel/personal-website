import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import { Meta } from "@/components/seo/Meta";
import { Schema } from "@/components/seo/Schema";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <div>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`${baseURL}/og?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-display font-light tracking-[-0.02em] text-accent mb-2">
          Gallery
        </h1>
      </div>
      <GalleryGrid />
    </div>
  );
}
