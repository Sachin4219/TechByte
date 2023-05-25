import { blogposts } from "../assets/data";
import Navbar from "../components/Navbar";
import PostSmall from "../components/PostSmall";
import Footer from "../components/Footer";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { base_url } from "../assets/data";
import axios from "axios";
import { format } from "date-fns";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await axios.get(`${base_url}posts`);
        let p = resp.data.response;
        p.map((post) => {
          post.date = format(new Date(post.date), "dd/MM/yyyy");
        });
        setPosts(p);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("[Get All posts]", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[100%] h-[auto] min-h-[100vh]">
      <Navbar at={"all"} />
      <div className="w-[100%] px-20 max-[500px]:px-5 max-[600px]:px-7 max-[700px]:px-10 max-[850px]:px-16 max-[1100px]:px-16 max-[1200px]:px-18 grid grid-flow-row grid-cols-1 min-[1300px]:grid-cols-3 min-[900px]:grid-cols-2">
        {posts.map((post, index) => {
          return <PostSmall key={index} post={post} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default AllPosts;
