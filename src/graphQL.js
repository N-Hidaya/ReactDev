import "./App.css";
import {useState, useEffect} from "react";

const query = `
query {
    allLifts {
        name
        elevationGain
        status
    }
}`;

const opts = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({query})
};

//different style
const tahoe_peaks = [
    {name: "Freel", elevation: 10891},
    {name: "Monument", elevation: 10067},
    {name: "Pyramid", elevation: 9983},
    {name: "Tallac", elevation: 9735}
];

function List({data, renderItem, renderEmpty}) {
    return !data.length ? (renderEmpty) : (
        <ul>
            {data.map((item) => (
                <li key={item.name}>
                    {renderItem(item)}
                </li> 
            ))}
        </ul>
    );
}

function Lift({ name, elevationGain, status}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{elevationGain} {status}</p>
        </div>
    );
}

function GQL() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://snowtooth.moonhighway.com/`, opts)
        .then((response) => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    }, []);

    console.log(data);
    if (loading) return <h1>Loading...</h1>;
    if (error) 
        return <pre>{JSON.stringify(error)}</pre>;
    if (!data) return null;
    return (
        <div className='App'>
            {data.data.allLifts.map((lift) => {
                return (
                <Lift
                name={lift.name}
                elevationGain={lift.elevationGain}
                status={lift.status}
                />
                );
            })}

            <List
            data={tahoe_peaks}
            renderEmpty={<p>This list is empty</p>}
            renderItem={(item) => (
            <>{item.name} - {item.elevation} ft.</>
            )}
            />
        </div>
       
    );

}

export default GQL;