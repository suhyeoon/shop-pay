import React, { useState } from 'react';
import { Collapse, Radio } from 'antd';
const { Panel } = Collapse;

function RadioBox(props) {

    const [checked, setChecked] = useState(1) /* 선택된 id state */

    const renderRadioLists = () => /* { } 쓰지 않음 */
        props.list && props.list.map((value, index) => {
            return (
                <React.Fragment key={index}>
                    <Radio value={value.id}>
                        <span>{value.name}</span>
                    </Radio>
                </React.Fragment>
            )
        })

    const changeHandler = (event) => {
        setChecked(event.target.value) /* 체크한 값을 state에 저장 */
        props.filterHandler(event.target.value) /* 업데이트를 위해서 부모 컴포넌트로 전송 */
    }

    return (
        <>
            <Collapse>
                <Panel header="Price">
                    <Radio.Group onChange={changeHandler} value={checked}>
                        {renderRadioLists()}
                    </ Radio.Group>
                </Panel>
            </Collapse>
        </>
    )
}

export default RadioBox;