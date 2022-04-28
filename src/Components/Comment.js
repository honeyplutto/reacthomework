import './Comment.css'

const Comment = ({ comment }) => {
    const { text, rate } = comment;

    return (
        <div className="comment__text">
            {text}
            <p className="comment__rate">
                {rate}
            </p>
        </div>
    );
};

export default Comment;