import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/components/layout/Layout";

// Import main site pages
import Home from "@/pages/Home";
import ProductOverview from "@/pages/ProductOverview";
import HomemakerProduct from "@/pages/HomeakerProduct";
import IntelligenceProduct from "@/pages/IntelligenceProduct";
import SnipperProduct from "@/pages/SnipperProduct";
import SignalsProduct from "@/pages/SignalsProduct";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

// Import auth pages
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import StartFreeTrialPage from "@/pages/start-free-trial";
import CompleteProfilePage from "@/pages/complete-profile";
import ProductAccessPage from "@/pages/product-access";

// Define routes with or without layout
const RoutesWithLayout = [
  { path: "/", component: Home },
  { path: "/product", component: ProductOverview },
  { path: "/product/homemaker", component: HomemakerProduct },
  { path: "/product/intelligence", component: IntelligenceProduct },
  { path: "/product/snipper", component: SnipperProduct },
  { path: "/product/signals", component: SignalsProduct },
  { path: "/pricing", component: Pricing },
  { path: "/blog", component: Blog },
  { path: "/blog/:slug", component: BlogPost },
  { path: "/about", component: About },
];

// Auth routes (without header/footer layout)
const AuthRoutes = [
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignupPage },
  { path: "/start-free-trial", component: StartFreeTrialPage },
  { path: "/complete-profile", component: CompleteProfilePage },
  { path: "/product-access", component: ProductAccessPage },
];

function Router() {
  return (
    <>
      {/* Routes with main layout (header, footer) */}
      <Layout>
        <Switch>
          {RoutesWithLayout.map(({ path, component }) => (
            <Route key={path} path={path} component={component} />
          ))}
          
          {/* 404 route - must be at the end within the layout */}
          <Route component={NotFound} />
        </Switch>
      </Layout>
      
      {/* Routes without layout (auth pages) */}
      <Switch>
        {AuthRoutes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Switch>
      
      <Toaster />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
