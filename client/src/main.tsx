import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Link } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { CreatePost } from "./pages/CreatePost.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="flex flex-col h-screen justify-center items-center gap-10">
        <h1 className="text-5xl">Sorry,page not found</h1>
        <Link className="bg-blue-300 rounded-xl p-4 text-white" to={"/"}>Go back</Link>
      </div>
    ),
  },
  {
    path: '/create-post',
    element: <CreatePost/>
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
