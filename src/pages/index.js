import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import NoNavLayout from '../components/NoNavLayout';
import Layout from '@theme/Layout'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <div className={clsx(styles.spacer)}></div>
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
    <Layout
      wrapperClassName='homePage'
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}
