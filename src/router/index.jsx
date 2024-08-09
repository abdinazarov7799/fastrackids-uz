import React, {Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../layouts/Layout.jsx";
import HomePage from "../modules/home/pages/HomePage.jsx";
import OverlayLoader from "../components/OverlayLoader.jsx";
import NotFoundPage from "../components/NotFoundPage.jsx";
import AboutUsPage from "../modules/about-us/pages/AboutUsPage.jsx";
import CoursesPage from "../modules/courses/pages/CoursesPage.jsx";
import LocationsPage from "../modules/locations/pages/LocationsPage.jsx";
import TestYourChildPage from "../modules/test-your-child/pages/TestYourChildPage.jsx";
import FranchisePage from "../modules/franchise/pages/FranchisePage.jsx";
import ContactPage from "../modules/contact/pages/ContactPage.jsx";
import BlogsPage from "../modules/blogs/pages/BlogsPage.jsx";
import CareersPage from "../modules/careers/pages/CareersPage.jsx";

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
                        <Route
                            path={"/locations"}
                            index
                            element={<LocationsPage />}
                        />
                        <Route
                            path={"/blogs"}
                            index
                            element={<BlogsPage />}
                        />
                        <Route
                            path={"/franchise"}
                            index
                            element={<FranchisePage />}
                        />
                        <Route
                            path={"/careers"}
                            index
                            element={<CareersPage />}
                        />
                        <Route
                            path={"/contact"}
                            index
                            element={<ContactPage />}
                        />
                        <Route
                            path={"/test-your-child"}
                            index
                            element={<TestYourChildPage />}
                        />
                        <Route path={"*"} element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;