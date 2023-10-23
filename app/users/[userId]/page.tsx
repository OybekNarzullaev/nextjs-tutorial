import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  return {
    title: `${user.name}`,
    description: `This is a page of ${user.name}`,
  };
};

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  //   const [user, posts] = await Promise.all([userData, userPostsData]);

  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
