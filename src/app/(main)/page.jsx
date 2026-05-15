import Banner from "@/components/home/Banner";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import MarqueeSection from "@/components/home/MarqueeSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <MarqueeSection />
      <FeaturedBooks />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
