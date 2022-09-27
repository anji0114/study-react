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
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`users/${user.id}`}>
              <a>{`${user.name} (${user.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
