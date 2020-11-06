import React, { Component } from 'react'
import {
    fetchCategories,
    updateRogue,
    fetchRogue,
    deleteRogue
} from './fetches.js'

const userNumber = {
    user_id: 1,
};

export default class UpdatePage extends Component {

    state = {
        categories: [],
        alias: '',
        name: '',
        alive: true,
        year: 0,
        category_id: 1
    }

    componentDidMount = async () => {
        const categories = await fetchCategories();
        const rogue = await fetchRogue(this.props.match.params.id);
        const categoryNameAsString = rogue.category;

        const matchingCategory = categories.find((category) => {
            return category.id === categoryNameAsString
        });

        this.setState({
            categories: categories,
            category: matchingCategory.name,
            alias: rogue.alias,
            name: rogue.name,
            alive: rogue.alive,
            year: rogue.year,
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await updateRogue(
            this.props.match.params.id,
            {
                user_id: userNumber.user_id,
                alias: this.state.alias,
                name: this.state.name,
                alive: this.state.alive,
                year: this.state.year,
                category_id: this.state.category_id
            });

            this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ category_id: e.target.value })
    }

    handleDelete = async (e) => {
        await deleteRogue(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h4>Update Rogue</h4>
                <form onSubmit={this.handleSubmit}>
                <label>
                        Alias:
                        <br /><input onChange={e => this.setState({ alias: e.target.value })} />
                    </label>

                    <label>
                        <br />Name:
                        <br /><input onChange={e => this.setState({ name: e.target.value })} />
                    </label>

                    <label>
                        <br />Is Rogue Alive?:
                        <br /><select onChange={this.handleChangeBoolean}>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </label>

                    <label>
                        <br />Year Introduced:
                        <br /><input onChange={e => this.setState({ year: e.target.value })} type="number" />
                    </label>

                    <label>
                        <br />Category:
                        <br /><select onChange={this.handleChangeCategory}>
                            {
                                this.state.categories.map(category => <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>)
                            }
                        </select>
                    </label>
                    <br /><button className="submit">Submit</button>
                </form>
                <br />
                <button className="delete" onClick={this.handleDelete}>Delete Rogue</button>
            </div>
        )
    }
}
