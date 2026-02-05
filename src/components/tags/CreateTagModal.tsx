import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Code2, Sparkles, Building2, Tag, X } from "lucide-react";
import { toast } from "sonner";

interface CreateTagModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (tag: {
    name: string;
    partner: string;
    tagType: string;
    placement: string;
    description: string;
  }) => void;
}

export const CreateTagModal = ({ isOpen, onClose, onSubmit }: CreateTagModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    partner: "",
    tagType: "",
    placement: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.partner) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    onSubmit(formData);
    toast.success("Tag créé avec succès !");
    setFormData({ name: "", partner: "", tagType: "", placement: "", description: "" });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold text-accent">
                Create Verification Tag
              </DialogTitle>
              <p className="text-sm text-muted-foreground">
                Generate a new ad verification tag for tracking and monitoring.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-1 text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          {/* Tag Configuration Header */}
          <div className="flex items-center gap-2 text-accent">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Tag Configuration
            </span>
          </div>

          {/* Tag Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Tag Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="e.g., Google AdX Display Tag"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-input border-border"
            />
          </div>

          {/* Partner & Tag Type Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Partner <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.partner}
                onValueChange={(value) => setFormData({ ...formData, partner: value })}
              >
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Select partner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Google AdX">Google AdX</SelectItem>
                  <SelectItem value="Amazon Publisher Services">
                    Amazon Publisher Services
                  </SelectItem>
                  <SelectItem value="Index Exchange">Index Exchange</SelectItem>
                  <SelectItem value="OpenX">OpenX</SelectItem>
                  <SelectItem value="PubMatic">PubMatic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-foreground flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Tag Type
              </Label>
              <Select
                value={formData.tagType}
                onValueChange={(value) => setFormData({ ...formData, tagType: value })}
              >
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="display">Display</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="native">Native</SelectItem>
                  <SelectItem value="header">Header</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Placement Location */}
          <div className="space-y-2">
            <Label htmlFor="placement" className="text-foreground">
              Placement Location
            </Label>
            <Input
              id="placement"
              placeholder="e.g., Homepage Header, Sidebar"
              value={formData.placement}
              onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
              className="bg-input border-border"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="Additional details about this tag..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="bg-input border-border min-h-20"
            />
          </div>

          {/* Info Box */}
          <div className="bg-secondary/30 border border-accent/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-accent">Automated Tag Generation</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Your verification tag will be automatically generated with a unique
                  identifier. Copy and paste the code into your website to start tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white"
            >
              Create Tag
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
