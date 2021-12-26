import React from "react";
import '../../App.css';
import Countries from "./Countries";
import Meals from "./MealsF";

export const CountryContext = React.createContext();

class App extends React.Component {
    state = {
        currentCountry: null
    }

    changeCountry = (country) => {
        console.log(country)
        this.setState({...this.state, currentCountry: country}) 

    }


    render() {
        return(
            <>
            <CountryContext.Provider value = {{
                changeCountry: this.changeCountry
            }}>
                <div className="container my-5">
                    <Countries></Countries>
                </div>
            </CountryContext.Provider>
            <div className="container my-5">
                {this.state.currentCountry ? <Meals country = {this.state.currentCountry}></Meals> : null}

            </div>
            </>
        );
    }
}

 export default App;
