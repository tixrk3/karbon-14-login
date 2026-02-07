import { ReactNode } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: ReactNode;
  iconBg?: string;
  label: string;
  value: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const StatCard = ({ icon, iconBg, label, value, trend }: StatCardProps) => {
  return (
    <div className="stat-card group">
      <div className="flex items-center justify-between mb-5">
        <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">{label}</p>
        {trend && (
          <div
            className={cn(
              "flex items-center gap-1.5 text-sm font-semibold px-2.5 py-1 rounded-full",
              trend.isPositive 
                ? "bg-accent/15 text-accent" 
                : "bg-destructive/15 text-destructive"
            )}
          >
            {trend.isPositive ? (
              <TrendingUp className="h-3.5 w-3.5" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5" />
            )}
            <span>{trend.value}</span>
          </div>
        )}
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-foreground tracking-tight">{value}</p>
        <div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
            iconBg || "bg-primary/20"
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
