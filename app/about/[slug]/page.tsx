export default function Page({ params }: { params: { slug: string } }) {
  return <div>Page Test Slug Dynamic: {params.slug}</div>;
}
