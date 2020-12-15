import React from 'react'

function List()
{
    const names = ["bruce", "Clark", "Diana"]
    const NameList = names.map(name => <h2>{name}</h2>)
    return <div>{NameList}</div>

}


export default List
