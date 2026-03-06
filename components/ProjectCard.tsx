import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export function ProjectCard({ title, description, href, tags }: ProjectCardProps) {
  return (
    <article className="p-6 border border-slate-200 rounded-lg bg-white hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-slate-100 rounded text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={href}
        className="text-slate-900 font-medium hover:underline"
      >
        View project →
      </Link>
    </article>
  );
}
