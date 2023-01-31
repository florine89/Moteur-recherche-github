import PropTypes from 'prop-types';
import Post from '../post/index';

function Posts({ data }) {
  return (
    <div className="posts">
      {data.map((item) => (
        <Post
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

Posts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Posts;
