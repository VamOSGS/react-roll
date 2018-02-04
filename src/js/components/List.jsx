import React, { Component } from 'react';

const List = ({ nums }) => (
    <ul>
        {nums.map((item, uid) => (
            <li key={uid} className={item.color}>
                <h3>{item.num}</h3>
            </li>
        ))}
    </ul>
);

export default List;
