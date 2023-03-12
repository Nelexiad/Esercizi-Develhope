import { useEffect, useState } from "react";

const defaultOptions = { data: {}, method: "GET", headers: {} };
export const useFetch = (url, options = { ...defaultOptions }) => {
  options = {
    ...defaultOptions,
    ...options,
  };
  const [internalUrl, setInternalUrl] = useState(url);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const update = async (_url) => {
    if (_url) {
      setInternalUrl(_url);
    }
    try {
      const response = await fetch(internalUrl, options);
      const result = await response.json();

      if (response.ok) {
        setData(result);
        setError(null);
      } else {
        setData(null);
        setError(result);
      }
    } catch (error) {
      setData(null);
      setError(error.message);
    }
  };
  useEffect(() => {
    update();
  }, []);

  return [data, error, update];
};

// const Coso = () => {
//   const [page, setPage] = useState(1);
//   const [posts, postsError, updatePosts] = useFetch(
//     `https://google.com/posts?page=${page}`,
//     { method: "POST", data: { id: "123" } }
//   );

//   const handleNext = () => {
//     setPage(page + 1);
//   };
//   const handlePrev = () => {
//     setPage(page - 1);
//   };

//   useEffect(() => {
//     updatePosts(`https://google.com/posts?page=${page}`);
//   }, [page]);
//   return (
//     <div>
//       {posts && posts.map()}
//       <button onClick={handleNext}>Next</button>
//       <button onClick={handlePrev}>Prev</button>
//     </div>
//   );
// };

//chiamata GET è quella per ottenere dei dati di qualsiasi tipo
//chiamata POST inviare noi dei dati (inviamo ai dati al server che crea qualcosa con i dati contenuti nel body della nostra request)
//chiamata PUT modifica qualcosa che già esiste
//PATCH anche patch modifica dati già esistenti
//DELETE chiedo al server di cancellare qualcosa
