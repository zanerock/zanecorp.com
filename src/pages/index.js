import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import NoNavLayout from '../components/NoNavLayout';
import Layout from '@theme/Layout'
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <div className={clsx(styles.spacer)}></div>
        <div className={clsx(styles.logoAndNavContainer)}>
          <div class={clsx(styles['logo-container'])}>
            <ThemedImage className={clsx(styles.logo)}
              alt="Zanecorp logo showing large Z above stylized 'ZANECORP'"
              sources={{
                light: '/img/zanecorp-logo.svg',
                dark: '/img/zanecorp-logo-dark.svg'
              }}
            />
          </div>
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
      description="Reviews and stuff from Zane.">
      <HomepageHeader />
    </Layout>
  );
}
