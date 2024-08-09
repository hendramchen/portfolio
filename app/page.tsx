import Card from "@/components/card";
import H1 from "@/components/h1";
import profile from "./../public/images/profile-picture.png";
import Image from "next/image";

const projectDemos = [
  {
    id: 1,
    name: "Fast React Pizza",
    url: "https://fast-react-pizza-gamma-lovat.vercel.app/",
    sourceUrl: "https://github.com/hendramchen/fast-react-pizza",
  },
  {
    id: 2,
    name: "WorldWise",
    url: "https://worldwise-lac.vercel.app/",
    sourceUrl: "https://github.com/hendramchen/worldwise",
  },
  {
    id: 3,
    name: "Omnifood",
    url: "https://hendramchen.github.io/omnifood/",
    sourceUrl: "https://github.com/hendramchen/omnifood",
  },
];
export default async function Home() {
  return (
    <>
      <section className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={profile}
            alt="Hendra"
            className="w-24 h-24 rounded"
            priority={true}
            quality={50}
            placeholder="blur"
          />
          <div>
            <h1>Hello there! 👋</h1>
            <p>My name is Hendra, I am a full-stack developer.</p>
            <p>I live in Bali, Indonesia 🇮🇩</p>
          </div>
        </div>

        <H1>These are my demo projects.</H1>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectDemos.map((project) => (
            <li key={project.id}>
              <Card className="font-mono h-full">
                <H1>{project.name}</H1>
                <div className="flex gap-6">
                  <ButtonLink url={project.sourceUrl} title="Source" />
                  <ButtonLink url={project.url} title="Demo" />
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function ButtonLink({ url, title }: { url: string; title: string }) {
  return (
    <a href={url} target="_blank" className="flex items-center gap-3">
      <div>{title}</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </div>
    </a>
  );
}
