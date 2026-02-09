import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
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
      <motion.div 
        className="bg-card border border-border/50 shadow-2xl rounded-2xl p-8 md:p-10 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <img
            src={karbon14Logo}
            alt="KARBON14"
            className="h-28 w-auto"
          />
        </motion.div>

        {/* Welcome Text */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h1 className="text-2xl font-semibold text-foreground mb-1">Bienvenue</h1>
          <p className="text-muted-foreground text-sm">Connectez-vous à votre compte</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <Label htmlFor="email" className="text-foreground text-sm font-medium">
              Adresse e-mail
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="nom@exemple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-muted/30 border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-muted-foreground/50 transition-all duration-300"
            />
          </motion.div>

          {/* Password */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
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
                className="h-11 bg-muted/30 border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary/30 placeholder:text-muted-foreground/50 pr-11 transition-all duration-300"
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
          </motion.div>

          {/* Forgot Password Link */}
          <motion.div 
            className="text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <a
              href="#"
              className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Mot de passe oublié ?
            </a>
          </motion.div>

          {/* Login Button - Premium hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <motion.button
              type="submit"
              disabled={isLoading}
              className="relative w-full h-12 bg-primary text-primary-foreground font-medium rounded-xl overflow-hidden group disabled:opacity-50"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                style={{ backgroundSize: "200% 100%" }}
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Shine effect */}
              <span className="absolute inset-0 overflow-hidden">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </span>
              
              {/* Glow */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 blur-xl bg-primary transition-opacity duration-300" style={{ transform: "translateY(8px) scale(0.9)" }} />
              
              {/* Content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? "Connexion..." : "Se connecter"}
                {!isLoading && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />}
              </span>
            </motion.button>
          </motion.div>

          {/* Visit Site Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <motion.button
              type="button"
              className="relative w-full h-12 font-medium rounded-xl overflow-hidden group"
              onClick={() => window.open("https://karbon14.com", "_blank")}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner background */}
              <div className="absolute inset-[2px] rounded-[10px] bg-card transition-colors duration-300 group-hover:bg-card/80" />
              
              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))" }}
              />
              
              {/* Content */}
              <span className="relative z-10 flex items-center justify-center gap-2 text-foreground">
                Visitez le site KARBON14
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </form>
      </motion.div>

      {/* Platform Version */}
      <motion.p 
        className="text-center text-xs text-muted-foreground mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
      >
        KARBON14 Platform • Version 1.0.0
      </motion.p>
    </div>
  );
};
