import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <div className="h-screen w-screen bg-background">
      <div className="bg-background p-2">
        <Outlet />
      </div>
    </div>
  );
}
