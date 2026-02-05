import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  MousePointer,
  Search,
  Plus,
  MoreVertical,
} from "lucide-react";

const partnersData = [
  {
    id: 1,
    name: "Google AdX",
    email: "partner@google.com",
    status: "active",
    inventoryEvents: "845,234",
    impressions: "623,891",
    fillRate: "73.8%",
    viewability: "76.2%",
    ctr: "2.8%",
    tags: 12,
    trend: "+12.5%",
    trendPositive: true,
  },
  {
    id: 2,
    name: "Amazon Publisher Services",
    email: "ads@amazon.com",
    status: "active",
    inventoryEvents: "723,456",
    impressions: "534,234",
    fillRate: "73.8%",
    viewability: "72.1%",
    ctr: "2.4%",
    tags: 8,
    trend: "+8.3%",
    trendPositive: true,
  },
  {
    id: 3,
    name: "Index Exchange",
    email: "support@indexexchange.com",
    status: "active",
    inventoryEvents: "612,890",
    impressions: "445,678",
    fillRate: "72.7%",
    viewability: "68.5%",
    ctr: "2.1%",
    tags: 6,
    trend: "-2.1%",
    trendPositive: false,
  },
];

const Partners = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Partners</h1>
            <p className="text-muted-foreground mt-1">
              Manage and monitor your advertising partners
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            <Plus className="h-4 w-4" />
            Add Partner
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<TrendingUp className="h-6 w-6 text-accent" />}
            iconBg="bg-accent/20"
            label="Total Partners"
            value="6"
          />
          <StatCard
            icon={<TrendingUp className="h-6 w-6 text-accent" />}
            iconBg="bg-accent/20"
            label="Active Partners"
            value="5"
          />
          <StatCard
            icon={<Eye className="h-6 w-6 text-primary" />}
            iconBg="bg-primary/20"
            label="Avg Viewability"
            value="70.5%"
          />
          <StatCard
            icon={<MousePointer className="h-6 w-6 text-destructive" />}
            iconBg="bg-destructive/20"
            label="Avg CTR"
            value="2.35%"
          />
        </div>

        {/* Search */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search partners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>

        {/* Partners Table */}
        <div className="stat-card overflow-hidden p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Partner</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground text-right">
                  Inventory Events
                </TableHead>
                <TableHead className="text-muted-foreground text-right">
                  Impressions
                </TableHead>
                <TableHead className="text-muted-foreground text-right">
                  Fill Rate
                </TableHead>
                <TableHead className="text-muted-foreground text-right">
                  Viewability
                </TableHead>
                <TableHead className="text-muted-foreground text-right">CTR</TableHead>
                <TableHead className="text-muted-foreground text-center">Tags</TableHead>
                <TableHead className="text-muted-foreground text-right">Trend</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partnersData.map((partner) => (
                <TableRow key={partner.id} className="border-border">
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">{partner.name}</p>
                      <p className="text-sm text-muted-foreground">{partner.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="status-badge status-active">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Active
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {partner.inventoryEvents}
                  </TableCell>
                  <TableCell className="text-right">{partner.impressions}</TableCell>
                  <TableCell className="text-right">{partner.fillRate}</TableCell>
                  <TableCell className="text-right">{partner.viewability}</TableCell>
                  <TableCell className="text-right">{partner.ctr}</TableCell>
                  <TableCell className="text-center">
                    <span className="text-primary font-medium">{partner.tags}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`flex items-center justify-end gap-1 ${
                        partner.trendPositive ? "trend-up" : "trend-down"
                      }`}
                    >
                      {partner.trendPositive ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      {partner.trend}
                    </span>
                  </TableCell>
                  <TableCell>
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Partners;
