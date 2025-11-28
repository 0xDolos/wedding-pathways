import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Rsvps from "./pages/admin/Rsvps";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Admin RSVPs page – password protected inside its own component */}
          <Route path="/admin/rsvps" element={<Rsvps />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
