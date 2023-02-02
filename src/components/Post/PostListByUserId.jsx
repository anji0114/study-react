import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const PostListByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/users/${props.id}/posts` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データはからです</div>;
  }

  return (
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="block bg-gray-100 group p-3">
              <h2 className="font-bold text-xl group-hover:text-blue-500">{post.title}</h2>
              <p className="text-sm text-gray-500 group-hover:text-blue-400">{post.body}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
