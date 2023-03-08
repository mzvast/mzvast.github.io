import renderReactPageToString from 'react-navi/create-react-app'
import renderRSSFeedToString from './renderRSSFeedToString'
import renderSiteMapToString from './renderSiteMapToString';

/**
 * navi-scripts will call this function for each of your site's pages
 * to produce its statically rendered HTML.
 */

async function renderPageToString(props) {
  if (props.url.pathname === '/rss') {
    return renderRSSFeedToString(props)
  }

  if (props.url.pathname === '/sitemap') {
    return renderSiteMapToString(props)
  }
  return renderReactPageToString(props)
}

export default renderPageToString
