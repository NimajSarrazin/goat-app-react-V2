import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Table from "../components/table/Table";

export default function StagiairePage() {
  const [user, setUser] = useState([]);
  console.log(user);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://jsonplaceholder.typicode.com/users?_limit=10";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(true); // changed from true to false
          setUser(result);
        },
        (error) => {
          setIsLoading(true); // changed from true to false
          setError(error.message);
        }
      );
  }, []);

  if (!isLoading) {
    return (
      <Layout>
        <div className=" py-20 ">
          <p className="text-green-500 text-center text-2xl">
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
        <div className="py-20 bg-gradient-to-r from-blue-500 via-cyan-100 to-blue-300">
          <h2 className="font-black text-4xl text-center pb-5 uppercase text-gray-900">
            {" "}
            Tableau de Stagiaire
          </h2>
          <table className="max-w-7xl mx-auto table-fixed w-full text-left text-gray-500 dark:text-gray-400">
            <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  id
                </th>
                <th scope="col" className="px-6 py-3">
                  Nom
                </th>
                <th scope="col" className="px-6 py-3">
                  Prénom
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  Adresse
                </th>
                <th scope="col" className="px-6 py-3">
                  phone
                </th>
                <th scope="col" className="px-6 py-3">
                  compagny
                </th>
                <th scope="col" className="px-6 py-3">
                  Voir
                </th>
              </tr>
            </thead>
          </table>
          {user.map((item) => (
            <Table
              key={item.id}
              id={item.id}
              fname={item.name}
              lname={item.username}
              email={item.email}
              address={
                item.address.street +
                "," +
                item.address.suite +
                ", " +
                item.address.city +
                "," +
                item.address.zipcode
              }
              phone={item.phone}
              company={item.company.name}
            />
          ))}
        </div>
      </Layout>
    );
  }
}
