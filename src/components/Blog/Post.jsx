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
    <main className="flex justify-center items-center my-9">
      <ScrollToTop />
      {currentPost.map((post) => (
        <article
          key={post.tag + blogid}
          className="flex-col flex gap-y-5 w-3/4 lg:w-72"
        >
          <img src={data} className="w-full object-cover" alt={post.title} />
          <span className="w-11/12">
            <h4 className="title text-title pb-4">{post.title}</h4>
            <p className="body text-body text-justify">{post.post}</p>
          </span>
        </article>
      ))}
    </main>
  );
};

export default Post;
