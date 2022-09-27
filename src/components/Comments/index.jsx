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
    <ol>
      {data.map((comments) => {
        return (
          <li key={comments.id}>
            <Link href={`comments/${comments.id}`}>
              <a>{comments.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
