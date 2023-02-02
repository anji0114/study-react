import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const CommentList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/comments`);

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
              prefetch={false}
            >
              {comments.body}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
