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
      <div className="flex items-start justify-between mb-4">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            iconBg || "bg-primary/15"
          )}
        >
          {icon}
        </div>
      </div>
      <p className="text-muted-foreground text-sm font-medium mb-1">{label}</p>
      <p className="text-2xl font-bold text-foreground tracking-tight mb-2">{value}</p>
      {trend && (
        <div className="flex items-center gap-2 text-sm">
          <span
            className={cn(
              "flex items-center gap-1 font-medium",
              trend.isPositive ? "text-accent" : "text-destructive"
            )}
          >
            {trend.isPositive ? (
              <TrendingUp className="h-3.5 w-3.5" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5" />
            )}
            {trend.value}
          </span>
          <span className="text-muted-foreground">vs mois dernier</span>
        </div>
      )}
    </div>
  );
};
