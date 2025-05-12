import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Visa from "./pages/Visa";
import Insurance from "./pages/Insurance";
import SimCards from "./pages/SimCards";
import Restaurants from "./pages/Restaurants";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/flights" component={Flights} />
      <Route path="/visa" component={Visa} />
      <Route path="/insurance" component={Insurance} />
      <Route path="/sim-cards" component={SimCards} />
      <Route path="/restaurants" component={Restaurants} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;