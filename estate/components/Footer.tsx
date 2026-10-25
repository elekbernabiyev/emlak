export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-white/45">
      © {new Date().getFullYear()} Maison. Listings are saved in your browser until a database is connected.
    </footer>
  );
}
