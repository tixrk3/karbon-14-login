import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockPartners = [
  { id: 1, name: "Partenaire Alpha", email: "alpha@example.com", status: "Actif" },
  { id: 2, name: "Partenaire Beta", email: "beta@example.com", status: "Actif" },
  { id: 3, name: "Partenaire Gamma", email: "gamma@example.com", status: "Inactif" },
];

const Partners = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Partners</h1>
          <p className="text-muted-foreground">Gérez vos partenaires</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouveau partenaire
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Nom</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Email</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockPartners.map((partner) => (
                <tr key={partner.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="p-4 text-sm text-foreground">{partner.name}</td>
                  <td className="p-4 text-sm text-muted-foreground">{partner.email}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${partner.status === "Actif" ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                      {partner.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Partners;
