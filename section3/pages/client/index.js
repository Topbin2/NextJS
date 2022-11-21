import Link from "next/link";

const ClientPage = () => {
  const client = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {client.map((el) => (
          <li key={el.id}>
            <Link href={{ pathname: "/client/[id]", query: { id: el.id } }}>
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
