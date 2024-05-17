import clsx from 'clsx'

import styles from './styles.module.css'

const generateStars = (stars) => {
  // return <span class="u2800">{'&#9733;'.repeat(stars % 1)}{stars % 1 > 0 ? <span class="half-star">&#11240;</span> : ''}</span>
  return <span className={clsx(styles.u2800)}>{stars === 0 ? '☆' : '★'.repeat(Math.floor(stars))}{stars % 1 > 0 ? <span className={styles['half-star']}>⯨</span> : ''}</span>
}

// export default function Ratings ({ entertainment, quality }) {
export default function Ratings ({ ratings }) {
  return (
    <table className={clsx(styles['ratings-table'])}>
      {Object.entries(ratings).map(([key, value]) => { return (
      <tr>
        <td>{key.slice(0, 1).toUpperCase() + key.slice(1)}:</td><td>{generateStars(value)}</td>
      </tr>)}
      )}
    </table>)
}