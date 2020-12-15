
import React from 'react'
import Person from './Person'

function NameList()
{
    const persons = [
        {
            id: 1,
            name: "Ruby",
            age: 5,
            skill: "React"
        },

        {
            id: 2,
            name: "Dami",
            age: 25,
            skill: "Auglar"
        },

        {
            id: 3,
            name: "Peace",
            age: 20,
            skill: "Python"
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>

}

export default NameList


