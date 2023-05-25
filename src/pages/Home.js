import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar at={"home"} />
      <HomeHeader />
      <Footer />
    </div>
  );
}

export default Home;
