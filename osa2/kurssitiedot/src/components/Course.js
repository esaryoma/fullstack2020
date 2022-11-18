import React from 'react';
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({course}) => {
    const {name, parts} = course
    return (
        <div>
            <Header courseName={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    );
};

export default Course;