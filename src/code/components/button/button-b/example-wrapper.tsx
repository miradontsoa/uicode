"use client";

import Example from "./example";

export default function ExampleWrapper() {
  return (
    // <div className="p-4 rounded-lg border border-gray-300 bg-blue-200 from-blue-50 bg-gradient-to-br">
    <div className="p-4 rounded-lg border border-gray-300 bg-gradient-gray-light">
      <Example />
    </div>
  );
}
