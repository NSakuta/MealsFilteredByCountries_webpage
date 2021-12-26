import React, { useState } from "react";

export default class MyComponent extends React.Component{
    state = {
        title: 'Old title',
        loading: true,
        todos: []
    }

    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            //this.setState({title: 'New title'})
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(data => this.setState({...this.state, loading: false, todos: [...data]}))
        }, 2000)   
    }


    static getDerivedStateFromProps(nextProps, nextState) { // либо null
        console.log('getDerivedStateFromProps', nextProps, nextState);
        return nextState; // если return null ---> рендер не будет вызываться
    }

    shouldComponentUpdate(nextProps, nextState) { // обновляет контент из componentDidMount()
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true; // true или false
    }

    getSnapshotBeforeUpdate(prevProps, preState) {
        console.log('getSnapshotBeforeUpdate', prevProps, preState)
        return prevProps;
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState)
        return true;
    }


    // (function() {
    //     setTimeout(() => {
    //         const newTitle = {...this.state};
    //         newTitle = 'New title';
    //         console.log('title: ', this.state.title)
    //         useState
    //     }, 2000)
    // })()

    render() {
        console.log('render')
        return(
            <>
            {
                this.state.loading ? <div>loading...</div> : 
                <ul>{this.state.todos.map((todo, index) => {
                    <li key = {index}>{todo.title}</li>})}
                </ul>
            }
            </>
        )
    }
}