import { useEffect } from 'react';

import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import NoNavLayout from '../components/NoNavLayout';
import Layout from '@theme/Layout'
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';

let loaded = false

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    const onResize = () => {
      if (window.innerHeight < 500) {
        var r = document.querySelector(':root');
        const buttonContainer = document.getElementById('homepage-button-container')
        const factor = Math.max(0.65, 1 / (1 + 0.005 * (500 - window.innerHeight)))
        r.style.setProperty('--zc-scale-factor', factor)
      }
    }

    if (loaded === false) { // fade in the logo and nav
      const logoAndNavContainer = document.getElementById('logo-and-nav-container')
      logoAndNavContainer.style.setProperty('opacity', '1')
    }

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return (
    <header>
      <div className="container">
        <div className={clsx(styles.spacer)}></div>
        <div id="logo-and-nav-container" className={clsx(styles['logo-and-nav-container'])}>
          <div className={clsx(styles.spacer)}></div>
          <div className={clsx(styles['logo-container'])}>
            <ThemedImage className={clsx(styles.logo)}
              alt="Zanecorp logo showing large Z above stylized 'ZANECORP'"
              sources={{
                light: '/img/zanecorp-logo.svg',
                dark: '/img/zanecorp-logo-dark.svg'
              }}
            />
          </div>
          <div id='homepage-button-container' className={clsx(styles['button-container'])}>
            <Link className={clsx('button', styles['nav-button'])} to="/docs/welcome">Reviews</Link>
            <Link className={clsx('button', styles['nav-button'])} to="/blog">Blog</Link>
          </div>
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
