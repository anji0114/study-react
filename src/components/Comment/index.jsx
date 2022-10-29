import { useComment } from "src/hooks/useComment";

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  console.log(data);

  return (
    <div>
      <p>{data.body}</p>
      <ul>
        <li>{data.name}</li>
        <li>{data.email}</li>
      </ul>

      <h2>元の記事</h2>
    </div>
  );
};
