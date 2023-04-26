import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router";

export default function ShowUser() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  console.log(user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(true);
          setUser(result);
        },
        // catch error
        (error) => {
          setIsLoading(true);
          setError(error.message);
        }
      );
  }, [API_URL]);

  if (!isLoading) {
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
    return (
      <Layout>
        <div className="max-w-xl mx-auto">
          <div className="py-20 px-20">
            <h1 className="text-cyan-300 text-center pb-2 text-xl mt-6 uppercase">
              Prénom: {user.name}
            </h1>
            <p className="text-center">Surnom:{user.username}</p>
            <p className="text-center">Email:{user.email}</p>
            <p className="text-center">
              Adresse:
              {user.address.street +
                "," +
                user.address.suite +
                "," +
                user.address.city +
                "," +
                user.address.zipcode}
            </p>
            <p className="text-center">Portable:{user.phone}</p>
            <p className="text-center">Site :{user.website}</p>

            <p className="text-center">Entreprise:{user.company.name}</p>
          </div>
        </div>
      </Layout>
    );
  }
}
