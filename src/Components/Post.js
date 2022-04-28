import Comments from "./Comments.js";
import './Post.css'

const Post = ({ post }) => {
    const { title, comments, disabled } = post;

    return (
            <div id="list" className={disabled ? 'post disabled' : 'post'}>
                <h2 className="post__title">{title}</h2>
                <Comments comments={comments} />
            </div>
    );
};

export default Post;