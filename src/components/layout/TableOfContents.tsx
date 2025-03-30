
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    // Find all headings in the article
    const headings = Array.from(document.querySelectorAll("h2, h3, h4"));
    const items: TOCItem[] = headings.map((heading) => {
      // Generate id if not present
      if (!heading.id) {
        heading.id = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "";
      }
      
      return {
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1))
      };
    });
    
    setTocItems(items);

    // Set up intersection observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    headings.forEach((heading) => observer.observe(heading));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Contents</h2>
      <ScrollArea className="h-[calc(100vh-220px)]">
        <nav>
          <ul className="space-y-1">
            {tocItems.map((item) => (
              <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
                <a
                  href={`#${item.id}`}
                  className={`block py-1 text-sm hover:text-blog-blue transition-colors ${
                    activeId === item.id
                      ? "text-blog-blue font-medium"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>
    </div>
  );
}
