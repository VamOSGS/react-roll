import React, { Component } from 'react';

const List = ({ nums, matrix }) => (
    <ul style={{ transform: `matrix(1, 0, 0, 1, ${matrix},0)` }}>
        {nums.map((item, uid) => (
            <li key={uid} className={item.color}>
                <h3>{item.num}</h3>
            </li>
        ))}
    </ul>
);

export default List;
