import clsx from 'clsx'

import styles from './styles.module.css'

const generateStars = (stars) => {
  // return <span class="u2800">{'&#9733;'.repeat(stars % 1)}{stars % 1 > 0 ? <span class="half-star">&#11240;</span> : ''}</span>
  return <span className={clsx(styles.u2800)}>{'★'.repeat(Math.floor(stars))}{stars % 1 > 0 ? <span className={styles['half-star']}>⯨</span> : ''}</span>
}

// export default function Ratings ({ entertainment, quality }) {
export default function Ratings ({ ratings }) {
  return <table className={clsx(styles['ratings-table'])}>
    <tr>
      <td>Entertainment:</td><td>{generateStars(ratings.entertainment)}</td>
    </tr>
    <tr>
      <td>Quality:</td><td>{generateStars(ratings.quality)}</td>
    </tr>
  </table>
}