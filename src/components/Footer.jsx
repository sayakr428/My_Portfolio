export default function Footer() {
  return (
    <footer className="section py-10 text-white/60 text-sm">
      <div className="border-t border-white/10 pt-6 flex items-center justify-between">
        <div>© {new Date().getFullYear()} Sayak Roy</div>
        <div>Design + Build by Sayak</div>
      </div>
    </footer>
  )
}