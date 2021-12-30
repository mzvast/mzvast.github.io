/**
 * @file [BaiduWrap]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2020-09-05 21:58:50
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */
// import React, {PureComponent} from 'react';

function insertScript(src: string) {
    var hm = document.createElement('script');
    hm.src = src;
    var s = document.getElementsByTagName('script')[0];
    // @ts-ignore
    s.parentNode.insertBefore(hm, s);
}

function addBaidu() {
    window['_hmt'] = window['_hmt'] || [];
    insertScript('https://hm.baidu.com/hm.js?edf54a88a7b7ef99363b4a726e7b2dc6');
}
function addGoogle() {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        // @ts-ignore
        window.dataLayer.push(arguments);
    }
    // @ts-ignore
    gtag('js', new Date());
    // @ts-ignore
    gtag('config', 'UA-87665383-1');
    insertScript('https://www.googletagmanager.com/gtag/js?id=UA-87665383-1');
}

const AnalyticsWrap = (props) => {
    const shouldLoad = process.env.NODE_ENV === 'production';
    if (shouldLoad) {
        addBaidu();
        addGoogle();
        console.log('render::AnalyticsWrap');
    }
    return props.children;
};
export default AnalyticsWrap;
