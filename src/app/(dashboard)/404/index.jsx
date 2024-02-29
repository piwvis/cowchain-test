import Navbar from "components/Navbar";
import { Header } from "./blocks/Header";

export function PageNotFound() {
  return (
    <div className="relative">
      <Navbar isTeamBg={true} isGradient={false} />
      <Header />
    </div>
  );
}
