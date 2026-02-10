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
    <aside className="w-72 min-h-screen bg-sidebar flex flex-col border-r border-sidebar-border">
      {/* Logo */}
      <div className="p-8 flex flex-col items-center border-b border-sidebar-border/50">
        <img
          src={karbon14Logo}
          alt="KARBON14"
          className="h-28 w-auto drop-shadow-lg"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.url}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sidebar-foreground/80 transition-all duration-200 hover:bg-sidebar-accent/30 hover:text-sidebar-foreground ${
                  isActive(item.url)
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold shadow-lg"
                    : ""
                }`}
                activeClassName="bg-sidebar-accent text-sidebar-accent-foreground"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border/50">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-sidebar-accent/20">
          <Avatar className="h-10 w-10 bg-primary text-primary-foreground">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-sm">
              SA
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-sidebar-foreground truncate">
              {user?.name || "Sarah Anderson"}
            </p>
            <p className="text-xs text-sidebar-foreground/60 truncate">
              {user?.role || "Administrator"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
