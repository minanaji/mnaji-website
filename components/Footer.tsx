import { siteContent } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 px-6 mt-auto">
      <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
        {siteContent.footer.copyright}
      </div>
    </footer>
  );
}
