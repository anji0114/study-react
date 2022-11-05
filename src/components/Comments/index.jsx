import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
    <ul className="space-y-4">
      {data.map((comments) => {
        return (
          <li key={comments.id} className="border-b pb-4">
            <Link
              href={`comments/${comments.id}`}
              className="block hover:text-blue-400"
            >
              {comments.body}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
