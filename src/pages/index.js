import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NoNavLayout from '../components/NoNavLayout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header style={{ height: '100vh', padding: '2rem 0' }}>
      <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', justifyContent: 'center' }} className="container">
        <div className={clsx(styles.logoAndNavContainer)}>
          <img className={clsx(styles.logo)} 
            src="/img/zanecorp-logo.svg"
            alt="Zanecorp logo showing large Z above stylized 'ZANECORP'" />
          <Link className={clsx('button', styles.navButton)} to="/docs/welcome">Reviews</Link>
          <Link className={clsx('button', styles.navButton)} to="/blog">Blog</Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <NoNavLayout
      wrapperClassName='homePage'
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </NoNavLayout>
  );
}
