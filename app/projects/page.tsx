import { siteContent } from "@/data/content";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const { projects } = siteContent;
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            href={project.href}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
