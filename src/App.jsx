import { useState, useEffect, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loading } from "components/loader/Loading";
import { ParallaxProvider } from "react-scroll-parallax";
import emailjs from "@emailjs/browser";
import { PageNotFound } from "pages/404";
import { Suspense } from "react";

const Home = lazy(() => import("pages/home"));
const Clients = lazy(() => import("pages/clients"));
const Cases = lazy(() => import("pages/cases"));
const Services = lazy(() => import("pages/services"));
const Policy = lazy(() => import("pages/policy"));
const Team = lazy(() => import("pages/team"));
const CaseStudiesStep = lazy(() => import("pages/case-studies/step"));
const CaseStudiesRetroBridge = lazy(
  () => import("pages/case-studies/retrobridge")
);
const Article = lazy(() => import("pages/article"));
const ScrollToTop = lazy(() => import("components/ScrollToTop"));

const CaseStudiesMarsan = lazy(() => import("pages/case-studies/marsan"));
const CaseStudiesEva = lazy(() => import("pages/case-studies/eva"));
const CaseStudiesTriend = lazy(() => import("pages/case-studies/triend"));
const CaseStudiesFinance = lazy(() => import("pages/case-studies/finance"));

function App() {
  useEffect(() => {
    // y();
    emailjs.init(import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    emailjs.init(import.meta.env.REACT_APP_DEV_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className="App">
      <ParallaxProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route
                path="/"
                element={<Home setBurgerOpen={setBurgerOpen} />}
              />

              <Route
                path="/clients"
                element={<Clients setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases"
                element={<Cases setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/payment"
                element={<CaseStudiesMarsan setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/wallet"
                element={<CaseStudiesEva setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/hotel"
                element={<CaseStudiesTriend setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/finance"
                element={<CaseStudiesFinance setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/move"
                element={<CaseStudiesStep setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/cases/bridge"
                element={
                  <CaseStudiesRetroBridge setBurgerOpen={setBurgerOpen} />
                }
              />

              <Route
                path="/blog/article"
                element={<Article setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/services"
                element={<Services setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/team"
                element={<Team setBurgerOpen={setBurgerOpen} />}
              />
              <Route
                path="/policy"
                element={<Policy setBurgerOpen={setBurgerOpen} />}
              />
              <Route path="*" status={404} element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ParallaxProvider>
    </div>
  );
}

export default App;
