import React from 'react';
import './App.css';

const URL_PATH = "https://gist.githubusercontent.com/bar0191/fae6084225b608f25e98b733864a102b/raw/dea83ea9cf4a8a6022bfc89a8ae8df5ab05b6dcc/pokemon.json";

class App extends React.Component {
    state = {
        pokemons: [],
        filteredPokemons: []
    }

    componentDidMount() {
        this.getAllPokemons();
    }

    async getAllPokemons() {
        try {
            const pokemonResp = await fetch(URL_PATH);
            const pokemons = await pokemonResp.json();
            this.setState({ pokemons, filteredPokemons: pokemons })
        } catch (error) {
            console.error(error);
        }
    }

    getNewPokemons(e) {
        const value = e.target.value
        let filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.Name.toLowerCase().includes(value.toLowerCase()) || pokemon.Types.some((type = '') => type.toLowerCase().includes(value.toLowerCase())));
        filteredPokemons = filteredPokemons.sort((a, b) => {
            if (a.Name.toLowerCase().includes(value.toLowerCase())) return 1;
            else if (a.Types.some((type = '') => type.toLowerCase().includes(value.toLowerCase()))) return -1;
            return 0
        })
        this.setState({ filteredPokemons });
    }

    changeSortOnMaxCP(event) {
        const filteredPokemons = this.state.filteredPokemons.sort((a, b) => {
            if (a.MaxCP > b.MaxCP) return -1;
            if (a.MaxCP < b.MaxCP) return 1;
            return 0;
        })

        this.setState({ filteredPokemons })
    }

    render() {
        return (
            <div>
                <label htmlFor="maxCP" className="max-cp">
                    <input onChange={e => this.changeSortOnMaxCP(e)} type="checkbox" id="maxCP" />
                    <small>
                        Maximum Combat Points
        </small>
                </label>
                <input onChange={(e) => this.getNewPokemons(e)} type="text" className="input" placeholder="Pokemon or type" />
                <div className="loader"></div>
                <ul className="suggestions">
                    <li>
                        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="" />
                        <div className="info">
                            <h1>
                                <span className="hl">Pika</span>chu</h1>
                            <span className="type electric">Electric</span>
                            <span className="type normal">Normal</span>
                        </div>
                    </li>

                    {
                        this.state.filteredPokemons.map((pokemon, i) => (<li>{`${pokemon.Name} - ${pokemon.MaxCP} - ${pokemon.Types}`}</li>)).slice(0, 4)
                    }


                    {/* <li>
                        <img src="https://cyndiquil721.files.wordpress.com/2014/02/missingno.png" alt="" />
                        <div className="info">
                            <h1 className="no-results">
                                No results
                    </h1>
                        </div>
                    </li> */}
                </ul>
            </div>);
    }
}



export default App;
