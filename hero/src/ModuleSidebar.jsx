import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg w-1/6">
      <Accordion
        title="Module 1"
        answer="I like to use iOS products"
      />
      <Accordion
        title="Module 2"
        answer="I like to use Tailwind"
      />
      <Accordion title="Module 3" answer="I am using Supabase!" />
    </div>
  );
};

export default FAQ;