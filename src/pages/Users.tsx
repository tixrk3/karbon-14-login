import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users as UsersIcon, UserCheck, UserX, Search, Plus, MoreVertical } from "lucide-react";

const usersData = [
  {
    id: 1,
    name: "Sarah Anderson",
    email: "sarah.anderson@karbon14.com",
    role: "Administrator",
    status: "active",
    lastActive: "Just now",
    initials: "SA",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@karbon14.com",
    role: "Manager",
    status: "active",
    lastActive: "2 hours ago",
    initials: "MC",
  },
  {
    id: 3,
    name: "Emily Roberts",
    email: "emily.roberts@karbon14.com",
    role: "Analyst",
    status: "active",
    lastActive: "1 day ago",
    initials: "ER",
  },
  {
    id: 4,
    name: "James Wilson",
    email: "james.wilson@karbon14.com",
    role: "Viewer",
    status: "inactive",
    lastActive: "1 week ago",
    initials: "JW",
  },
];

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Users</h1>
            <p className="text-muted-foreground mt-1">
              Manage team members and their permissions
            </p>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            <Plus className="h-4 w-4" />
            Add User
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            icon={<UsersIcon className="h-6 w-6 text-primary" />}
            iconBg="bg-primary/20"
            label="Total Users"
            value={usersData.length.toString()}
          />
          <StatCard
            icon={<UserCheck className="h-6 w-6 text-accent" />}
            iconBg="bg-accent/20"
            label="Active Users"
            value={usersData.filter((u) => u.status === "active").length.toString()}
          />
          <StatCard
            icon={<UserX className="h-6 w-6 text-destructive" />}
            iconBg="bg-destructive/20"
            label="Inactive Users"
            value={usersData.filter((u) => u.status === "inactive").length.toString()}
          />
        </div>

        {/* Search */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="stat-card overflow-hidden p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">User</TableHead>
                <TableHead className="text-muted-foreground">Role</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Last Active</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="border-border">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9 bg-accent text-accent-foreground">
                        <AvatarFallback className="bg-accent text-accent-foreground text-sm font-semibold">
                          {user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-foreground">{user.role}</span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`status-badge ${
                        user.status === "active" ? "status-active" : "status-inactive"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          user.status === "active" ? "bg-accent" : "bg-muted-foreground"
                        }`}
                      />
                      {user.status === "active" ? "Active" : "Inactive"}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{user.lastActive}</TableCell>
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

export default UsersPage;
