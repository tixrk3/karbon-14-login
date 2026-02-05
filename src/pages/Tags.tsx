import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreateTagModal } from "@/components/tags/CreateTagModal";
import { TagCard } from "@/components/tags/TagCard";
import {
  Code2,
  CheckCircle2,
  Zap,
  AlertCircle,
  Search,
  Plus,
} from "lucide-react";

const tagsData = [
  {
    id: 1,
    name: "Google AdX Display Tag",
    partner: "Google AdX",
    status: "active" as const,
    script: '<script src="https://verify.karbon14.com/tags/gdx_12345.js"></script>',
    events: "1,234,567",
    lastFired: "2 mins ago",
    errorRate: "0.02%",
  },
  {
    id: 2,
    name: "Amazon Video Verification",
    partner: "Amazon Publisher Services",
    status: "active" as const,
    script: '<script src="https://verify.karbon14.com/tags/aps_video_67890.js"></script>',
    events: "892,345",
    lastFired: "1 min ago",
    errorRate: "0.01%",
  },
  {
    id: 3,
    name: "Index Exchange Header",
    partner: "Index Exchange",
    status: "active" as const,
    script: '<script src="https://verify.karbon14.com/tags/idx_header_34567.js"></script>',
    events: "567,234",
    lastFired: "5 mins ago",
    errorRate: "0.03%",
  },
  {
    id: 4,
    name: "OpenX Mobile Banner",
    partner: "OpenX",
    status: "pending" as const,
    script: '<script src="https://verify.karbon14.com/tags/oxm_mobile_89012.js"></script>',
    events: "0",
    lastFired: "Never",
    errorRate: "—",
  },
  {
    id: 5,
    name: "PubMatic Native Ad",
    partner: "PubMatic",
    status: "inactive" as const,
    script: '<script src="https://verify.karbon14.com/tags/pm_native_45678.js"></script>',
    events: "234,567",
    lastFired: "2 days ago",
    errorRate: "0.15%",
  },
];

const Tags = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [tags, setTags] = useState(tagsData);

  const handleCreateTag = (newTag: {
    name: string;
    partner: string;
    tagType: string;
    placement: string;
    description: string;
  }) => {
    const tagId = Math.random().toString(36).substr(2, 9);
    const newTagData = {
      id: tags.length + 1,
      name: newTag.name,
      partner: newTag.partner,
      status: "pending" as const,
      script: `<script src="https://verify.karbon14.com/tags/${tagId}.js"></script>`,
      events: "0",
      lastFired: "Never",
      errorRate: "—",
    };
    setTags([newTagData, ...tags]);
  };

  const filteredTags = tags.filter(
    (tag) =>
      tag.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tag.partner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="tag-card bg-gradient-to-r from-card to-secondary/20 border-accent/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Code2 className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-accent">Verification Tags</h1>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Manage and monitor your ad verification tags
                </p>
              </div>
            </div>
            <Button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white gap-2"
            >
              <Plus className="h-4 w-4" />
              Create Tag
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Code2 className="h-6 w-6 text-primary" />}
            iconBg="bg-primary/20"
            label="Total Tags"
            value={tags.length.toString()}
          />
          <StatCard
            icon={<CheckCircle2 className="h-6 w-6 text-accent" />}
            iconBg="bg-accent/20"
            label="Active Tags"
            value={tags.filter((t) => t.status === "active").length.toString()}
          />
          <StatCard
            icon={<Zap className="h-6 w-6 text-accent" />}
            iconBg="bg-accent/20"
            label="Total Events"
            value="2.9M"
          />
          <StatCard
            icon={<AlertCircle className="h-6 w-6 text-warning" />}
            iconBg="bg-warning/20"
            label="Avg Error Rate"
            value="0.04%"
          />
        </div>

        {/* Search */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tags or partners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>

        {/* Tags List */}
        <div className="space-y-4">
          {filteredTags.map((tag) => (
            <TagCard key={tag.id} tag={tag} />
          ))}
        </div>
      </div>

      <CreateTagModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateTag}
      />
    </DashboardLayout>
  );
};

export default Tags;
