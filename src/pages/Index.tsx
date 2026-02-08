import { Navigate } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LoginForm } from "@/components/LoginForm";
import { useAuth } from "@/contexts/AuthContext";
import { FadeIn } from "@/components/layout/PageTransition";

const FloatingAtom = lazy(() => import("@/components/3d/FloatingAtom"));

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow3D(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* 3D Atom Background */}
      {show3D && (
        <Suspense fallback={null}>
          <FloatingAtom />
        </Suspense>
      )}

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-50">
        <FadeIn delay={0.5}>
          <ThemeToggle />
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <FadeIn delay={0.2}>
          <LoginForm />
        </FadeIn>
      </div>
    </div>
  );
};

export default Index;
