import { Monitor, Eye, MoreVertical, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface TagCardProps {
  tag: {
    id: number;
    name: string;
    partner: string;
    status: "active" | "pending" | "inactive";
    script: string;
    events: string;
    lastFired: string;
    errorRate: string;
  };
}

export const TagCard = ({ tag }: TagCardProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(tag.script);
    toast.success("Script copié dans le presse-papiers");
  };

  const statusConfig = {
    active: { class: "status-active", label: "Active" },
    pending: { class: "status-pending", label: "Pending" },
    inactive: { class: "status-inactive", label: "Inactive" },
  };

  return (
    <div className="tag-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center">
            <Monitor className="h-6 w-6 text-accent" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="font-semibold text-foreground">{tag.name}</h3>
              <span className={cn("status-badge", statusConfig[tag.status].class)}>
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    tag.status === "active" && "bg-accent",
                    tag.status === "pending" && "bg-warning",
                    tag.status === "inactive" && "bg-muted-foreground"
                  )}
                />
                {statusConfig[tag.status].label}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{tag.partner}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Eye className="h-5 w-5" />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Script Code Block */}
      <div className="code-block flex items-center justify-between mb-4">
        <code className="text-primary text-sm truncate flex-1">{tag.script}</code>
        <button
          onClick={copyToClipboard}
          className="ml-3 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Copy className="h-4 w-4" />
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground">Events</p>
          <p className="font-semibold text-foreground">{tag.events}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Last Fired</p>
          <p className="font-semibold text-foreground">{tag.lastFired}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Error Rate</p>
          <p
            className={cn(
              "font-semibold",
              tag.errorRate === "—"
                ? "text-muted-foreground"
                : parseFloat(tag.errorRate) > 0.1
                ? "text-destructive"
                : "text-accent"
            )}
          >
            {tag.errorRate}
          </p>
        </div>
      </div>
    </div>
  );
};
