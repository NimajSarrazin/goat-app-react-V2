import React, { useState } from "react";
import Input from "../components/inputs/input";
import Layout from "../components/layout/Layout";

export default function ContactPage() {
  const [inputs, setInput] = useState([]);
  const [message, setMessage] = useState("");
  // console.log("inputs", inputs);

  const handleChange = (event) => {
    // console.log("event", event.target.value);
    const value = event.target.value;
    const name = event.target.name;
    setInput((values) => ({ ...values, [name]: value }));
  };
  //transform mon state input en array
  const inputArray = Object.keys(inputs);
  console.log("inputArray", inputArray);

  const handleSubmit = (event) => {
    // modifie la soumission du formulaire par défaut en utilisant event.preventDefault
    event.preventDefault();
    alert("inputs");
    setMessage(
      inputArray.map((item) => (
        <p>
          key={item}
          L'input {item} voici sa valeur : {inputs[item]}
        </p>
      ))
    );
    // insert to database
  };

  return (
    <Layout>

    <div className="px-24 py-20">
      <h1 className="text-4xl font-bold text-center pb-8">Nous contacter</h1>

      {message !== "" && (
        <div>
          <p>Voici les données envoyées</p>
          <div className="bg-green-200">{message}</div>
        </div>
      )}
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="flex space-x-6">
          {/* prénom */}
          <Input
            label="Prénom"
            name="fname"
            value={inputs.fname || ""}
            onChange={handleChange}
          />
          {/* nom */}
          <Input
            label="Nom"
            name="lname"
            value={inputs.lname || ""}
            onChange={handleChange}
          />
        </div>
        <div className=" flex space-x-5">
          {/* email + password */}
          <Input
            label="Mail"
            name="mail"
            type="email"
            value={inputs.mail || ""}
            onChange={handleChange}
          />
          <Input
            label="Mot de passe"
            name="password"
            value={inputs.password || ""}
            type="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="">
            <Input
              label="Adresse"
              name="address1"
              value={inputs.address1 || ""}
              onChange={handleChange}
            />
            <Input
              label="Adresse 2"
              name="address2"
              value={inputs.address2 || ""}
              onChange={handleChange}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex space-x-6 mt-5">
          <Input
            label="Ville"
            name="city"
            value={inputs.city || ""}
            onChange={handleChange}
          />
          <Input
            label="Stack"
            name="stack"
            type="select"
            value={inputs.code_postal || ""}
            onChange={handleChange}
          />
          <Input
            label="Code Postal"
            name="code_postal"
            type="number"
            value={inputs.code_postal || ""}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value="Sign In"
          className="bg-blue-700 p-3 text-white rounded-lg mt-5"
        />
      </form>
    </div>
    </Layout>
  );
}
