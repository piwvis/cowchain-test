import dynamic from 'next/dynamic'

const Header = dynamic(() => import("./blocks/Header"));
const HomeContent = dynamic(() => import("./blocks/home-content"));

export default function Page() {
  return (
    <div>
      <Header />
      <HomeContent />{" "}
    </div>
  );
}
