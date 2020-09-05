import { Route } from 'navi'
import React from 'react'
import Link from '../utils/Link';
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Bio from './Bio'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.css'
import ThemeService from '../service/ThemeService'

interface BlogIndexPageProps {
  blogRoot: string
  pageCount: number
  pageNumber: number
  postRoutes: Route[]
}

function BlogIndexPage({
  blogRoot,
  pageCount,
  pageNumber,
  postRoutes,
}: BlogIndexPageProps) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
          <button className={styles.themeButton} onClick={()=>{
            let theme = document.body.getAttribute('class');
            if (theme==='light') {
              theme = 'dark';
            }else{
              theme = 'light';
            }
            ThemeService.setTheme(theme);
          }}>switch theme</button>
        </h1>
        <Bio />
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        <div>
          <a href="./rss.xml" target="_blank" style={{ float: 'right' }}>
            RSS
          </a>
          <Link href="/about">About</Link> &bull;{' '}
          <Link href="/tags">Tags</Link> &bull;{' '}
          <Link href="https://github.com/mzvast/mzvast.github.io">
            Source
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default BlogIndexPage
