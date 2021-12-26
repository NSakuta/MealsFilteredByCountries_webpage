import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Meal from "./Meal"
import Error from "./Error";
import FoodApi from "../data";

const MealsF = ({country}) => {

    const [loading, setLoading] = useState();
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);


    const renderMeals = () => {
        return loading && !error ? <Loader></Loader> : error ? <Error message={error}></Error> : meals.map(el => 
            <Meal key={el.idMeal} meal = {el}></Meal>
        )
    }

    useEffect(() => {

        setLoading(true)
        setError(null);

        FoodApi.getMealsByCountry(country) // страну можно взять у родителя в пропсах
            .then(data => {
                console.log('data: ', data)
                setTimeout(() => {
                    setLoading(false)
                    setMeals(data.meals)
                }, 1500)
            }).catch((error) => {
                setLoading(false)
                setError(error.message)
        })
    }, [country])  

        return (
            <div className="row">
                {renderMeals()}
            </div>
        )
    
}

export default MealsF;