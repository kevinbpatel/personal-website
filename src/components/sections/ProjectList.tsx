import { getPosts } from "@/app/utils/utils";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
  range?: [number, number?];
}

export function ProjectList({ range }: ProjectListProps) {
  let projects = getPosts(["src", "app", "work", "projects"]).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  if (range) {
    const [start, end] = range;
    projects = end ? projects.slice(start - 1, end) : projects.slice(start - 1);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.metadata.title}
          summary={project.metadata.summary}
          slug={project.slug}
          image={project.metadata.images[0]}
          date={project.metadata.publishedAt}
        />
      ))}
    </div>
  );
}
