import Navbar from "../components/Navbar";
import Post from "../components/Post";

function SinglePost () {
    return (
        <div className="w-[100%] h-auto min-h-[100vh] flex flex-col items-center">
            <Navbar />
            <Post />
        </div>
    );
}

export default SinglePost;