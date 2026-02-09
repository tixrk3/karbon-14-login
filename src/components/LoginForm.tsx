import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import karbon14Logo from "@/assets/karbon14-logo.png";
import { toast } from "sonner";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const success = login(email, password);
    
    if (success) {
      toast.success("Connexion réussie !");
      navigate("/dashboard");
    } else {
      toast.error("Email ou mot de passe incorrect");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md">
      {/* Clean card */}
      <div className="bg-card border border-border/50 shadow-lg rounded-2xl p-8 md:p-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src={karbon14Logo}
            alt="KARBON14"
            className="h-28 w-auto"
          />
        </div>

        {/* Welcome Text */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-foreground mb-1">Bienvenue</h1>
          <p className="text-muted-foreground text-sm">Connectez-vous à votre compte</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground text-sm font-medium">
              Adresse e-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="nom@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-muted/30 border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground text-sm font-medium">
              Mot de passe
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 bg-muted/30 border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-muted-foreground/50 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Mot de passe oublié ?
            </a>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            {isLoading ? "Connexion..." : "Se connecter"}
          </Button>

          {/* Visit Site Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full h-11 border-border hover:bg-muted/50 text-foreground font-medium rounded-lg transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            onClick={() => window.open("https://karbon14.com", "_blank")}
          >
            Visitez le site KARBON14
          </Button>
        </form>
      </div>

      {/* Platform Version */}
      <p className="text-center text-xs text-muted-foreground mt-6">
        KARBON14 Platform • Version 1.0.0
      </p>
    </div>
  );
};
