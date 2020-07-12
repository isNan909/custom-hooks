import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
    // eslint-disable-next-line
  }, []);
  return { response, error };
};

function App() {
  const res = useFetch(
    `https://jsonplaceholder.typicode.com/albums/1/photos`,
    {}
  );
  const dataFetched = res.response;
  // console.log(dataFetched);

  if (!res.response) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <div>
        {dataFetched.slice(0, 10).map((data) => (
          <div key={data.id}>
            <p>{data.title}</p>
            <img src={data.url} alt="avatar" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
