import React from "react";

export default function CardStevePage({img, title, description}) {
  return (
    <section className="py-20 px-20">
      <div className="sm:flex space-x-5">
        <div className="w-2/4">
          <img className="" src={img} alt="steve.png" />
        </div>
        <div className="w-2/4">
          <h2 className="text-3xl font-bold pb-5 ">{title}</h2>
          <p>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
