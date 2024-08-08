import Card from "@/components/card";
import H1 from "@/components/h1";

const projectDemos = [
  {
    id: 1,
    name: "Fast React Pizza",
    url: "https://fast-react-pizza-gamma-lovat.vercel.app/",
  },
  {
    id: 2,
    name: "WorldWise",
    url: "https://worldwise-lac.vercel.app/",
  },
  {
    id: 3,
    name: "Omnifood",
    url: "https://hendramchen.github.io/omnifood/",
  },
];
export default async function Home() {
  return (
    <>
      <section className="mb-8">
        <H1>Hello there! 👋</H1>
        <p>My name is Hendra, I am a web developer.</p>
        <p className="mb-5">
          Proficient in full-stack development and well-versed in a variety of
          programming languages, frameworks, and technologies.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectDemos.map((project) => (
            <li key={project.id}>
              <Card className="font-mono h-full">
                <H1>{project.name}</H1>
                <a
                  href={project.url}
                  target="_blank"
                  className="flex items-center gap-3"
                >
                  <div>Demo</div>
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
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
