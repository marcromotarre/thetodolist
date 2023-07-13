import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import DashboardPage from "./pages/DashboardPage";
import { PageNavigationProvider } from "./providers/PageNavigationProvider";

function App() {
  return (
    <PageNavigationProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageNavigationProvider>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
