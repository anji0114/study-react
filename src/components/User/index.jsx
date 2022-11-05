import { PostsByUserId } from "src/components/Posts/PostsByUserId";
import { useUser } from "src/hooks/useUser";

export const UserComponent = () => {
  const { data, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-3xl">{data.name}</h1>
      <h2 className="text-xl font-bold mt-10">詳細情報</h2>

      <ul className="list-inside list-disc mt-4 text-lg">
        <li>メール ： {data.email}</li>
        <li>ユーザーネーム ： {data.username}</li>
        <li>アドレス ： {data.address.city}</li>
        <li>Webサイト ： {data.website}</li>
      </ul>

      <h2 className="text-xl font-bold mt-10">投稿</h2>
      <div className="mt-4">
        <PostsByUserId id={data.id} />
      </div>
    </div>
  );
};
