import Link from "next/link";
import { API_URL } from "src/utils/const";
import { useFetchArray } from "src/hooks/useFetchArray";

export const CommentListByPostID = (props) => {
  const { data, error, isLoading, isEmpty } = useFetchArray(
    props.id ? `${API_URL}/posts/${props.id}/comments` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (isEmpty) {
    return <div>{error.message}</div>;
  }

  if (data && data.length === 0) {
    return <div>データはからです</div>;
  }

  return (
    <ul className="space-y-2">
      {data.map((comments) => {
        return (
          <li key={comments.id} className="border-b pb-2">
            <Link href={`/comments/${comments.id}`} className="block hover:text-blue-400">
              {comments.body}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
