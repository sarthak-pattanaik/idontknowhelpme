import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Layout from "@/components/layout/Layout";
import ScrollToTop from "@/components/common/ScrollToTop";

// Import main site pages
import Home from "@/pages/Home";
import ProductOverview from "@/pages/ProductOverview";
import HomemakerProduct from "@/pages/HomeakerProduct";
import IntelligenceProduct from "@/pages/IntelligenceProduct";
import SnipperProduct from "@/pages/SniperProduct";
import SignalsProduct from "@/pages/SignalsProduct";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";

// Import product app pages
import HomemakerApp from "@/pages/HomemakerApp";
import IntelligenceApp from "@/pages/IntelligenceApp";
import SnipperApp from "@/pages/SniperApp";
import SignalsApp from "@/pages/SignalsApp";

// Import auth pages
import LoginPage from "@/pages/login";
import SignupPage from "@/pages/signup";
import StartFreeTrialPage from "@/pages/start-free-trial";
import CompleteProfilePage from "@/pages/complete-profile";
import ProductAccessPage from "@/pages/product-access";
import ProductSelectionPage from "@/pages/product-selection";

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

// App routes (without header/footer layout)
const StandaloneRoutes = [
  // Auth routes
  { path: "/login", component: LoginPage },
  { path: "/signup", component: SignupPage },
  { path: "/start-free-trial", component: StartFreeTrialPage },
  { path: "/complete-profile", component: CompleteProfilePage },
  { path: "/product-access", component: ProductAccessPage },
  { path: "/product-selection", component: ProductSelectionPage },
  
  // Product app routes - includes child routes (protected by authentication)
  { 
    path: "/app/homemaker", 
    component: () => {
      // Check if user is authenticated
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // Redirect to signup if not authenticated
        window.location.href = '/signup';
        return null;
      }
      return <HomemakerApp />;
    } 
  },
  { 
    path: "/app/homemaker/:subpage", 
    component: () => {
      // Check if user is authenticated
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // Redirect to signup if not authenticated
        window.location.href = '/signup';
        return null;
      }
      return <HomemakerApp />;
    } 
  },
  { 
    path: "/app/intelligence", 
    component: () => {
      // Check if user is authenticated
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // Redirect to signup if not authenticated
        window.location.href = '/signup';
        return null;
      }
      return <IntelligenceApp />;
    } 
  },
  { 
    path: "/app/sniper", 
    component: () => {
      // Check if user is authenticated
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // Redirect to signup if not authenticated
        window.location.href = '/signup';
        return null;
      }
      return <SnipperApp />;
    } 
  },
  { 
    path: "/app/signals", 
    component: () => {
      // Check if user is authenticated
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        // Redirect to signup if not authenticated
        window.location.href = '/signup';
        return null;
      }
      return <SignalsApp />;
    } 
  },
];

function Router() {
  return (
    <>
      {/* Component that scrolls to top on route changes */}
      <ScrollToTop />
      
      {/* Routes without layout (auth & standalone app pages) */}
      <Switch>
        {StandaloneRoutes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
        
        {/* Routes with main layout (header, footer) */}
        <Route>
          <Layout>
            <Switch>
              {RoutesWithLayout.map(({ path, component }) => (
                <Route key={path} path={path} component={component} />
              ))}
              
              {/* 404 route - must be at the end within the layout */}
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Route>
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
