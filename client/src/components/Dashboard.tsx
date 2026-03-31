import { useFetchUserQuery } from "../store";

export default function Dashboard() {
  const { data, isFetching, error } = useFetchUserQuery(undefined);

  return <div>Dashboard {data}</div>;
}
