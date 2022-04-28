import React, { Component } from 'react';
import { findMaxRatePost, sortList } from './UtilsFunctions';
import './List.css'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            sort: 'desc'
        }
    }

    addToList = ( element ) => {
        element.stopPropagation();

        const { posts } = this.props;
        const updatedList = [...this.state.list];

        const max = findMaxRatePost(posts);

        if (!max) {
            return;
        }

        updatedList.push({
            id: (Date.now()).toString(16),
            title: max.title,
            rate: max.averageRate,
            mainId: max.id
        });

        const sortedList = sortList(updatedList, this.state);

        this.setState({ list: sortedList });

        this.props.disablePost(max.id);
    }

    removeFromList = ( id ) => {
        const { list } = this.state;

        const removed = list.find(item => item.id === id);

        const updatedList = list.filter(item => item.id !== id);
        this.setState({ list: updatedList });

        this.props.disablePost(removed.mainId);
    }

    handleSort = ( element ) => {
        element.stopPropagation();
        if (this.state.sort === 'asc') {
            this.setState({ sort: 'desc' });
        } else {
            this.setState({ sort: 'asc' });
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if (prevState.sort !== this.state.sort) {
            const sortedList = sortList([...this.state.list], this.state);
            this.setState({ list: sortedList });
        }
    }

    render() {
        return (
            <div className='list'>
                <button
                    type="button"
                    className='btn'
                    onClick={this.addToList}
                >
                    +
                </button>

                <button
                    type="button"
                    className='btn'
                    onClick={this.handleSort}
                >
                    {this.state.sort === 'desc' ? <span>&#8595;</span> : <span>&#8593;</span>}
                </button>

                <ul>
                    {this.state.list.map(item => {
                        return (
                            <li key={item.id} className="list__item">
                                <span>{item.title}</span>
                                <span>{item.rate}</span>
                                <button
                                    type='button'
                                    className='list__remove-btn'
                                    onClick={() => this.removeFromList(item.id)}
                                >
                                    &minus;
                                </button>
                            </li>
                        );
                    })}
                </ul>

            </div>
        );
    }
};

export default List;