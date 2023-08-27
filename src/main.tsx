import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Root from "./routes/Root.tsx";
import MainPage from "./components/MainPage/index.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="/" element={<MainPage />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* <Navbar /> */}
        <RouterProvider router={router} />
    </React.StrictMode>
);
