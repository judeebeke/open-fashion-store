import { useState } from "react";
import { blogPost, blogTags } from "../../store/localdata";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useLoaderData, Link } from "react-router-dom";
import SectionTitle from "../UI/SectionTitle";

import Trending from "../HomepageSections/Trending";
import ScrollToTop from "../Utils/ScrollToTop";
import Bookmark from "../UI/Bookmark";

const Blog = () => {
  const imageList = useLoaderData("blog-post");
  const [showFullPost] = useState(false);

  return (
    <main className="flex flex-wrap justify-center mt-6 items-center gap-4">
      <ScrollToTop />
      <div className="flex flex-col mt-3">
        <SectionTitle titletext="BLOG" />
        <Trending tagList={blogTags} />
      </div>
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
          <div
            key={post.tag}
            className="relative w-3/4 lg:w-72 h-80 mt-6 hover:scale-105 transition duration-300"
          >
            <div className="image-container">
              <img
                src={postImage.imageUrl}
                className="w-full h-80 object-cover"
                alt={post.title}
              />
              <div className="image-overlay"></div>
            </div>
            <span className="absolute bottom-2 left-4 w-11/12 text-offwhite">
              <h4 className="title">{post.title}</h4>
              {truncatedPost}
              <Link
                to={`${postImage.imageName}`}
                className="text-secondary text-base"
              >
                <span className="flex items-center gap-x-3">
                  See More <AiOutlineArrowRight />
                </span>
              </Link>
            </span>
            <div className="absolute top-2 right-4">
              <Bookmark />
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Blog;
