import { useState } from "react";
import { blogPost } from "../../store/localdata";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useLoaderData, Link } from "react-router-dom";

const Blog = () => {
  const imageList = useLoaderData();
  const [showFullPost] = useState(false);

  // const togglePost = () => {
  //   setShowFullPost(!showFullPost);
  // };

  return (
    <main className="flex flex-wrap justify-center items-center gap-4">
      {blogPost.map((post) => {
        const postImage = imageList.find((item) => {
          return item.imageName.includes(post.tag);
        });

        const isLongPost = post.post.split(" ").length > 20;

        const truncatedPost =
          isLongPost && !showFullPost ? (
            <p className="text-sm">{`${post.post
              .split(" ")
              .slice(0, 20)
              .join(" ")}...`}</p>
          ) : (
            post.post
          );

        return (
          <div key={post.tag} className="relative w-3/4 lg:w-72 h-80">
            <div className="image-container hover:scale-105">
              <img
                src={postImage.imageUrl}
                className="w-full h-80 object-cover"
                alt={post.title}
              />
              <div className="image-overlay"></div>
            </div>
            <span className="absolute bottom-2 left-2 w-11/12 text-offwhite">
              <h4 className="title">{post.title}</h4>
              {truncatedPost}
              <Link to={`/${post.tag}`} className="text-secondary text-base">
                <span className="flex items-center gap-x-3">
                  See More <AiOutlineArrowRight />
                </span>
              </Link>
            </span>
          </div>
        );
      })}
    </main>
  );
};

export default Blog;
