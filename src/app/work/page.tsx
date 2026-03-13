import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta } from "@/components/seo/Meta";
import { Schema } from "@/components/seo/Schema";
import { ProjectList } from "@/components/sections/ProjectList";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <div>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-display font-light tracking-[-0.02em] text-accent mb-2">
          Projects
        </h1>
        <p className="text-text-secondary text-sm">
          {work.description}
        </p>
      </div>
      <ProjectList />
    </div>
  );
}
