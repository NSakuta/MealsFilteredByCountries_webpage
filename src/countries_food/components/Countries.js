import FoodApi from "../data"
import Country from "./Country"
import Error from "./Error"
import Loader from "./Loader"
import React from "react"


export default class Countries extends React.Component {

    state = {
        loading: true,
        countries: [],
        error: false
    }

    componentDidMount() { // приходит промис, поэтому когда придет тогда и будет обрабатывать then
        FoodApi.getCountries()
            .then(data => {
                setTimeout(() => {
                    this.setState({
                    ...this.state,
                    countries: [...data.meals],
                    loading: false
                    })
                }, 1000)
            }).catch((error) => {
                this.setState({...this.state,
                loading: false,
                error: error.message
            })   
        })  
        console.log('countries: ', this.state.countries)   
    }

    renderCountries(){
        return (
            <>
                {this.state.loading ? <Loader></Loader> : this.state.error ? <Error message={this.state.error}></Error> : this.state.countries.map(el => 
                    <Country key={el.strArea} country={el}></Country>
                )}
            </>
        )
    }

    render() {
        return (
            <div className="row">
                {this.renderCountries()}
            </div>
        )
    }
}