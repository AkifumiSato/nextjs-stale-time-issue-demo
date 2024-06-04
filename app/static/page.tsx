import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Static Page</h1>
      <p>
        <Link href="/">Top page</Link>
      </p>
      <p>random: {Math.random()}</p>
    </main>
  );
}
