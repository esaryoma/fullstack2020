import React from 'react';

const Person = (props) => {
    const {person} = props
    return (
        <div>
            <p>{person.name} {person.number}</p>
        </div>
    );
};

export default Person;