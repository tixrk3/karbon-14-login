import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Plus, Search, Code2, Eye, Zap, AlertTriangle, Copy, MoreVertical, Sparkles, Building2, FileCode, Info, CheckCircle, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockTags = [
  { id: 1, name: "Google AdX Display Tag", partner: "Google AdX", status: "Active", script: '<script src="https://verify.karbon14.com/tags/gdx_12345.js"></script>', events: "1,234,567", lastFired: "2 mins ago", errorRate: "0.02%", type: "Display", tagId: "TAG-000001", lastUpdated: "1/15/2024, 1:00:00 AM", successRate: "99.98%", created: "1/15/2024" },
  { id: 2, name: "Amazon Video Verification", partner: "Amazon Publisher Services", status: "Active", script: '<script src="https://verify.karbon14.com/tags/amz_video_52658.js"></script>', events: "892,345", lastFired: "1 min ago", errorRate: "0.01%", type: "Video", tagId: "TAG-000002", lastUpdated: "1/14/2024", successRate: "99.99%", created: "1/14/2024" },
  { id: 3, name: "Index Exchange Header", partner: "Index Exchange", status: "Active", script: '<script src="https://verify.karbon14.com/tags/idx_header_44541.js"></script>', events: "967,234", lastFired: "5 mins ago", errorRate: "0.05%", type: "Header", tagId: "TAG-000003", lastUpdated: "1/13/2024", successRate: "99.95%", created: "1/13/2024" },
  { id: 4, name: "OpenX Mobile Banner", partner: "OpenX", status: "Pending", script: '<script src="https://verify.karbon14.com/tags/opx_mobile_99912.js"></script>', events: "0", lastFired: "Never", errorRate: "—", type: "Mobile", tagId: "TAG-000004", lastUpdated: "1/12/2024", successRate: "—", created: "1/12/2024" },
  { id: 5, name: "PubMatic Native Ad", partner: "PubMatic", status: "Inactive", script: '<script src="https://verify.karbon14.com/tags/pm_native_33456.js"></script>', events: "234,567", lastFired: "2 days ago", errorRate: "0.15%", type: "Native", tagId: "TAG-000005", lastUpdated: "1/10/2024", successRate: "99.85%", created: "1/10/2024" },
];

const eventActivityData = [
  { time: "00:00", events: 2200 },
  { time: "04:00", events: 1800 },
  { time: "08:00", events: 2800 },
  { time: "12:00", events: 3500 },
  { time: "16:00", events: 3200 },
  { time: "20:00", events: 2900 },
];

const statusColors: Record<string, string> = {
  Active: "bg-accent/20 text-accent",
  Pending: "bg-[hsl(30,90%,50%)]/20 text-[hsl(30,90%,50%)]",
  Inactive: "bg-muted text-muted-foreground",
};

const TagsPage = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const [viewTag, setViewTag] = useState<typeof mockTags[0] | null>(null);
  const [search, setSearch] = useState("");

  const filtered = mockTags.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) || t.partner.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-[hsl(var(--violet))]/20 flex items-center justify-center">
            <Code2 className="h-5 w-5 text-[hsl(var(--violet))]" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-accent">Verification Tags</h1>
            <p className="text-muted-foreground flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Manage and monitor your ad verification tags
            </p>
          </div>
        </div>
        <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => setCreateOpen(true)}>
          <Plus className="h-4 w-4" />
          Create Tag
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: "Total Tags", value: "5", icon: Code2, color: "bg-[hsl(var(--violet))]/20 text-[hsl(var(--violet))]" },
          { title: "Active Tags", value: "3", icon: CheckCircle, color: "bg-accent/20 text-accent" },
          { title: "Total Events", value: "2.9M", icon: Zap, color: "bg-accent/20 text-accent" },
          { title: "Avg Error Rate", value: "0.04%", icon: AlertTriangle, color: "bg-destructive/20 text-destructive" },
        ].map((s) => (
          <Card key={s.title} className="bg-card border-border">
            <CardContent className="p-5 flex items-center gap-4">
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${s.color}`}>
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
      <div className="relative max-w-lg">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tags or partners..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-card border-border"
        />
      </div>

      {/* Tag list */}
      <div className="space-y-4">
        {filtered.map((tag) => (
          <Card key={tag.id} className="bg-card border-border hover:border-primary/30 transition-colors">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center">
                    <FileCode className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{tag.name}</h3>
                    <p className="text-xs text-muted-foreground">{tag.partner}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[tag.status]}`}>
                    ● {tag.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setViewTag(tag)} className="text-accent hover:text-accent/80">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="bg-background/50 rounded-lg p-3 flex items-center justify-between mb-3">
                <code className="text-xs text-muted-foreground font-mono truncate flex-1">{tag.script}</code>
                <button className="ml-2 text-muted-foreground hover:text-foreground" onClick={() => navigator.clipboard.writeText(tag.script)}>
                  <Copy className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Events</p>
                  <p className="text-sm font-semibold text-foreground">{tag.events}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Last Fired</p>
                  <p className="text-sm font-semibold text-foreground">{tag.lastFired}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Error Rate</p>
                  <p className="text-sm font-semibold text-accent">{tag.errorRate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Tag Dialog */}
      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent className="bg-card border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-accent">
              <Code2 className="h-5 w-5 text-[hsl(var(--violet))]" />
              Create Verification Tag
            </DialogTitle>
            <p className="text-sm text-muted-foreground">Generate a new ad verification tag for tracking and monitoring.</p>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wider">
              <Sparkles className="h-4 w-4" /> TAG CONFIGURATION
            </div>
            <hr className="border-border" />

            <div className="space-y-2">
              <Label className="text-foreground">Tag Name <span className="text-destructive">*</span></Label>
              <Input placeholder="e.g., Google AdX Display Tag" className="bg-background/50 border-border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-1 text-foreground">
                  <Building2 className="h-3 w-3" /> Partner <span className="text-destructive">*</span>
                </Label>
                <Input className="bg-background/50 border-border" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-1 text-foreground">
                  <FileCode className="h-3 w-3" /> Tag Type
                </Label>
                <Input className="bg-background/50 border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Placement Location</Label>
              <Input placeholder="e.g., Homepage Header, Sidebar" className="bg-background/50 border-border" />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Description</Label>
              <Textarea placeholder="Additional details about this tag..." className="bg-background/50 border-border min-h-[80px]" />
            </div>

            <div className="rounded-lg bg-accent/10 border border-accent/20 p-4 flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-accent">Automated Tag Generation</p>
                <p className="text-xs text-muted-foreground">Your verification tag will be automatically generated with a unique identifier. Copy and paste the code into your website to start tracking.</p>
              </div>
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setCreateOpen(false)}>Cancel</Button>
            <Button className="gap-2 bg-gradient-to-r from-[hsl(var(--violet))] to-accent text-white" onClick={() => setCreateOpen(false)}>
              <Code2 className="h-4 w-4" />
              Create Tag
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Tag Dialog */}
      <Dialog open={!!viewTag} onOpenChange={() => setViewTag(null)}>
        <DialogContent className="bg-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
          {viewTag && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-accent">
                  <Code2 className="h-5 w-5 text-[hsl(var(--violet))]" />
                  {viewTag.name}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-5">
                {/* Status */}
                <div className="rounded-lg bg-accent/10 border border-accent/20 p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Tag Status: {viewTag.status}</p>
                      <p className="text-xs text-muted-foreground">Last fired {viewTag.lastFired}</p>
                    </div>
                  </div>
                </div>

                {/* Tag Code */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                    <Code2 className="h-4 w-4 text-accent" /> Tag Code
                  </h3>
                  <div className="bg-background/50 rounded-lg p-3 flex items-center justify-between">
                    <code className="text-xs text-muted-foreground font-mono">{viewTag.script}</code>
                    <button className="text-muted-foreground hover:text-foreground" onClick={() => navigator.clipboard.writeText(viewTag.script)}>
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Copy this code and paste it into your website's header or where you want to track ad events.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: "Total Events", value: viewTag.events, icon: Zap },
                    { label: "Success Rate", value: viewTag.successRate, icon: TrendingUp },
                    { label: "Error Rate", value: viewTag.errorRate, icon: AlertTriangle },
                    { label: "Created", value: viewTag.created, icon: Code2 },
                  ].map((s) => (
                    <Card key={s.label} className="bg-background/50 border-border">
                      <CardContent className="p-3">
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <s.icon className="h-3 w-3" /> {s.label}
                        </p>
                        <p className="text-lg font-bold text-foreground">{s.value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Event Activity Chart */}
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                    <TrendingUp className="h-4 w-4 text-accent" /> Event Activity (Last 24 Hours)
                  </h3>
                  <Card className="bg-background/50 border-border">
                    <CardContent className="p-3">
                      <ResponsiveContainer width="100%" height={180}>
                        <LineChart data={eventActivityData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(222,30%,18%)" />
                          <XAxis dataKey="time" stroke="hsl(218,12%,48%)" fontSize={11} />
                          <YAxis stroke="hsl(218,12%,48%)" fontSize={11} />
                          <Tooltip contentStyle={{ background: "hsl(222,40%,11%)", border: "1px solid hsl(222,30%,18%)", borderRadius: "8px", color: "hsl(195,20%,86%)" }} />
                          <Line type="monotone" dataKey="events" stroke="hsl(176,82%,39%)" strokeWidth={2} dot={{ fill: "hsl(176,82%,39%)", r: 4 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>

                {/* Tag Details */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">Tag Details</h3>
                  <Card className="bg-background/50 border-border">
                    <CardContent className="p-4 grid grid-cols-2 gap-4">
                      <div><p className="text-xs text-muted-foreground">Partner</p><p className="text-sm font-medium text-foreground">{viewTag.partner}</p></div>
                      <div><p className="text-xs text-muted-foreground">Type</p><p className="text-sm font-medium text-foreground">{viewTag.type}</p></div>
                      <div><p className="text-xs text-muted-foreground">Tag ID</p><p className="text-sm font-medium text-foreground">{viewTag.tagId}</p></div>
                      <div><p className="text-xs text-muted-foreground">Last Updated</p><p className="text-sm font-medium text-foreground">{viewTag.lastUpdated}</p></div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <DialogFooter className="gap-2">
                <Button variant="outline" onClick={() => setViewTag(null)}>Close</Button>
                <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">Edit Tag</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TagsPage;
