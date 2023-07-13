import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import DefaultLayout from "./pages/layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/tasks" element={<TasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
