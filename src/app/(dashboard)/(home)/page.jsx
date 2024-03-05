
import { lazy } from "react";

const Header = lazy(() => import("./blocks/Header"));
const HomeContent = lazy(() => import("./blocks/home-content"));

export default function Page() {
  return (
    <div>
      <Header />
      <HomeContent />{" "}
    </div>
  );
}
