import React from 'react';
import {Link} from 'react-navi';
import styles from './ArticleToc.module.css';

function TocItem(data) {
    if (!data || (data instanceof Array && data.length === 0)) {
        return null;
    }
    if (data instanceof Array) {
        console.log('data::data', data);
        return (
            <ul>
                {data.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            {TocItem(item)}
                        </React.Fragment>
                    );
                })}
            </ul>
        );
    }
    return (
        <>
            <li key={data.id} data-key={data.id}>
                <Link href={'#' + data.id}>{data.title}</Link>
            </li>
            {TocItem(data.children)}
        </>
    );
}

function ArticleToc({tableOfContents}) {
    const toc = tableOfContents();
    return (
        <>
            <blockquote className={styles.blockquote}>
                <div>{TocItem(toc)}</div>
            </blockquote>
        </>
    );
}

export default ArticleToc;
