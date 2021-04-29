import React from 'react';
import styles from './style.css';

const App = ({ title }) =>
    <h1 className={styles.title}>{title}</h1>;

export default App;