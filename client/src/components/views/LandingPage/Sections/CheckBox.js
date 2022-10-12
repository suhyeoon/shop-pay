import React, { useState } from 'react';
import { Collapse, Checkbox } from 'antd';
const { Panel } = Collapse;


function CheckBox(props) {

    const [checked, setChecked] = useState([]) /* 체크된 id state */

    const toggleHandler = (value) => {
        /* indexOf()는 값을 넣었을 때 배열에 일치하는 값이 있으면 일치하는 값의 인덱스를 반환하고
        넣은 값이 배열과 일치하는 값이 없으면 -1을 반환한다. */
        const currentIndex = checked.indexOf(value.id)

        const newChecked = [...checked]
        if (currentIndex === -1) { /* 체크박스가 체크되지 않은 경우 */
            newChecked.push(value.id)
        } else { /* 체크박스가 이미 체크된 경우 */
            newChecked.splice(currentIndex, 1) /* splice()를 사용해서 동일한 값의 인덱스부터 1개의 데이터를 array에서 삭제함 */
        }
        setChecked(newChecked) /* 다시 원본 state에 저장 */

        props.filterHandler(newChecked) /* 업데이트를 위해서 부모 컴포넌트로 전송 */
    }

    const renderCheckboxLists = () =>
        props.list && props.list.map((value, index) => {
            return (
                <React.Fragment key={index}>
                    <Checkbox onClick={() => { toggleHandler(value) }} checked={checked.indexOf(value.id) === -1 ? false : true} />
                    <span>{value.name}</span>
                </React.Fragment>
            )
        }
        )

    return (
        <>
            <Collapse defaultActiveKey={['1']}>
                <Panel header="Continents">
                    {renderCheckboxLists()}
                </Panel>
            </Collapse>
        </>
    )
}

export default CheckBox;