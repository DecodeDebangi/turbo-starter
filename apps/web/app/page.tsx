import { prismaClient } from "@repo/db/client";

export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      <div>Hello World</div>; My name is Debangi. This is my test CI/CD
      pipeline.
    </div>
  );
}
