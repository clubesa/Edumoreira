
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold font-serif text-gray-700 border-b-2 border-teal-500 pb-2 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
