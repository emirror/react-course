import React from 'react';
import Items from './item';
import DoneItems from './DoneItem';
import { AppContext } from '../App'


function List({ propAllTodos, propDoneTodos }) {
    const { getStatus } = React.useContext(AppContext)

    return (
        <React.Fragment>
            <div>
                <h2>
                    To do List
                </h2>
                <ul>
                    {
                        propAllTodos.length ?
                            propAllTodos.map(item => {
                                if (item.status) {
                                    return <Items
                                        key={item.id}
                                        text={item.text}
                                        id={item.id}
                                    />
                                }

                            })
                            : <p>There is no todo list</p>
                    }
                </ul>
            </div>
            <div>
                <h2>
                    Done List
                </h2>
                <ul>
                    {
                        propDoneTodos.length ?
                            propDoneTodos.map(item => {
                                if (!item.status) {
                                    return <DoneItems
                                        key={item.id}
                                        text={item.text}
                                        id={item.id}
                                    />
                                }

                            })
                            : <p>There is no todo list</p>
                    }
                </ul>
            </div>
        </React.Fragment>

    )
}

export default List;