import React, { useState, useEffect } from 'react'
import styles from './style.module.css'
// import selected from '../../../assets/images/checkbox_on.svg'
// import deselected from '../../../assets/images/checkbox_off.svg'
import Modal from './Modal'

const Index = () => {

    const data = [
        { id: "terms", title: '선택 1' },
        { id: "privacy", title: '선택 2' },
        { id: "age", title: '선택 3' },
    ]

    // 체크박스를 클릭했을 때 해당 체크박스가 가지고 있는 id
    const [checkedButtons, setCheckedButtons] = useState([])

    //  필수 체크박스가 전부 체크 시 버튼 활성화
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (
            checkedButtons.includes("terms") &&
            checkedButtons.includes("privacy") &&
            checkedButtons.includes("age")
        ) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [checkedButtons])

    const singleCheckedHandler = (checked, id) => {
        if (checked) {
            setCheckedButtons(prev => [...prev, id])
            console.log('체크 반영 완료')
        } else {
            setCheckedButtons(checkedButtons.filter(item => item !== id))
            console.log('체크 해제 반영 완료')
        }
    }

    // 체크박스 전체 선택
    const allCheckedHandler = (checked) => {
        if (checked) {
            const idArray = []
            data.forEach((item) => idArray.push(item.id))
            setCheckedButtons(idArray)
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
            setCheckedButtons([])
        }
    }

    // 모달창 노출 여부 state
    const [openModal, setOpenModal] = useState(false)

    // 모달창 노출
    const showModal = () => {
        setOpenModal(true)
    }

    return (
        <>
            <div className={styles.term}>
                <div className={styles.required}>
                    이용약관동의<span className={styles.required_point}>*</span></div>
                <ul>
                    <li>
                        <div className={styles.wrap}>
                            <div className={styles.area}>
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={e => {
                                            allCheckedHandler(e.target.checked)
                                        }}
                                        checked={checkedButtons.length === data.length ? true : false}
                                    />
                                    <i></i>
                                    <strong>전체 동의합니다.</strong>
                                </label>
                            </div>
                            <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
                        </div>
                    </li>

                    <li>
                        <div className={styles.wrap}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="terms"
                                    onChange={e => {
                                        singleCheckedHandler(e.target.checked, "terms")
                                    }}
                                    checked={checkedButtons.includes("terms") ? true : false}
                                />
                                <i></i>
                                <p>이용약관 동의<span className={styles.point}>(필수)</span></p>
                            </label>
                        </div>
                        <a className={styles.policy}>약관보기</a>
                    </li>

                    <li>
                        <div className={styles.wrap}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="privacy"
                                    onChange={e => {
                                        singleCheckedHandler(e.target.checked, "privacy")
                                    }}
                                    checked={checkedButtons.includes("privacy") ? true : false}
                                />
                                <i></i>
                                <p>개인정보 수집∙이용 동의<span className={styles.point}>(필수)</span></p>
                            </label>
                        </div>
                        <a className={styles.policy}>약관보기</a>
                    </li>
                    <li>
                        <div className={styles.wrap}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="age"
                                    onChange={e => {
                                        singleCheckedHandler(e.target.checked, "age")
                                    }}
                                    checked={checkedButtons.includes("age") ? true : false}
                                />
                                <i></i>
                                <p>본인은 만 14세 이상입니다.<span className={styles.point}>(필수)</span></p>
                            </label>
                        </div>
                        <a className={styles.policy}>약관보기</a>
                    </li>
                </ul>


                <button onClick={showModal}>모달 버튼</button>
                {openModal && <Modal setOpenModal={setOpenModal} />}

                <div className={styles.btn}>
                    <button
                        className={styles.btn_wrap}
                        onClick={() => {
                            disabled
                                ? alert("필수 항목을 동의 해주세요.")
                                : alert("완료")
                        }}
                        style={
                            disabled
                                ? { backgroundColor: '#ccc' }
                                : { backgroundColor: '#5f0080' }
                        }
                    >
                        가입하기
                    </button>
                </div>
            </div>
        </>
    )
}

export default Index