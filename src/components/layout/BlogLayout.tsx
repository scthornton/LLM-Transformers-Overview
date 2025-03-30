
import { useState } from "react";
import { Sun, Moon, Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TableOfContents } from "./TableOfContents";
import { ShareMenu } from "./ShareMenu";
import { toast } from "sonner";

interface BlogLayoutProps {
  children: React.ReactNode;
}

export function BlogLayout({ children }: BlogLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const handlePrint = () => {
    window.print();
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Understanding LLMs & Transformers",
        text: "Learn how LLMs and Transformer models work with detailed diagrams",
        url: window.location.href,
      }).catch((error) => {
        console.log('Error sharing', error);
        toast.error("Failed to share content");
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  return (
    <ShareMenu>
      <div className={`min-h-screen bg-blog-bg-light dark:bg-blog-bg-dark transition-colors duration-200 
                      print:bg-white print:dark:bg-white`}>
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8 print:hidden">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Understanding LLMs & Transformers
              </h1>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={toggleDarkMode} title="Toggle dark mode">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
                <Button variant="outline" size="icon" onClick={handlePrint} title="Print or save as PDF">
                  <Printer className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleShare} title="Share">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>
          
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4 lg:w-1/5 print:hidden">
              <div className="sticky top-8">
                <TableOfContents />
              </div>
            </aside>
            <Separator orientation="vertical" className="hidden md:block print:hidden" />
            <main className="md:w-3/4 lg:w-4/5">
              <article className="prose dark:prose-invert prose-lg max-w-none">
                {children}
              </article>
            </main>
          </div>
          
          <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm print:hidden">
            <p>© {new Date().getFullYear()} - Understanding LLMs & Transformers Blog</p>
            <p className="text-xs mt-2">Right-click anywhere to access sharing options</p>
          </footer>
        </div>
      </div>
    </ShareMenu>
  );
}
