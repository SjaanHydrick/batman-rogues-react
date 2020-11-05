import React, { Component } from 'react'
import request from 'superagent';

const userNumber = {
    user_id: 1
};

export default class CreatePage extends Component {
    state = {
        categories: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://salty-meadow-30783.herokuapp.com/categories')

        this.setState({ categories: response.body });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newRogue = {
            user_id: userNumber.user_id,
            alias: this.state.alias,
            name: this.state.name,
            alive: this.state.alive,
            year: this.state.year,
            category_id: this.state.category_id
        };
        console.log(newRogue);
        await request
            .post('https://salty-meadow-30783.herokuapp.com/rogues')
            .send(newRogue);

        this.props.history.push('/')
    }

    handleChangeCategory = (e) => {
        this.setState({ category_id: e.target.value })
    }

    handleChangeBoolean = (e) => {
        this.setState({ alive: e.target.value })
    }

    render() {
        return (
            <div>
                <h3>Add A Rogue</h3>
                <form onSubmit={(this.handleSubmit)}>
                    <label>
                        Alias:
                        <input onChange={e => this.setState({ alias: e.target.value })} />
                    </label>

                    <label>
                        Name:
                        <input onChange={e => this.setState({ name: e.target.value })} />
                    </label>

                    <label>
                        Is Rogue Alive?:
                        <select onChange={this.handleChangeBoolean}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>

                    <label>
                        Year Introduced:
                        <input onChange={e => this.setState({ year: e.target.value })} type="number" />
                    </label>

                    <label>
                        Category:
                        <select onChange={this.handleChangeCategory}>
                            {
                                this.state.categories.map(category => <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>)
                            }
                        </select>
                    </label>
                    <button className="submit">Submit</button>
                </form>
            </div>
        )
    }
}
