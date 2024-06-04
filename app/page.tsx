import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Top page</h1>
      <p>
        <Link href="/static">static page</Link>
      </p>
    </main>
  );
}
