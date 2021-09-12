/**
 * @file [SearchBox]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-09-12 20:14:58
 */
import React, {useEffect, useState} from 'react';
// import {styled, css, keyframes, Box, palette, Flex}  from 'galaco';

import {client} from 'poindexter/runtime';
// loads the poindexter.bundle.json.
// for custom path: `client.init({ path: '/path/to/poindexter.bundle.js' })`

// search the index.

type Props = {};
const SearchBox: React.FC<Props> = () => {
    const [query, setQuery] = useState('');
    useEffect(() => {
        client.init('/public/poindexter.bundle.json');
	console.log('ddt::result', client);
    }, []);
    useEffect(() => {
        console.log('ddt::client', client);
        if (query) {
            const result = client.index.search(query);
            console.log('ddt::result', result);
        }

        return () => {};
    }, [query]);

    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            ></input>
        </div>
    );
};
export default SearchBox;
