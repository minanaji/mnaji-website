import Link from "next/link";
import { siteContent } from "@/data/content";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  const { resume } = siteContent;
  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{resume.title}</h1>
      <p className="text-slate-600 mb-8">{resume.summary}</p>
      <Link
        href={resume.downloadUrl}
        className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
      >
        Download Resume
      </Link>
    </section>
  );
}
