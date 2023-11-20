import React, {useState, useEffect} from 'react'

const Grip = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] =  useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((result) => {
            setData(result);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error", error);
            setLoading(false);
        });
    }, []);

  return (
    <div>
        <h1>My Data</h1>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <ul>
            {data.map((item, index) => (
                <li key={item.id}>{item.title}</li>
            ))}
            </ul>
            )}
    </div>
  );
}

export default Grip