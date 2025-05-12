import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyFooterCTA from "@/components/layout/StickyFooterCTA";

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

function Router() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/product" component={ProductOverview} />
          <Route path="/product/homemaker" component={HomemakerProduct} />
          <Route path="/product/intelligence" component={IntelligenceProduct} />
          <Route path="/product/snipper" component={SnipperProduct} />
          <Route path="/product/signals" component={SignalsProduct} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <StickyFooterCTA />
      <Footer />
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
