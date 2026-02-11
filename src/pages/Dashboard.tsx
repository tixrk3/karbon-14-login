import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Handshake, Tags, TrendingUp, MousePointerClick, BarChart3, Percent } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { title: "Ad Requests", value: "1,234,567", icon: BarChart3, change: "+12.5%", positive: true },
  { title: "Ad Responses", value: "1,180,432", icon: TrendingUp, change: "+8.3%", positive: true },
  { title: "Clicks", value: "45,231", icon: MousePointerClick, change: "+15.2%", positive: true },
  { title: "CTR", value: "3.83%", icon: Percent, change: "-0.4%", positive: false },
];

const areaData = [
  { time: "00:00", requests: 2400, responses: 2200 },
  { time: "02:00", requests: 1800, responses: 1600 },
  { time: "04:00", requests: 1200, responses: 1100 },
  { time: "06:00", requests: 2800, responses: 2600 },
  { time: "08:00", requests: 4200, responses: 4000 },
  { time: "10:00", requests: 5800, responses: 5500 },
  { time: "12:00", requests: 6200, responses: 5900 },
  { time: "14:00", requests: 5400, responses: 5100 },
  { time: "16:00", requests: 4800, responses: 4500 },
  { time: "18:00", requests: 3600, responses: 3400 },
  { time: "20:00", requests: 2800, responses: 2600 },
  { time: "22:00", requests: 2200, responses: 2000 },
];

const barData = [
  { day: "Lun", adResponses: 165000, clicks: 12400 },
  { day: "Mar", adResponses: 172000, clicks: 13200 },
  { day: "Mer", adResponses: 158000, clicks: 11800 },
  { day: "Jeu", adResponses: 180000, clicks: 14500 },
  { day: "Ven", adResponses: 195000, clicks: 15800 },
  { day: "Sam", adResponses: 142000, clicks: 10200 },
  { day: "Dim", adResponses: 128000, clicks: 9400 },
];

const areaChartConfig: ChartConfig = {
  requests: {
    label: "Ad Requests",
    color: "hsl(200 80% 32%)",
  },
  responses: {
    label: "Ad Responses",
    color: "hsl(176 82% 39%)",
  },
};

const barChartConfig: ChartConfig = {
  adResponses: {
    label: "Ad Responses",
    color: "hsl(30 90% 55%)",
  },
  clicks: {
    label: "Clicks",
    color: "hsl(340 70% 55%)",
  },
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Vue d'ensemble de vos performances publicitaires</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="h-9 w-9 rounded-lg bg-primary/15 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className={`text-xs mt-1 ${stat.positive ? 'text-accent' : 'text-destructive'}`}>
                {stat.change} vs mois dernier
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Area Chart - Traffic Overview */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Trafic publicitaire (24h)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={areaChartConfig} className="h-[300px] w-full">
            <AreaChart data={areaData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillRequests" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(200 80% 32%)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(200 80% 32%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="fillResponses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(176 82% 39%)" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(176 82% 39%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 18%)" />
              <XAxis dataKey="time" stroke="hsl(218 12% 48%)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(218 12% 48%)" fontSize={12} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="requests"
                stroke="hsl(200 80% 32%)"
                fill="url(#fillRequests)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="responses"
                stroke="hsl(176 82% 39%)"
                fill="url(#fillResponses)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Bar Chart - Weekly Performance */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground text-lg flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Performance hebdomadaire
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={barChartConfig} className="h-[300px] w-full">
            <BarChart data={barData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 30% 18%)" />
              <XAxis dataKey="day" stroke="hsl(218 12% 48%)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="hsl(218 12% 48%)" fontSize={12} tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="adResponses" fill="hsl(176 82% 39%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="clicks" fill="hsl(200 80% 32%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
