import React from "react";

export default function ChanelSection() {
  return (
    <section className="w-full py-12">
      <div className="text-center">
        <p className="text-gray-3 text-sm">
          Improve your recommendations by selecting your favourite artists.
        </p>

        <a href="/" style={{ borderRadius: 3 }}
          className="inline-block py-2 px-3 bg-primary text-white text-xs font-bold mt-6 font-sm cursor-pointer">
          Add artists
        </a>
      </div>
    </section>
  );
}
