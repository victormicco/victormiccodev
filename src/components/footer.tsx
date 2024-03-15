import { Home, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 p-4 border-t dark:border-gray-800 backdrop-blur-lg">
      <div className="container flex items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-4">
          <a href="#">
            <Home className="h-5 w-5" />
          </a>
          <a href="https://github.com/victormicco" target="_blank">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/victormicco" target="_blank">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Created with 💖 by Victor Micco
        </p>
      </div>
    </footer>
  );
}
