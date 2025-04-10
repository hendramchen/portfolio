export default function Page({ params }: { params: { id: string } }) {
  return <div>Page ID: {params.id}</div>;
}
