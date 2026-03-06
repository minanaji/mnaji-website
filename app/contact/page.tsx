import { siteContent } from "@/data/content";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const { contact } = siteContent;
  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{contact.title}</h1>
      <p className="text-slate-600 mb-8">{contact.description}</p>
      <div className="space-y-4">
        <p>
          <span className="font-medium text-slate-700">Email:</span>{" "}
          <a
            href={`mailto:${contact.email}`}
            className="text-slate-900 hover:underline"
          >
            {contact.email}
          </a>
        </p>
        <div>
          <span className="font-medium text-slate-700 block mb-2">Links:</span>
          <ul className="flex gap-4">
            {contact.links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
