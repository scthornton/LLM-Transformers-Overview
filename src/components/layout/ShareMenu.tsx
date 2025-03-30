
import { 
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { toast } from "sonner";
import { Share2, Download, Copy, Printer } from "lucide-react";

interface ShareMenuProps {
  children: React.ReactNode;
}

export function ShareMenu({ children }: ShareMenuProps) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const handleDownloadPDF = () => {
    toast("Preparing PDF download...");
    window.print();
  };
  
  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem onClick={handleCopyLink} className="flex items-center gap-2">
          <Copy className="h-4 w-4" />
          Copy Link
        </ContextMenuItem>
        <ContextMenuItem onClick={handlePrint} className="flex items-center gap-2">
          <Printer className="h-4 w-4" />
          Print
        </ContextMenuItem>
        <ContextMenuItem onClick={handleDownloadPDF} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Save as PDF
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
