import { useLoaderData, useParams } from "react-router-dom";
import { blogPost } from "../../store/localdata";
import ScrollToTop from "../Utils/ScrollToTop";

const Post = () => {
  const data = useLoaderData();
  const { blogid } = useParams();

  const currentPost = blogPost.filter((post) => {
    return blogid.includes(post.tag);
  });

  return (
    <main className="flex justify-center items-center mt-28 mb-9">
      <ScrollToTop />
      {currentPost.map((post) => (
        <article
          key={post.tag + blogid}
          className="flex-col flex gap-y-5 w-3/4"
        >
          <img
            src={data}
            className="w-full lg:w-96 object-cover"
            alt={post.title}
          />
          <span className="w-full">
            <h4 className="title text-title pb-4">{post.title}</h4>
            <p className="body text-body text-justify">{post.post}</p>
          </span>
          <span className="flex">
            <p className="sub-title-lower">
              Posted by: {post.author} on {post.date}
            </p>
          </span>
        </article>
      ))}
    </main>
  );
};

export default Post;
