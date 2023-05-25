import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import Navbar from "../components/Navbar";
import RecentPosts from "../components/RecentPosts";

function Home() {
  return (
    <div>
      <Navbar at={"home"} />
      <HomeHeader />
      <RecentPosts />
      <Footer />
    </div>
  );
}

export default Home;
