import { useEffect, useState } from "react";
import CardBlog from "../components/Cards/CardBlog";
import Layout from "../components/layout/Layout";
// import { dataBlog } from "../data/DataBlog";


export default function BlogPage() {
  const [post, setPost] = useState([]);
  // console.log("post", post);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=6/";

  // utilise hook useEffect pour fetecher la data de l'API
  // fetch me renvoie une promesse
  // ensuite je transforme la reponse en json

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
  } else if(error){
    return (
      <Layout>
        <div className=" py-20 ">
          <p className="text-red-500 text-center text-2xl">
            {" "}
            Erreur : {error}
          </p>
        </div>
      </Layout>
    );
  } else {
    return (
      <>
        <Layout>
          <div className="uppercase text-center py-20 px-20">
            <h2 className="font-bold text-2xl">Bienvenue dans notre blog</h2>
          </div>
          <div className="grid grid-cols-3 space-x-3">
            {post.map((item) => (
              <CardBlog
                key={item.id}
                url_img={item.url_img}
                title={item.title}
                content={item.body}
                id={item.id}
              />
            ))}
          </div>
        </Layout>
      </>
    );
  }
}
