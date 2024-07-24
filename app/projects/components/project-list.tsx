import Card from "@/components/card";

interface RepoType {
  id: number;
  name: string;
  stargazers_count: number;
  description: string;
}

export default async function ProjectList() {
  const response = await fetch(
    "https://api.github.com/users/hendramchen/repos"
    // { cache: 'no-store' }
  );
  const repos = await response.json();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo: RepoType) => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">{repo.name}</div>
              <div>🌟{repo.stargazers_count}</div>
            </div>

            <div>{repo.description}</div>
          </Card>
        </li>
      ))}
    </ul>
  );
}
