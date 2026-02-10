import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockTags = [
  { id: 1, name: "Premium", color: "bg-primary/20 text-primary" },
  { id: 2, name: "VIP", color: "bg-accent/20 text-accent" },
  { id: 3, name: "Nouveau", color: "bg-secondary/20 text-secondary-foreground" },
  { id: 4, name: "Actif", color: "bg-accent/20 text-accent" },
];

const TagsPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Tags</h1>
          <p className="text-muted-foreground">Gérez vos tags</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau tag
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockTags.map((tag) => (
          <Card key={tag.id} className="bg-card border-border hover:border-primary/30 transition-colors cursor-pointer">
            <CardContent className="p-4 flex items-center gap-3">
              <span className={`text-sm px-3 py-1 rounded-full ${tag.color}`}>
                {tag.name}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TagsPage;
