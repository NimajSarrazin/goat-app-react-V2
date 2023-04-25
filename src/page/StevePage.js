import React, { useState } from "react";
import CardStevePage from "../data/CardStevePage";
import Layout from "../components/layout/Layout";

export default function StevePage({ sociaty, setSociaty }) {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [bgColor, setBGColor] = useState(true);

  // const handleClick = () => {
  //   // alert(`Bonjour ${name}`);
  //   setShow(show + 1);
  // };
  const handleShow = () => {
    setShow(!show);
    setBGColor(false);
  };

  const incrementCount = () => {
    count < 10 ? setCount(count + 1) : setCount(10);
  };

  const decrementCount = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };

  return (
    <Layout>
      <section>
        <div className="">
          <CardStevePage
            img="img/steve.png"
            title="SteveJobs"
            description=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            veniam, similique distinctio velit quibusdam adipisci ratione vitae
            voluptates? Placeat, asperiores. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Architecto veniam, similique
            distinctio velit quibusdam adipisci ratione vitae voluptates?
            Placeat, asperiores. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Architecto veniam, similique distinctio velit
            quibusdam adipisci ratione vitae voluptates? Placeat, asperiores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            veniam, similique distinctio velit quibusdam adipisci ratione vitae
            voluptates? Placeat, asperiores. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Architecto veniam, similique
            distinctio velit quibusdam adipisci ratione vitae voluptates?
            Placeat, asperiores. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Architecto veniam, similique distinctio velit
            quibusdam adipisci ratione vitae voluptates? Placeat, asperiores.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            veniam, similique distinctio velit quibusdam adipisci ratione vitae
            voluptates? Placeat, asperiores. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Architecto veniam, similique
            distinctio velit quibusdam adipisci ratione vitae voluptates?
            Placeat, asperiores. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Architecto veniam, similique distinctio velit
            quibusdam adipisci ratione vitae voluptates? Placeat, asperiores."
          />
        </div>
        <div className="">{sociaty}</div>
        <div className="my-10">
          <p className="text-2xl font-black text-red-600 pb-5">{count}</p>
          <button
            onClick={incrementCount}
            className="bg-blue-500 text-white p-3 rounded-lg"
          >
            Incrémenté
          </button>
          <button
            onClick={decrementCount}
            className="bg-pink-400 text-white p-3 rounded-lg ml-6"
          >
            décrémenté
          </button>
          <button
            onClick={handleShow}
            className={`${
              show ? "bg-indigo-600" : "bg-green-600"
            } text-white p-3 rounded-lg ml-6 block mt-6`}
          >
            {show ? "Voir-plus" : "Hide!"}
          </button>
          {show !== true && (
            <div className="bg-green-100 p-10 max-w-md text-lg">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Pariatur, eveniet ullam in eaque architecto ab! Reprehenderit,
                officia inventore esse dignissimos eveniet praesentium quasi
                doloribus est nihil mollitia soluta, dolor iure?
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
