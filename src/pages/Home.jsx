import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div className="font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
      </main>

    </div>
  );
};
export default Home;
