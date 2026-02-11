import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import karbon14Logo from "@/assets/karbon14-logo.png";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/dashboard");
    } else {
      toast({
        title: "Erreur de connexion",
        description: "E-mail ou mot de passe incorrect.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="glass-card w-full max-w-md rounded-2xl p-8 md:p-10">
      <div className="flex justify-center mb-8">
        <img src={karbon14Logo} alt="KARBON14" className="h-32 w-auto drop-shadow-2xl" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="Entrez votre e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 bg-background/50 border-border focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-foreground font-medium">Mot de passe</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-background/50 border-border focus:border-primary focus:ring-primary/20 placeholder:text-muted-foreground pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="text-right">
          <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
            Mot de passe oublié ?
          </a>
        </div>

        <Button type="submit" className="w-full h-12 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[hsl(270,70%,55%)]/25 bg-gradient-to-r from-[hsl(270,70%,55%)] to-[hsl(280,80%,60%)] text-white hover:from-[hsl(270,70%,50%)] hover:to-[hsl(280,80%,55%)]">
          Se connecter
        </Button>

        <Button
          type="button"
          variant="secondary"
          className="w-full h-12 font-semibold rounded-lg transition-all duration-200"
          onClick={() => window.open("https://karbon14.com", "_blank")}
        >
          Visitez le site KARBON14
        </Button>

        <p className="text-center text-sm text-muted-foreground pt-2">
          Platform version: 1.0.0
        </p>
      </form>
    </div>
  );
};
