'use client';

import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

type Props = {
  url: string; // path like "/example.csv"
};

export default function CSVPreview({ url }: Props) {
  const [data, setData] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch CSV');
        return response.text();
      })
      .then((csvText) => {
        const parsed = Papa.parse<string[]>(csvText, {
          skipEmptyLines: true,
        });

        if (parsed.errors.length) {
          throw new Error('Failed to parse CSV');
        }

        setData(parsed.data);
      })
      .catch((err) => setError(err.message));
  }, [url]);

  if (error) return <div className="text-red-600">Error: {error}</div>;
  if (!data.length) return <div>Loading...</div>;

  return (
    <div className="overflow-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            {data[0].map((cell, idx) => (
              <th key={idx} className="border px-2 py-1 bg-gray-100">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="border px-2 py-1">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
