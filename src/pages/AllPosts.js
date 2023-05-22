import { blogposts } from "../assets/data";
import Navbar from "../components/Navbar";
import PostSmall from "../components/PostSmall";

function AllPosts () {
    return (
        <div className="w-[100%] h-[auto] min-h-[100vh]">
            <Navbar />
            <div className="w-[100%] mt-10 px-16 grid grid-flow-row grid-cols-3">
                {
                    blogposts.map( ( post, index ) => {
                        return <PostSmall key={ index } post={ post } />
                    } )
                }
            </div>
        </div>
    );
}

export default AllPosts;