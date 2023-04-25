import React from 'react'

export default function CardFooter({title, description, color}) {
  return (
    <footer className="bg-blue-500 text-white px-24 py-14 text-center text-2xl">
      <div className="text-center">
        <h2 className="text-white text-center font-bold text-2xl"> {title}</h2>
        <p className=" text-white font-light items-center mx-auto max-w-xl text-md">
          {" "}
          {description}
        </p>
      </div>
    </footer>
  );
}
