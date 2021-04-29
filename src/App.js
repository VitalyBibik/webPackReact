import React from 'react';
import styles from './style.css';
import dog from './asserts/images/dog.jpg';

const App = ({ title }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    <img src={dog} alt="SuperDog" />
  </>
);

export default App;
