import React, { useSate } from 'react';
import { data } from './data';

const [list, setList] = useSate(data);

function filter() {
    let newList = [...data];
    newList.filter(t => {
        return t.role == 'Frontend';
    })
    setList(newList);
}
filter();
console.log(list);