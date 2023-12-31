import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import DashboardPage from "./pages/DashboardPage";
import { PageNavigationProvider } from "./providers/PageNavigationProvider";
import { TasksProvider } from "./providers/TasksProvider";
import CreateTaskPage from "./pages/CreateTaskPage";

function App() {
  return (
    <PageNavigationProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/task/create" element={<CreateTaskPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </PageNavigationProvider>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
