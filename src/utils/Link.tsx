import React from 'react';
import {Link} from 'react-navi';

export const MyLink = (props) => {
    return (
        <Link
            {...props}
            onClick={(e) => {
                e.preventDefault();
                // @ts-ignore
                let href = e.nativeEvent.target.href;
                href && window.open(href);
            }}
        ></Link>
    );
};
export default MyLink;
