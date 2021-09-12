/**
 * @file [SearchBox]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2021-09-12 20:14:58
 */
import React, {useEffect, useRef, useState} from 'react';
// import {styled, css, keyframes, Box, palette, Flex}  from 'galaco';
import {client} from 'poindexter/runtime';
// loads the poindexter.bundle.json.
// for custom path: `client.init({ path: '/path/to/poindexter.bundle.js' })`
import {styled, Box, Ellipsis} from 'galaco';
import {useClickAway} from 'ahooks';
import {Link} from 'react-navi';

let isClientLoad = false;

const Wrap: any = styled(Box)`
    position: fixed;
    right: 1em;
    top: 1em;
    input {
        height: 3em;
        width: 25em;
        outline: none;
    }
`;
const Popup: any = styled(Box)`
    position: absolute;
    top: 3em;
    left: 0;
    background-color: white;
    border: solid 1px pink;
    max-height: 500px;
    overflow-y: scroll;
    a {
        line-height: 3em;
    }
`;
const Row: any = styled(Ellipsis(1))`
    cursor: pointer;
    height: 3em;
    padding: 0.5em;
    :hover {
        background: pink;
        color: white;
    }
`;
// search the index.
type ResultShape = {
    path: string;
    keywords: string;
    text: string;
    title: string;
};
type Props = {};
const SearchBox: React.FC<Props> = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<ResultShape[]>([]);
    const [visible, setVisible] = useState(false);
    const ref = useRef<any>();
    useEffect(() => {
        // 不能在SSG时候发起init，因为此时json还没有产生
        if (!isClientLoad) {
            isClientLoad = true;
            client.init('/poindexter.bundle.json');
        }
    }, []);
    useEffect(() => {
        if (query) {
            const result = client.index.search(query);
            setResult(result);
            console.log('ddt::result', result);
        } else {
            setResult([]);
        }

        return () => {};
    }, [query]);
    // https://sourcegraph.com/github.com/alibaba/hooks/-/blob/packages/hooks/src/useClickAway/index.ts
    useClickAway(() => {
        setVisible(false);
    }, ref);

    return (
        <Wrap>
            <input
                ref={ref}
                onFocus={() => {
                    setVisible(true);
                }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            ></input>
            {visible && result && result.length > 0 && (
                <Popup>
                    {result
                        .filter((item) => item.path !== 'index')
                        .map((item) => {
                            return (
                                <Link
                                    key={item.path}
                                    style={{boxShadow: 'none'}}
                                    href={'/' + item.path}
                                >
                                    <Row>
                                        {item.path.split('/')[0] + '>'}

                                        {item.title}
                                    </Row>
                                </Link>
                            );
                        })}
                </Popup>
            )}
        </Wrap>
    );
};
export default SearchBox;
