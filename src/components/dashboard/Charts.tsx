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
    <div className="stat-card h-80">
      <h3 className="text-lg font-semibold text-foreground mb-4">Impressions & Clicks</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={impressionsData}>
          <defs>
            <linearGradient id="impressionsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.4} />
              <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--accent))"
            strokeWidth={2}
            fill="url(#impressionsGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export const PartnerCoverageChart = () => {
  return (
    <div className="stat-card h-80">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Verification Coverage by Partner
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={partnerData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={11} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="value" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ViewabilityChart = () => {
  return (
    <div className="stat-card h-72">
      <h3 className="text-lg font-semibold text-foreground mb-4">Viewability Trend</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={viewabilityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(270, 70%, 60%)"
            strokeWidth={2}
            dot={{ fill: "hsl(270, 70%, 60%)", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
