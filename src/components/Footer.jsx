export default function Footer() {
  return (
    <footer className="bg-indigo-950 py-10 text-center text-xs text-indigo-400 font-bold border-t-2 border-indigo-900">
      <p>&copy; {new Date().getFullYear()} Sean Cole VO. All rights reserved.</p>
    </footer>
  );
}