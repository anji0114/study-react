import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const UserList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/users`);

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>ユーザーがありません</div>;
  }

  if (data && data.length === 0) {
    return <div>データはからです</div>;
  }

  return (
    <ul className="grid grid-cols-2 gap-6">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link
              href={`users/${user.id}`}
              className="block bg-gray-50 p-4 shadow rounded hover:bg-gray-100"
            >
              <h2 className="text-lg font-bold truncate">{user.name}</h2>
              <p className="truncate">{user.email}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
