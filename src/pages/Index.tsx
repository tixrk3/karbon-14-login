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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Gradient Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Purple Gradient Orb - Top Right */}
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-3xl animate-float-slow"
          style={{ animationDelay: "0s" }}
        />
        
        {/* Teal Gradient Orb - Bottom Left */}
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/25 via-accent/15 to-transparent blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        
        {/* Small Accent Orb - Center Left */}
        <div
          className="absolute top-1/3 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl animate-float-slow"
          style={{ animationDelay: "1s" }}
        />

        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Theme Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-50">
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
