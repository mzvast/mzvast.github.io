import React from 'react';
import {Link, useCurrentRoute, useView} from 'react-navi';
import {MDXProvider} from '@mdx-js/react';
import siteMetadata from '../siteMetadata';
import ArticleMeta from './ArticleMeta';
import Bio from './Bio';
import styles from './BlogPostLayout.module.css';
import Disqus from 'disqus-react';

interface BlogPostLayoutProps {
    blogRoot: string;
}

function BlogPostLayout({blogRoot}: BlogPostLayoutProps) {
    let {title, data, url} = useCurrentRoute();
    let {connect, content, head} = useView()!;
    let {MDXComponent, readingTime} = content;
    const disqusShortname = 'miaocode';
    const disqusConfig: any = {
        url: 'https://mzvast.github.io' + url.pathname,
        identifier: data.slug,
        title: title
    };
    console.log('useCurrentRoute::title, data, url', title, data, url);
    // The content for posts is an MDX component, so we'll need
    // to use <MDXProvider> to ensure that links are rendered
    // with <Link>, and thus use pushState.
    return connect(
        <>
            {head}
            <article className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        <Link href={url.pathname}>{title}</Link>
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
                            <div className={styles.content}>{children}</div>
                        )
                    }}
                >
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
                <Disqus.DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
                <footer className={styles.footer}>
                    <h3 className={styles.title}>
                        <Link href={blogRoot}>{siteMetadata.title}</Link>
                    </h3>
                    <Bio className={styles.bio} />
                    <section className={styles.links}>
                        {data.previousDetails && (
                            <Link
                                className={styles.previous}
                                href={data.previousDetails.href}
                            >
                                ← {data.previousDetails.title}
                            </Link>
                        )}
                        {data.nextDetails && (
                            <Link
                                className={styles.next}
                                href={data.nextDetails.href}
                            >
                                {data.nextDetails.title} →
                            </Link>
                        )}
                    </section>
                </footer>
            </article>
        </>
    );
}

export default BlogPostLayout;
