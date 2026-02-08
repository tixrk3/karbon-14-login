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
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/layout/PageTransition";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Page Header */}
        <FadeIn>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground text-sm mt-1">
                Vue d'ensemble de vos métriques
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground bg-card border border-border/50 rounded-lg px-3 py-2">
              <Activity className="h-4 w-4 text-accent" />
              <span>Mise à jour: il y a 5 min</span>
            </div>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" staggerDelay={0.08}>
          <StaggerItem>
            <StatCard
              icon={<TrendingUp className="h-6 w-6 text-accent" />}
              iconBg="bg-accent/10"
              label="Événements Inventaire"
              value="2,547,893"
              trend={{ value: "+12.5%", isPositive: true }}
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              icon={<Zap className="h-6 w-6 text-accent" />}
              iconBg="bg-accent/10"
              label="Réponses Pub"
              value="1,893,421"
              trend={{ value: "+8.3%", isPositive: true }}
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              icon={<BarChart3 className="h-6 w-6 text-primary" />}
              iconBg="bg-primary/10"
              label="Taux de Remplissage"
              value="74.3%"
              trend={{ value: "-2.1%", isPositive: false }}
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              icon={<Eye className="h-6 w-6 text-accent" />}
              iconBg="bg-accent/10"
              label="Impressions"
              value="1,654,234"
              trend={{ value: "+15.7%", isPositive: true }}
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              icon={<MousePointer className="h-6 w-6 text-primary" />}
              iconBg="bg-primary/10"
              label="Clics"
              value="45,678"
              trend={{ value: "+9.2%", isPositive: true }}
            />
          </StaggerItem>
          <StaggerItem>
            <StatCard
              icon={<Activity className="h-6 w-6 text-accent" />}
              iconBg="bg-accent/10"
              label="CTR"
              value="2.76%"
              trend={{ value: "+0.3%", isPositive: true }}
            />
          </StaggerItem>
        </StaggerContainer>

        {/* Charts Row */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <FadeIn delay={0.4}>
            <ImpressionsChart />
          </FadeIn>
          <FadeIn delay={0.5}>
            <PartnerCoverageChart />
          </FadeIn>
        </div>

        {/* Viewability Chart */}
        <FadeIn delay={0.6}>
          <ViewabilityChart />
        </FadeIn>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
