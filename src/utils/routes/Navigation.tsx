import Layout from "components/Layout/Layout";
import Preloader from "components/Preloader/Preloader";
import Courses from "pages/Courses";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

export const Navigation = () => {

    return (
        <Suspense fallback={<Preloader active={true} />}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Courses />} />
                </Route>
            </Routes>
        </Suspense>
    );
};
