import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Bell, Settings } from "lucide-react";

export function AppLayout() {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b border-border px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger />
              <span className="text-sm font-medium text-muted-foreground">Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button className="relative text-muted-foreground hover:text-foreground">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-destructive" />
              </button>
              <button className="text-muted-foreground hover:text-foreground">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-2 ml-2">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-sm">
                  {user?.name?.charAt(0) || "S"}{user?.name?.split(" ")[1]?.charAt(0) || "A"}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-foreground leading-none">{user?.name || "Sarah Anderson"}</p>
                  <p className="text-xs text-muted-foreground">{user?.role || "Administrator"}</p>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
