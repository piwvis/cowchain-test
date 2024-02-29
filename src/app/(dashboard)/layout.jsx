import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function DashboardLayout({ children }) {
  return (
    <section>
      <div className="relative bg-black">
        <Navbar />
        {children}
        <Footer />
      </div>
    </section>
  );
}
