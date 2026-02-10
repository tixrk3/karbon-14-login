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
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your ad verification metrics
          </p>
        </div>

        {/* Stats Grid - Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            icon={<TrendingUp className="h-6 w-6 text-accent" />}
            iconBg="bg-accent/20"
            label="Inventory Events"
            value="2,547,893"
            trend={{ value: "+12.5%", isPositive: true }}
          />
          <StatCard
            icon={<Zap className="h-6 w-6 text-orange-400" />}
            iconBg="bg-orange-400/20"
            label="Ad Responses"
            value="1,893,421"
            trend={{ value: "+8.3%", isPositive: true }}
          />
          <StatCard
            icon={<BarChart3 className="h-6 w-6 text-primary" />}
            iconBg="bg-primary/20"
            label="Fill Rate"
            value="74.3%"
            trend={{ value: "-2.1%", isPositive: false }}
          />
        </div>

        {/* Stats Grid - Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard
            icon={<Eye className="h-6 w-6 text-accent" />}
            iconBg="bg-accent/20"
            label="Impressions"
            value="1,654,234"
            trend={{ value: "+15.7%", isPositive: true }}
          />
          <StatCard
            icon={<MousePointer className="h-6 w-6 text-orange-400" />}
            iconBg="bg-orange-400/20"
            label="Clicks"
            value="45,678"
            trend={{ value: "+9.2%", isPositive: true }}
          />
          <StatCard
            icon={<Activity className="h-6 w-6 text-pink-500" />}
            iconBg="bg-pink-500/20"
            label="CTR"
            value="2.76%"
            trend={{ value: "+0.3%", isPositive: true }}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
