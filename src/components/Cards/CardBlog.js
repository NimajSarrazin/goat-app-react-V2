import React from "react";
import { Link } from "react-router-dom";

export default function CardBlog({ title, subtilte, content, id }) {
  return (
    <section className="mx-auto">
      <Link to={`/posts/${id}`}>
        <div className="py-20">
          <div className="p-5  rounded-lg bg-slate-200">
            <div className="items-center">
              <img className="w-[600px]" src="img/route.jpeg" alt='' />
              <div className="">
                <p className="text-cyan-300 text-center pb-2 text-xl mt-5">
                  {title}
                </p>
                <p className="text-5xl font-bold text-center pb-4">
                  {subtilte}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="border border-cyan-300 w-12 mt-2 mb-8"></div>
              </div>

              <p className="text-center max-w-lg pb-5">{content}</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
