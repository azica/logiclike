import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

import 'normalize.css';
import './utils/style.scss'

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>

);

reportWebVitals();
