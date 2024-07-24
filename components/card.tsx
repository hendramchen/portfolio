interface CardProps {
  children: React.ReactNode;
  className: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`border rounded-md border-gray-600 p-4 ${className}`}>
      {children}
    </div>
  );
}
