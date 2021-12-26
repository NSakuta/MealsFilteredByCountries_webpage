import React from "react";
import Loader from "./Loader";
import Meal from "./Meal"
import Error from "./Error";
import FoodApi from "../data";

export default class Meals extends React.Component{
    state = {
        loading: true,
        meals: [],
        error: null
    }

    renderMeals() {
        const {loading, meals, error} = {...this.state} // деструктуризация
        return loading && !error ? <Loader></Loader> : error ? <Error message={error}></Error> : meals.map(el => 
            <Meal key={el.idMeal} meal = {el}></Meal>
        )
    }

    componentDidMount() { // должны прийти данные - promise // 
        this.componentChangeCountry(this.props.country)
    }

    componentDidUpdate(prevProps) { // нужно прописывать prevProps иначе будет бессконечный цикл
        if(prevProps.country !== this.props.country) {
            this.componentChangeCountry(this.props.country)

        }
    }

    componentChangeCountry(country) {
        this.setState({...this.state, loading: true, error: null})

        FoodApi.getMealsByCountry(country) // страну можно взять у родителя в пропсах
        .then(data => {
            console.log('data: ', data)
            setTimeout(() => {
                this.setState({
                    ...this.state,
                    loading: false,
                    meals: [...data.meals]
                })
            }, 1000)
        }).catch((error) => {
            this.setState({
                ...this.state,
                loading: false,
                error: error.message
            })
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderMeals()}
            </div>
        )
    }
}