import AppLayout from "AppLayout.tsx";
import AboutPage from "components/Pages/AboutPage/index.tsx";
import ChaptersPage from "components/Pages/ChaptersPage/index.tsx";
import CompetitionPage from "components/Pages/CompetitionPage/index.tsx";
import ErrorPage from "components/Pages/ErrorPage/index.tsx";
import RegisterPage from "components/Pages/RegisterPage/index.tsx";
import ResourcesPage from "components/Pages/ResourcesPage/index.tsx";
import SponsorsPage from "components/Pages/SponsorsPage/index.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./components/Pages/MainPage/index.tsx";
import "./index.scss";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={<AppLayout />}
                errorElement={
                    <AppLayout>
                        <ErrorPage />
                    </AppLayout>
                }
            >
                <Route errorElement={<ErrorPage />}>
                    <Route index element={<MainPage />} />
                    <Route path="/competition" element={<CompetitionPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route path="/chapters" element={<ChaptersPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/sponsors" element={<SponsorsPage />} />
                </Route>
            </Route>
            <Route path="/register" element={<RegisterPage />} />
        </>
    ),
    { basename: "/socal" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
