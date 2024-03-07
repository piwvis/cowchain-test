import dynamic from "next/dynamic";

const Header = dynamic(() => import("./blocks/Header"));
const HomeContent = dynamic(() => import("./blocks/home-content"));

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/"
  }
};

export default function Page() {
  return (
    <div>
      <Header />
      <HomeContent />{" "}
    </div>
  );
}
