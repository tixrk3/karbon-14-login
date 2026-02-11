import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { Outlet } from "react-router-dom";
import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppLayout() {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b border-border px-4">
            <SidebarTrigger />
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-sm">
                  {user?.name?.charAt(0) || "A"}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-foreground leading-tight">{user?.name}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{user?.role}</p>
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
