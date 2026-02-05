import { useLocation } from "react-router-dom";
import { LayoutDashboard, Building2, Tag, Users, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import karbon14Logo from "@/assets/karbon14-logo.png";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Partners", url: "/partners", icon: Building2 },
  { title: "Tags", url: "/tags", icon: Tag },
  { title: "Users", url: "/users", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
];

export const AppSidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 min-h-screen bg-sidebar sidebar-pattern flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-6 flex flex-col items-center border-b border-sidebar-border">
        <img
          src={karbon14Logo}
          alt="KARBON14"
          className="h-20 w-auto mb-2"
        />
        <span className="text-sidebar-foreground font-bold text-lg tracking-wide">
          KARBON14
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground transition-all duration-200 hover:bg-sidebar-accent/50 ${
                  isActive(item.url)
                    ? "bg-sidebar-primary/20 text-sidebar-primary border-l-2 border-sidebar-primary"
                    : ""
                }`}
                activeClassName="bg-sidebar-primary/20 text-sidebar-primary"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar className="h-10 w-10 bg-accent text-accent-foreground">
            <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
              SA
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              {user?.name || "Sarah Anderson"}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {user?.role || "Administrator"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
