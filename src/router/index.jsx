import React, {Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout.jsx";
import HomePage from "../modules/home/pages/HomePage.jsx";
import OverlayLoader from "../components/OverlayLoader.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import AboutUsPage from "../modules/about-us/pages/AboutUsPage.jsx";
import CoursesPage from "../modules/courses/pages/CoursesPage.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<OverlayLoader />}>
                <Routes>
                    <Route path={"/"} element={<Layout />}>
                        <Route
                            path={"/"}
                            index
                            element={<HomePage />}
                        />
                        <Route
                            path={"/about-us"}
                            index
                            element={<AboutUsPage />}
                        />
                        <Route
                            path={"/courses"}
                            index
                            element={<CoursesPage />}
                        />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;