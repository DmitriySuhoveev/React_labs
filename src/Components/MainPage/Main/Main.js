import React from 'react'
import Nav from '../Nav/Nav'
import AddMovie from '../AddMovie/AddMovie'

import Movie from '../Movie/Movie'

const Main = ()=> {
    return(
        <div>
        <Nav/>
        <AddMovie/>
        <Movie/>
        </div>
    )
}

export default Main