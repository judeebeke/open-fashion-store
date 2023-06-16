import { flexCenter } from "../../style";
import { PropTypes } from "prop-types";

const Trending = (props) => {
  let { tagList, tagsTitle, hash } = props;

  return (
    <section className={`${flexCenter} flex-col gap-y-5 py-12 px-6 `}>
      <h2 className="text-2xl uppercase">{tagsTitle}</h2>
      <div className={`${flexCenter} flex-wrap gap-3`}>
        {tagList.map((tag) => {
          return (
            <p
              key={tag}
              className="bg-inputbg rounded-full px-3 w-fit text-title text-xl"
            >
              {hash ? "#" + tag : tag}
            </p>
          );
        })}
      </div>
    </section>
  );
};

Trending.propTypes = {
  tagList: PropTypes.array.required,
  tagsTitle: PropTypes.string,
  hash: PropTypes.string,
};

export default Trending;
