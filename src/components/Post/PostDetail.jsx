import Head from "next/head";
import { useRouter } from "next/router";
// hooks
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";
// components
import { UserNameByUserId } from "src/components/User/UserNameByUserId";
import { CommentListByPostID } from "src/components/Comment/CommentListByPostID";

export const PostDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL}/posts/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>

      <UserNameByUserId id={data.userId} />
      <h1 className="text-3xl font-bold mt-2">{data?.title}</h1>
      <p className="text-xl text-gray-900 mt-2">{data?.body}</p>
      <h2 className="font-bold text-xl mt-10">コメント一覧</h2>
      <div className="mt-2">
        <CommentListByPostID id={data.id} />
      </div>
    </div>
  );
};
