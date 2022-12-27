import React from 'react';
import {Link, useCurrentRoute, useView} from 'react-navi';
import {MDXProvider} from '@mdx-js/react';
import siteMetadata from '../siteMetadata';
import ArticleMeta from './ArticleMeta';
import Bio from './Bio';
import styles from './BlogPostLayout.module.css';
import Disqus from 'disqus-react';
import ArticleToc from './ArticleToc';
import {Helmet} from 'react-navi-helmet-async';
import {MDXEmbedProvider} from 'mdx-embed';

interface BlogPostLayoutProps {
    blogRoot: string;
}

function BlogPostLayout({blogRoot}: BlogPostLayoutProps) {
    let {title, data, url} = useCurrentRoute();
    const {spoiler,tags} = data;
    let {connect, content, head} = useView()!;
    let {MDXComponent, readingTime, tableOfContents} = content;
    const disqusShortname = 'miaocode';
    const disqusConfig: any = {
        url: 'https://mzvast.github.io' + url.pathname,
        identifier: data.slug,
        title: title
    };
    // console.log('useCurrentRoute::content', content, tableOfContents());
    // The content for posts is an MDX component, so we'll need
    // to use <MDXProvider> to ensure that links are rendered
    // with <Link>, and thus use pushState.
    return connect(
        <>
            {head}
            <Helmet >
                <meta name="title" content={title}/>
                <meta name="description" content={spoiler}/>
                <meta name="keywords" content={tags.join(',')}/>
            </Helmet>
            <article className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        <Link style={{boxShadow: 'none'}} href={url.pathname}>
                            {title}
                        </Link>
                    </h1>
                    <ArticleMeta
                        blogRoot={blogRoot}
                        data={data}
                        readingTime={readingTime}
                    />
                </header>
                <MDXProvider
                    components={{
                        a: Link,
                        wrapper: ({children}) => (
                            <MDXEmbedProvider>
                                <div className={styles.content}>{children}</div>
                            </MDXEmbedProvider>
                        )
                    }}
                >
                    <ArticleToc tableOfContents={tableOfContents} />
                    <MDXComponent />
                </MDXProvider>
                {/* <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
                    评论
                </Disqus.CommentCount> */}
                {/* <Disqus.CommentEmbed 
                    commentId={disqusConfig.identifier}
                    showMedia={true}
                    height={160}
                /> */}
                {process.env.NODE_ENV === 'production' && (
                    <Disqus.DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
                )}
                <footer className={styles.footer}>
                    <h3 className={styles.title}>
                        <Link href={blogRoot}>{siteMetadata.title}</Link>
                    </h3>
                    <Bio className={styles.bio} />
                    <section className={styles.links}>
                        {data.previousDetails && (
                            <div style={{marginBottom: '14px'}}>
                                <Link
                                    className={styles.previous}
                                    href={data.previousDetails.href}
                                >
                                    ← {data.previousDetails.title}
                                </Link>
                            </div>
                        )}
                        {data.nextDetails && (
                            <div style={{marginBottom: '14px'}}>
                                <Link
                                    className={styles.next}
                                    href={data.nextDetails.href}
                                >
                                    {data.nextDetails.title} →
                                </Link>
                            </div>
                        )}
                    </section>
                </footer>
            </article>
        </>
    );
}

export default BlogPostLayout;
