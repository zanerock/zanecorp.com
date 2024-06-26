// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zanecorp',
  tagline: 'All things Zane',
  favicon: 'img/zanecorp-favicon.png',

  // Set the production url of your site here
  url: 'https://zanecorp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zanerock', // Usually your GitHub org/user name.
  projectName: 'zanecorp.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'reviews',
          routeBasePath: 'reviews',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com//zanerock/zanecorp.com/tree/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/zanerock/zanecorp.com/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'whimsies',
        path: 'whimsies',
        routeBasePath: 'whimsies',
        sidebarPath: './sidebarsWhimsies.js',
        editUrl:
            'https://github.com//zanerock/zanecorp.com/tree/main/',
        showLastUpdateTime: true,
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/zanecorp-social-card.png',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/zanecorp-logo-name-only.svg',
          srcDark: 'img/zanecorp-logo-name-only-dark.svg'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'reviewsSidebar',
            position: 'left',
            label: 'Reviews',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'whimsies',
            sidebarId: 'whimsies',
            position: 'left',
            label: 'Whimsies',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            html         : '<img class="light none" src="/img/github-mark.svg" /><img class="light hover" src="/img/github-mark-hover.svg" /><img class="dark none" src="/img/github-mark-dark.svg" /><img class="dark hover" src="/img/github-mark-dark-hover.svg" />',
            href         : 'https://github.com/zanerock/zanecorp.com',
            position     : 'right',
            className    : 'header-github-link',
            'aria-label' : 'GitHub repository'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/zane-rockenbaugh/'
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/zane.rockenbaugh/'
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/zrockenbaugh/'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zanerock/zanecorp.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zane Rockenbaugh`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
