import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const impressionsData = [
  { day: "Mon", value: 250000 },
  { day: "Tue", value: 280000 },
  { day: "Wed", value: 260000 },
  { day: "Thu", value: 270000 },
  { day: "Fri", value: 220000 },
  { day: "Sat", value: 180000 },
  { day: "Sun", value: 50000 },
];

const partnerData = [
  { name: "Partner A", value: 95 },
  { name: "Partner B", value: 78 },
  { name: "Partner C", value: 88 },
  { name: "Partner D", value: 92 },
  { name: "Partner E", value: 72 },
  { name: "Partner F", value: 95 },
];

const viewabilityData = [
  { day: "Mon", value: 68 },
  { day: "Tue", value: 72 },
  { day: "Wed", value: 67 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 73 },
  { day: "Sat", value: 65 },
  { day: "Sun", value: 63 },
];

export const ImpressionsChart = () => {
  return (
    <div className="stat-card h-96">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Ventes & Achats</h3>
        <select className="text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-border/50 outline-none">
          <option>6 Mois</option>
          <option>3 Mois</option>
          <option>1 Mois</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={impressionsData} barCategoryGap="25%">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} vertical={false} />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12} 
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12} 
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <Bar dataKey="value" fill="hsl(var(--destructive))" radius={[6, 6, 0, 0]} name="Ventes" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const PartnerCoverageChart = () => {
  return (
    <div className="stat-card h-96">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Couverture par Partenaire</h3>
        <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg">Taux de vérification</span>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={partnerData} barCategoryGap="25%">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={12}
            tickLine={false}
            axisLine={false}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
            formatter={(value: number) => [`${value}%`, "Couverture"]}
          />
          <Bar 
            dataKey="value" 
            fill="hsl(var(--primary))" 
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ViewabilityChart = () => {
  return (
    <div className="stat-card h-72">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Tendance Visibilité</h3>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-xs text-muted-foreground">Taux de visibilité</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={viewabilityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.5} />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={11}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))" 
            fontSize={11}
            tickLine={false}
            axisLine={false}
            domain={[50, 80]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "12px",
              boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.2)",
            }}
            formatter={(value: number) => [`${value}%`, "Visibilité"]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2.5}
            dot={{ fill: "hsl(var(--primary))", r: 4, strokeWidth: 2, stroke: "hsl(var(--card))" }}
            activeDot={{ r: 6, fill: "hsl(var(--primary))", stroke: "hsl(var(--card))", strokeWidth: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
