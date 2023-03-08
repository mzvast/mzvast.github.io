import {Feed} from 'feed';
import {crawl, resolve} from 'navi';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import siteMetadata from './siteMetadata';

async function renderSiteMapToString({routes}) {
    let publicURL = siteMetadata.publicUrl || '/';
    let {paths} = await crawl({
        routes,
        root: '/posts'
    });

    let pageIndex: any[] = [];

    for (let pathname of paths.sort()) {
        try {
            let route = await resolve({
                routes,
                url: pathname
            });
            let date = route.data.date.toISOString().slice(0, 10);
            let link = publicURL + pathname;

            pageIndex.push(`
      <sitemap>
        <loc>${link}</loc>
        <lastmod>${date}</lastmod>
      </sitemap>`);
        } catch (error) {
            console.error(error);
        }
    }

    return `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pageIndex.join('')}
    </sitemapindex>
  `;
}

export default renderSiteMapToString;
