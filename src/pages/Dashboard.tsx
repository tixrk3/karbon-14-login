import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Handshake, Tags, TrendingUp } from "lucide-react";

const stats = [
  { title: "Partners", value: "124", icon: Handshake, change: "+12%" },
  { title: "Users", value: "1,432", icon: Users, change: "+8%" },
  { title: "Tags", value: "89", icon: Tags, change: "+5%" },
  { title: "Active Sessions", value: "342", icon: TrendingUp, change: "+18%" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Vue d'ensemble de votre plateforme</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-accent mt-1">{stat.change} ce mois</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Activité récente</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            Les graphiques et données détaillées seront affichés ici une fois les captures d'écran fournies.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
