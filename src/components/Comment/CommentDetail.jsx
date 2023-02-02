import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";
import { useFetch } from "src/hooks/useFetch";
import { PostTitleByCommentId } from "src/components/Post/PostTitleByCommentId";

export const CommentDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div className="text-lg">
        Created by {data.name}（{data.email}）
      </div>
      <p className="text-xl font-bold mt-4">{data.body}</p>
      <h2 className="font-bold text-xl mt-10">元の記事</h2>
      <div className="mt-2">
        <PostTitleByCommentId id={data.postId} />
      </div>
    </div>
  );
};
