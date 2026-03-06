import { siteContent } from "@/data/content";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  const { about } = siteContent;
  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{about.title}</h1>
      <p className="text-slate-600 mb-8 leading-relaxed">{about.bio}</p>
      <ul className="space-y-2">
        {about.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-slate-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
