import { useComment } from "src/hooks/useComment";

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.body}</p>
      <p>{data.email}</p>
    </div>
  );
};
