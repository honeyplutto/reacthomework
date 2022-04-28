import Post from "./Post";

const Pool = ({ posts }) => {
    return (
        <>
            {posts.map(post => <Post key={post.id} post={post} />)}
        </>
    );
};

export default Pool;