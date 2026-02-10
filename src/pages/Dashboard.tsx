import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import {
  ImpressionsChart,
  PartnerCoverageChart,
  ViewabilityChart,
} from "@/components/dashboard/Charts";
import {
  TrendingUp,
  Zap,
  BarChart3,
  Eye,
  MousePointer,
  Activity,
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Vue d'ensemble de vos métriques de vérification publicitaire
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border/50 rounded-lg px-4 py-2">
            <Activity className="h-4 w-4 text-accent" />
            <span>Dernière mise à jour: il y a 5 min</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <StatCard
            icon={<TrendingUp className="h-7 w-7 text-accent" />}
            iconBg="bg-accent/15"
            label="Événements Inventaire"
            value="2,547,893"
            trend={{ value: "+12.5%", isPositive: true }}
          />
          <StatCard
            icon={<Zap className="h-7 w-7 text-accent" />}
            iconBg="bg-accent/15"
            label="Réponses Pub"
            value="1,893,421"
            trend={{ value: "+8.3%", isPositive: true }}
          />
          <StatCard
            icon={<BarChart3 className="h-7 w-7 text-primary" />}
            iconBg="bg-primary/15"
            label="Taux de Remplissage"
            value="74.3%"
            trend={{ value: "-2.1%", isPositive: false }}
          />
          <StatCard
            icon={<Eye className="h-7 w-7 text-accent" />}
            iconBg="bg-accent/15"
            label="Impressions"
            value="1,654,234"
            trend={{ value: "+15.7%", isPositive: true }}
          />
          <StatCard
            icon={<MousePointer className="h-7 w-7 text-primary" />}
            iconBg="bg-primary/15"
            label="Clics"
            value="45,678"
            trend={{ value: "+9.2%", isPositive: true }}
          />
          <StatCard
            icon={<Activity className="h-7 w-7 text-accent" />}
            iconBg="bg-accent/15"
            label="CTR"
            value="2.76%"
            trend={{ value: "+0.3%", isPositive: true }}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <ImpressionsChart />
          <PartnerCoverageChart />
        </div>

        {/* Viewability Chart */}
        <ViewabilityChart />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
