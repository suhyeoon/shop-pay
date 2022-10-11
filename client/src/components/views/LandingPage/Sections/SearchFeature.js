import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [keyword, setKeyword] = useState("") /* 검색된 값 state */

    const searchHandler = (event) => {
        setKeyword(event.currentTarget.value) /* event.currentTarget 은 이벤트가 부착된 부모의 위치를 반환함*/
        props.updateHandler(event.currentTarget.value) /* 업데이트를 위해서 부모 컴포넌트로 전송 */
    }

    return (
        <>
            <Search
                onChange={searchHandler}
                placeholder="input search text"
                style={{ width: 200 }}
                value={keyword}
            />
        </>
    )
}

export default SearchFeature