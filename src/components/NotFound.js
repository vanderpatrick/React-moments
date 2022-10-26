import React from 'react'
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from './Asset';

const NotFound = () => {
  return (
    <div className={styles.margin}><Asset  src={NoResults} message={"sorry , the page youre looking for doesn't exist"} /></div>
  )
}

export default NotFound