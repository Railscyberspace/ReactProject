import React from 'react'

function Person({ person })
{
    return (
        <div>
            <h2>
                I am {person.name}. I am{person.age} Years old. I known {person.skill}
            </h2>

        </div>
    )
}

export default Person
