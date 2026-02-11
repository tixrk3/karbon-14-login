import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Plus, Search, TrendingUp, TrendingDown, Activity, Eye, MousePointerClick, MoreVertical, Building2, Sparkles, Link, KeyRound, StickyNote, Info } from "lucide-react";

const mockPartners = [
  { id: 1, name: "Google AdX", email: "partner@google.com", status: "Active", inventoryEvents: "845,234", impressions: "623,891", fillRate: "73.8%", viewability: "76.2%", ctr: "2.8%", tags: 12, trend: "+12.5%", up: true },
  { id: 2, name: "Amazon Publisher Services", email: "ads@amazon.com", status: "Active", inventoryEvents: "723,456", impressions: "534,234", fillRate: "73.8%", viewability: "72.1%", ctr: "2.4%", tags: 8, trend: "+8.3%", up: true },
  { id: 3, name: "Index Exchange", email: "support@indexexchange.com", status: "Active", inventoryEvents: "612,890", impressions: "445,678", fillRate: "72.7%", viewability: "68.5%", ctr: "2.1%", tags: 6, trend: "-2.1%", up: false },
  { id: 4, name: "OpenX", email: "publishers@openx.com", status: "Active", inventoryEvents: "534,123", impressions: "389,234", fillRate: "72.9%", viewability: "71.8%", ctr: "2.6%", tags: 5, trend: "+5.7%", up: true },
  { id: 5, name: "PubMatic", email: "info@pubmatic.com", status: "Warning", inventoryEvents: "423,567", impressions: "298,456", fillRate: "70.5%", viewability: "65.3%", ctr: "1.9%", tags: 4, trend: "-4.2%", up: false },
  { id: 6, name: "Rubicon Project", email: "support@magnite.com", status: "Active", inventoryEvents: "389,234", impressions: "287,123", fillRate: "73.8%", viewability: "69.4%", ctr: "2.3%", tags: 7, trend: "+3.8%", up: true },
];

const Partners = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = mockPartners.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Partners</h1>
          <p className="text-muted-foreground">Manage and monitor your advertising partners</p>
        </div>
        <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setOpen(true)}>
          <Plus className="h-4 w-4" />
          Add Partner
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total Partners", value: "6", icon: Activity },
          { title: "Active Partners", value: "5", icon: TrendingUp },
          { title: "Avg Viewability", value: "70.5%", icon: Eye },
          { title: "Avg CTR", value: "2.35%", icon: MousePointerClick },
        ].map((s) => (
          <Card key={s.title} className="bg-card border-border">
            <CardContent className="p-5 flex items-center gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{s.title}</p>
                <p className="text-xl font-bold text-foreground">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search partners..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Partner", "Status", "Inventory Events", "Impressions", "Fill Rate", "Viewability", "CTR", "Tags", "Trend", ""].map((h) => (
                    <th key={h} className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="p-4">
                      <p className="text-sm font-medium text-foreground">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.email}</p>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${p.status === "Active" ? "bg-accent/20 text-accent" : "bg-[hsl(30,90%,50%)]/20 text-[hsl(30,90%,50%)]"}`}>
                        ● {p.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-foreground">{p.inventoryEvents}</td>
                    <td className="p-4 text-sm text-foreground">{p.impressions}</td>
                    <td className="p-4 text-sm text-foreground">{p.fillRate}</td>
                    <td className="p-4 text-sm text-foreground">{p.viewability}</td>
                    <td className="p-4 text-sm text-foreground">{p.ctr}</td>
                    <td className="p-4 text-sm font-semibold text-accent">{p.tags}</td>
                    <td className="p-4">
                      <span className={`text-xs font-medium flex items-center gap-1 ${p.up ? "text-accent" : "text-destructive"}`}>
                        {p.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {p.trend}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add Partner Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-border max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              <Building2 className="h-5 w-5 text-accent" />
              Add New Partner
            </DialogTitle>
            <p className="text-sm text-muted-foreground">Configure a new advertising partner and set up verification tags for ad tracking.</p>
          </DialogHeader>

          <div className="space-y-5 py-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wider">
              <Building2 className="h-4 w-4" />
              Partner Information
            </div>
            <hr className="border-border" />

            <div className="space-y-2">
              <Label className="text-foreground">Partner Name <span className="text-destructive">*</span></Label>
              <Input placeholder="e.g., Google AdX, Amazon APS" className="bg-background/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1 text-foreground">
                <span>📧</span> Contact Email <span className="text-destructive">*</span>
              </Label>
              <Input placeholder="partner@example.com" className="bg-background/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1 text-foreground">
                <span>◎</span> Category
              </Label>
              <Input className="bg-background/50 border-border max-w-[200px]" />
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wider pt-2">
              <Sparkles className="h-4 w-4" />
              API Configuration
            </div>
            <hr className="border-border" />

            <div className="space-y-2">
              <Label className="flex items-center gap-1 text-foreground">
                <Link className="h-3 w-3" /> API Endpoint
              </Label>
              <Input placeholder="https://api.partner.com/v1/ads" className="bg-background/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1 text-foreground">
                <KeyRound className="h-3 w-3" /> API Key
              </Label>
              <Input type="password" placeholder="••••••••••••••••" className="bg-background/50 border-border" />
              <p className="text-xs text-muted-foreground">🔒 API credentials are encrypted and stored securely.</p>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Notes</Label>
              <Textarea placeholder="Additional notes or configuration details..." className="bg-background/50 border-border min-h-[80px]" />
            </div>

            <div className="rounded-lg bg-accent/10 border border-accent/20 p-4 flex items-start gap-3">
              <Info className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-accent">Automatic Tag Generation</p>
                <p className="text-xs text-muted-foreground">After adding this partner, verification tags will be automatically generated and ready for deployment. You can manage tags from the Tags section.</p>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setOpen(false)}>
              <Building2 className="h-4 w-4" />
              Add Partner
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Partners;
