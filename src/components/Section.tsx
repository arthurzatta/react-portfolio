import React from "react";

type SectionProps = { children: React.ReactNode; id: string };

export default function Section({ children, id }: SectionProps) {
  return (
    <div className="py-4" id={id}>
      {children}
    </div>
  );
}
