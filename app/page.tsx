import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Hello World!</h2>
      <Link href="/users">Go to users page</Link>
    </main>
  );
}
