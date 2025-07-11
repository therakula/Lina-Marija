import Link from "next/link";

export default async function NotFound() {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>This page you&#39;re looking for doesn&#39;t exist</p>
      <Link href="/">Home</Link>
    </div>
  );
}
