import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import dog from './asserts/images/dog.jpg';
import {Button} from "./Button";

const App = ({ title }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    <Button/>
  </>
);

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired,
};
