import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostID = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

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
            <Link href={`/comments/${comments.id}`}>
              <a className="block hover:text-blue-400">{comments.body}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
