import React from 'react'
import Person from './Person' 

function NameList() {
    const persons =[
        {
            id: 1 ,
            name: 'Lufy',
            age: 20,
            skill: 'captain'     
        },
        {
            id: 2 ,
            name: 'Zoro',
            age: 30,
            skill: 'swordsman'   
        },
        {
            id: 3 ,
            name: 'Nami',
            age: 25,
            skill: 'thief'
        }
    ]   
    const personList = persons.map(person =><Person person= {person}></Person>)
    return <div>{personList}</div>
    
}

export default NameList