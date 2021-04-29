import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import dog from './asserts/images/dog.jpg';

const App = ({ title }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    <img src={dog} alt="SuperDog" />
  </>
);

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
};
