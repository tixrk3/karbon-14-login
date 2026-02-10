import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockUsers = [
  { id: 1, name: "Admin", email: "Admin@gmail.com", role: "Administrateur" },
  { id: 2, name: "Jean Dupont", email: "jean@example.com", role: "Éditeur" },
  { id: 3, name: "Marie Martin", email: "marie@example.com", role: "Lecteur" },
];

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Users</h1>
          <p className="text-muted-foreground">Gérez les utilisateurs</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Nouvel utilisateur
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Nom</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Email</th>
                <th className="text-left p-4 text-sm font-medium text-muted-foreground">Rôle</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                  <td className="p-4 text-sm text-foreground">{user.name}</td>
                  <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                  <td className="p-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                      {user.role}
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

export default UsersPage;
