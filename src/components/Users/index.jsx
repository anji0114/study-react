import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

export const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
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
