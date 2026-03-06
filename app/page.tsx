import Link from "next/link";
import { siteContent } from "@/data/content";

export default function HomePage() {
  const { home } = siteContent;
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">{home.headline}</h1>
      <p className="text-xl text-slate-600 mb-8">{home.subheadline}</p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link
          href="/projects"
          className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
