export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} AI Voice Assistant</p>
        <p className="text-sm">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
