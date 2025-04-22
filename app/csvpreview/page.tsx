


// app/page.tsx or wherever you use it
import CSVPreview from "@/components/csv-preview";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">CSV Preview</h1>
      <CSVPreview url="/example.csv" />
    </main>
  );
}
