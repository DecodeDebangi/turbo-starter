import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      {user?.username}
      <div>Hello World</div>;
    </div>
  );
}
