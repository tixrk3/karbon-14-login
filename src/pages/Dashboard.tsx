import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Zap, BarChart3, Eye, MousePointerClick, TrendingUp, TrendingDown } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const stats = [
  { title: "Inventory Events", value: "2,547,893", icon: Activity, change: "+12.5%", up: true, color: "bg-primary/20 text-primary" },
  { title: "Ad Responses", value: "1,893,421", icon: Zap, change: "+8.3%", up: true, color: "bg-[hsl(30,90%,50%)]/20 text-[hsl(30,90%,50%)]" },
  { title: "Fill Rate", value: "74.3%", icon: BarChart3, change: "-2.1%", up: false, color: "bg-[hsl(340,70%,55%)]/20 text-[hsl(340,70%,55%)]" },
];

const stats2 = [
  { title: "Impressions", value: "1,654,234", icon: Eye, change: "+15.7%", up: true, color: "bg-primary/20 text-primary" },
  { title: "Clicks", value: "45,678", icon: MousePointerClick, change: "+9.2%", up: true, color: "bg-accent/20 text-accent" },
  { title: "CTR", value: "2.76%", icon: TrendingUp, change: "+0.3%", up: true, color: "bg-[hsl(340,70%,55%)]/20 text-[hsl(340,70%,55%)]" },
];

const impressionsData = [
  { day: "Mon", impressions: 180000, clicks: 5000 },
  { day: "Tue", impressions: 200000, clicks: 6200 },
  { day: "Wed", impressions: 170000, clicks: 5800 },
  { day: "Thu", impressions: 220000, clicks: 7000 },
  { day: "Fri", impressions: 280000, clicks: 8500 },
  { day: "Sat", impressions: 310000, clicks: 9200 },
  { day: "Sun", impressions: 250000, clicks: 7800 },
];

const coverageData = [
  { partner: "Partner A", coverage: 85 },
  { partner: "Partner B", coverage: 72 },
  { partner: "Partner C", coverage: 90 },
  { partner: "Partner D", coverage: 65 },
  { partner: "Partner E", coverage: 78 },
  { partner: "Partner F", coverage: 55 },
];

const viewabilityData = [
  { day: "Mon", rate: 68 },
  { day: "Tue", rate: 65 },
  { day: "Wed", rate: 70 },
  { day: "Thu", rate: 72 },
  { day: "Fri", rate: 69 },
  { day: "Sat", rate: 74 },
  { day: "Sun", rate: 71 },
];

const partnerPerformance = [
  { name: "Google AdX", tags: 12, impressions: "534,234", fillRate: "78.5%", avgCtr: "2.89%", revenue: "$12,450", trend: "+15.2%", up: true, status: "Excellent" },
  { name: "Amazon Publisher Services", tags: 8, impressions: "423,567", fillRate: "82.3%", avgCtr: "3.12%", revenue: "$9,876", trend: "+12.8%", up: true, status: "Excellent" },
  { name: "Index Exchange", tags: 15, impressions: "312,890", fillRate: "71.2%", avgCtr: "2.45%", revenue: "$7,234", trend: "+8.4%", up: true, status: "Good" },
  { name: "OpenX", tags: 6, impressions: "245,123", fillRate: "69.8%", avgCtr: "2.21%", revenue: "$5,432", trend: "-2.3%", up: false, status: "Good" },
  { name: "PubMatic", tags: 10, impressions: "189,456", fillRate: "65.4%", avgCtr: "1.98%", revenue: "$4,123", trend: "+6.1%", up: true, status: "Average" },
  { name: "Rubicon Project", tags: 4, impressions: "134,678", fillRate: "58.2%", avgCtr: "1.67%", revenue: "$2,890", trend: "-7.5%", up: false, status: "Needs Attention" },
];

const statusColors: Record<string, string> = {
  "Excellent": "bg-accent/20 text-accent",
  "Good": "bg-primary/20 text-primary",
  "Average": "bg-[hsl(30,90%,50%)]/20 text-[hsl(30,90%,50%)]",
  "Needs Attention": "bg-destructive/20 text-destructive",
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your ad verification metrics</p>
      </div>

      {/* Top stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className={`text-xs font-medium flex items-center gap-1 ${stat.up ? "text-accent" : "text-destructive"}`}>
                  {stat.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Second stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats2.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className={`text-xs font-medium flex items-center gap-1 ${stat.up ? "text-accent" : "text-destructive"}`}>
                  {stat.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground text-base">Impressions & Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={impressionsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222,30%,18%)" />
                <XAxis dataKey="day" stroke="hsl(218,12%,48%)" fontSize={12} />
                <YAxis stroke="hsl(218,12%,48%)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(222,40%,11%)", border: "1px solid hsl(222,30%,18%)", borderRadius: "8px", color: "hsl(195,20%,86%)" }} />
                <Area type="monotone" dataKey="impressions" stroke="hsl(176,82%,39%)" fill="hsl(176,82%,39%)" fillOpacity={0.2} />
                <Area type="monotone" dataKey="clicks" stroke="hsl(200,80%,32%)" fill="hsl(200,80%,32%)" fillOpacity={0.15} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-foreground text-base">Verification Coverage by Partner</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={coverageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(222,30%,18%)" />
                <XAxis dataKey="partner" stroke="hsl(218,12%,48%)" fontSize={11} />
                <YAxis stroke="hsl(218,12%,48%)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(222,40%,11%)", border: "1px solid hsl(222,30%,18%)", borderRadius: "8px", color: "hsl(195,20%,86%)" }} />
                <Bar dataKey="coverage" fill="hsl(176,82%,39%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Viewability Trend */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-foreground text-base">Viewability Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={viewabilityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(222,30%,18%)" />
              <XAxis dataKey="day" stroke="hsl(218,12%,48%)" fontSize={12} />
              <YAxis stroke="hsl(218,12%,48%)" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(222,40%,11%)", border: "1px solid hsl(222,30%,18%)", borderRadius: "8px", color: "hsl(195,20%,86%)" }} />
              <Line type="monotone" dataKey="rate" stroke="hsl(176,82%,39%)" strokeWidth={2} dot={{ fill: "hsl(176,82%,39%)", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Partner Performance Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-accent" />
            <div>
              <CardTitle className="text-foreground text-base">Partner Performance Overview</CardTitle>
              <p className="text-xs text-muted-foreground">Detailed metrics for all active partners</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Partner</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Tags</th>
                  <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Impressions</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Fill Rate</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Avg CTR</th>
                  <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Revenue</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Trend</th>
                  <th className="text-center p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {partnerPerformance.map((p) => (
                  <tr key={p.name} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                          <span className="text-accent text-xs font-bold">{p.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{p.name}</p>
                          <p className="text-xs text-muted-foreground">{p.tags} active tags</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-sm font-semibold text-accent">{p.tags}</span>
                    </td>
                    <td className="p-4 text-right text-sm text-foreground">{p.impressions}</td>
                    <td className="p-4 text-center">
                      <span className="text-sm px-2 py-0.5 rounded bg-muted text-foreground">{p.fillRate}</span>
                    </td>
                    <td className="p-4 text-center text-sm text-foreground">{p.avgCtr}</td>
                    <td className="p-4 text-right text-sm font-medium text-accent">{p.revenue}</td>
                    <td className="p-4 text-center">
                      <span className={`text-xs font-medium flex items-center justify-center gap-1 ${p.up ? "text-accent" : "text-destructive"}`}>
                        {p.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {p.trend}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${statusColors[p.status]}`}>{p.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
