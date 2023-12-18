"use client";

import Example from "./example";

export default function ExampleWrapper() {
  return (
    <div className="p-4 rounded-lg border border-gray-300 bg-gradient-blue-light">
      <div className="flex max-w-xl ml-auto mr-auto">
        <div className="w-full">
          <Example />
        </div>
      </div>
    </div>
  );
}
