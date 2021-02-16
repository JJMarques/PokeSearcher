import styles from '../../styles/App.module.scss';
import PokemonCard from './PokemonCard';

export default function PokemonsList({ pokemonList, totalPokemons }) {
    return (
        <>
            <div className={styles.results}>
                <span>{totalPokemons} pokemons</span>
            </div>
            {pokemonList.map((pokemonPage, index) => (
                <div className={styles.pokemonList} key={index}>
                    {pokemonPage.results.map((pokemon, index) => (
                        <PokemonCard key={index} pokemon={pokemon} />
                    ))}
                </div>
            ))}
        </>
    );
}
