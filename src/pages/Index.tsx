import { Navigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LoginForm } from "@/components/LoginForm";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to dashboard if already logged in
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Blob */}
        <div
          className="absolute -top-20 -left-20 w-80 h-80 bg-secondary/40 blob-shape animate-float-slow"
          style={{ animationDelay: "0s" }}
        />
        
        {/* Top Right Blob */}
        <div
          className="absolute -top-10 -right-20 w-96 h-96 bg-muted-foreground/20 blob-shape-2 animate-float"
          style={{ animationDelay: "2s" }}
        />
        
        {/* Bottom Left Blob */}
        <div
          className="absolute bottom-10 -left-32 w-72 h-72 bg-primary/20 blob-shape animate-float"
          style={{ animationDelay: "1s" }}
        />
        
        {/* Bottom Right Blob */}
        <div
          className="absolute -bottom-20 -right-10 w-80 h-80 bg-accent/15 blob-shape-2 animate-float-slow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Theme Toggle - Top Right */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;
