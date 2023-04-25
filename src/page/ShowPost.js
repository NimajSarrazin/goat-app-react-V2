import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router";

export default function ShowPost() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  // console.log("post:", post);

  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = `https://jsonplaceholder.typicode.com/posts/${id}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (resultat) => {
          setisLoading(true);
          setPost(resultat);
        },
        // catch error
        (error) => {
          setisLoading(true);
          setError(error.message);
        }
      );
  }, []);
  if (!isLoading) {
    return (
      <Layout>
        <div className=" py-20 ">
          <p className="text-green-500 text-center text-2xl">
            {" "}
            En chargement...
          </p>
        </div>
      </Layout>
    );
  } else if (error) {
    return (
      <Layout>
        <div className=" py-20 ">
          <p className="text-red-500 text-center text-2xl"> Erreur : {error}</p>
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="max-w-xl mx-auto">
          <div className="py-20 px-20">
            <img className="w-[600px]" src="/img/route.jpeg" alt="" />
            <h1 className="text-cyan-300 text-center pb-2 text-xl mt-6 uppercase">
              {post.title}
            </h1>
            <p className="text-center">{post.body}</p>
          </div>
          <div className="uppercase text-center py-20 px-20"></div>
        </div>
      </Layout>
    );
  }
}
