import React, { Component } from 'react';
import Pool from './Components/Pool';
import List from './Components/List';
import { addAverageRate } from './Components/UtilsFunctions';
import data from './Data/data.json';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    disablePost = (id) => {
        const changePosts = this.state.posts.map(post => {
            return (post.id === id) ? { ...post, disabled: !post.disabled } : post
        });
        this.setState({ posts: changePosts });
    }

    componentDidMount() {
        const averageRate = addAverageRate(data);
        this.setState({ posts: averageRate });
    }

    render() {
        return (
            <div className="App">
              <div className='pool__container'>
                <Pool posts={this.state.posts} />
              </div>
              <div className='list__container'>
                <h1>Pool</h1>
                <List posts={this.state.posts} disablePost={this.disablePost} />
                <List posts={this.state.posts} disablePost={this.disablePost} />
              </div>
            </div>
        );
    }
}

export default App;