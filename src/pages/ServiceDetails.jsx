import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import Details from "@/components/Details";

const ServiceDetails = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <TopNavbar />
      <main className="w-full">
        <Details />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
