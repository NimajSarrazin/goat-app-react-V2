import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router";

export default function ShowUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // updated the API URL to use template literals
  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (resultat) => {
          setIsLoading(false); // set loading state to false after response
          setUser(resultat);
        },
        // catch error
        (error) => {
          setIsLoading(false); // set loading state to false after error
          setError(error.message);
        }
      );
  }, [API_URL, id]);

  if (isLoading) {
    // if still loading
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
    // data has been fetched successfully
    return (
      <Layout>
        <div className="max-w-xl mx-auto">
          <div className="py-20 px-20">
            <h1 className="text-cyan-300 text-center pb-2 text-xl mt-6 uppercase">
              {user.name}
            </h1>
            <p className="text-center">{user.username}</p>
          </div>
        </div>
      </Layout>
    );
  }
}
