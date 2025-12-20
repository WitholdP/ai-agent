import { User } from "@repo/application-types/business-types/user";

export default function Home() {
  const user: User = {
    id: "1",
    name: "John Doe",
  };

  return (
    <div>
      <h1>Hello {user.name}</h1>
    </div>
  );
}
