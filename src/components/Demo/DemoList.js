import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log('Items sorted asc');
    items.sort((a, b) => a - b);
    return [...items]
  }, [items]); 

  const sortedListDesc = useMemo(() => {
    console.log('Items sorted desc');
    items.sort((a, b) => b - a);
    return [...items]
  }, [items]); 

  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {(props.order==='increasing'?sortedList:sortedListDesc).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
