import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function PokemonDisplay() {
    let history = useHistory();
    let { id: params } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        const getPokemonData = async () => {
            setLoading(true);
            await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${params}`)
                .then(({ data }) => {
                    if (isNaN(parseInt(params))) {
                        history.push(`/pokemon/${data.id}`);
                    } else {
                        setPokemonData(data);
                    }
                })
                .catch(() => {
                    setError(true);
                });
            setLoading(false);
        };

        getPokemonData();
    }, [params]);

    if (loading) return <h1>Loading...</h1>;

    if (error) return <h1>Couldn't find that pokemon!</h1>;

    return (
        <>
            <h1>{pokemonData.name}</h1>
            <h1>{params}</h1>
        </>
    );
}
