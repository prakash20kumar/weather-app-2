import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather';
import './App.css';

class App extends Component {
    state = { city: '', records: [] };

    handleChange = (evt) => {
        const c = evt.target.value;
        this.setState({ city: c })
    }

    handleClick = () => {
        const rcds = this.state.records;
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&units=metric&appid=359aa66ecff18573ced234066ba66502')
            .then((response) => {
                const dt = response.data;
                rcds.push(dt);
                this.setState({ records: rcds });
            })
            .catch((error) => {
                console.error("Error: ", error);
            })
            .then(() => {
            });

        this.setState({ city: '' });
    }

    handleEnter = (evt) => {
        if (evt.which === 13) {
            const rcds = this.state.records;
            axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&units=metric&appid=359aa66ecff18573ced234066ba66502')
                .then((response) => {
                    const dt = response.data;
                    rcds.push(dt);
                    this.setState({ records: rcds });
                })
                .catch((error) => {
                    console.error("Error: ", error);
                })
                .then(() => {
                });

            this.setState({ city: '' });
        }
    }

    handleDel = (index) => {
        let rcds = this.state.records;
        rcds.splice(index, 1);
        this.setState({ records: rcds });
    }
    render() {
        return (
            <div>
                <h1>Weather App</h1>
                <span id="content">
                    <b>City: </b>
                    <input type="text" onChange={ this.handleChange } value={ this.state.city } placeholder="Enter City name..." onKeyDown={ this.handleEnter } />
                </span>
                <input type="button" onClick={ this.handleClick } value="Add" id="btn" /><hr />
                {this.state.records.map((rcd, i) => {
                    return (
                        <Weather key={ i } weather={ rcd.weather[0].main }
                            icon={ rcd.weather[0].icon }
                            desc={ rcd.weather[0].description }
                            temp={ rcd.main.temp }
                            temp_min={ rcd.main.temp_min }
                            temp_max={ rcd.main.temp_max }
                            city={ rcd.name }
                            wind={ rcd.wind.speed }
                            country={ rcd.sys.country }
                            del={ () => this.handleDel(i) }
                        />
                    )
                }) }

            </div>
        );
    }
}

export default App;