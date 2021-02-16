import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/App.module.scss';
import spinner from '../assets/spinner-light.gif';

export default function PokemonCard({ pokemon }) {
    const [pokemonData, setPokemonData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonData = async () => {
            await axios.get(pokemon.url).then(({ data }) => {
                setPokemonData(data);
                setLoading(false);
            });
        };
        fetchPokemonData();
    }, []);

    if (loading)
        return (
            <div className={styles.pokemonCard}>
                <img src={spinner} alt="loading..." />
            </div>
        );

    return (
        <div className={styles.pokemonCard}>
            <Link to={`/pokemon/${pokemonData.id}`}>
                <h1>{pokemonData.name}</h1>
                <img
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData}
                />
            </Link>
        </div>
    );
}
