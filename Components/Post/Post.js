import Link from "next/link";

const Post = ({ post }) => {
    return (
        <div className="card bg-base-100 shadow-xl mb-10">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <Link href={`/posts/${post?.id}`} className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Post;