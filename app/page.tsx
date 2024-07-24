import H1 from "@/components/h1";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="mb-8">
        <H1>Welcome to my page!</H1>
        <p>My name is Hendra, I am a web developer.</p>
        <p>
          Checkout my{" "}
          <Link href="/about/projects" className="underline">
            projects
          </Link>
          ,{" "}
          <Link href="/photos" className="underline">
            photos
          </Link>{" "}
          and{" "}
          <Link href="/blog" className="underline">
            blog
          </Link>
          .
        </p>
      </section>
    </>
  );
}
