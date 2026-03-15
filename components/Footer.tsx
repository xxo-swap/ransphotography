import { SITE_IDENTITY } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="py-20 px-10 border-t border-white/5 flex flex-col items-center">
      <h4 className="font-display italic text-4xl text-white/20 mb-8 tracking-tighter">Capturing the soul of your story.</h4>
      <p className="font-body text-[10px] tracking-[0.5em] text-white/40 uppercase">© 2026 {SITE_IDENTITY.name}</p>
    </footer>
  );
}