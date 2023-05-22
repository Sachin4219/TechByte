import { blogposts } from "../assets/data";
import Navbar from "../components/Navbar";
import PostSmall from "../components/PostSmall";
import Footer from "../components/Footer";

function AllPosts () {
    return (
        <div className="w-[100%] h-[auto] min-h-[100vh]">
            <Navbar />
            <div className="w-[100%] mt-10 px-20 max-[500px]:px-5 max-[600px]:px-7 max-[700px]:px-10 max-[850px]:px-16 max-[1100px]:px-16 max-[1200px]:px-18 grid grid-flow-row grid-cols-1 min-[1300px]:grid-cols-3 min-[900px]:grid-cols-2">
                {
                    blogposts.map( ( post, index ) => {
                        return <PostSmall key={ index } idx={ index } post={ post } />
                    } )
                }
            </div>
            <Footer />
        </div>
    );
}

export default AllPosts;