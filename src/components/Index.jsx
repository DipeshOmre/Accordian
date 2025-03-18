import React, { useState } from 'react'
import data1 from './data'
import './style.css'
export default function Index() {
    const [select, setSelect] = useState(null)
    const [visible, setVisible] = useState(data1.map(e => false))
    const [check, setCheck] = useState(true)
    // if check true multiple selection is enabled

    const handleanswer = (id) => {
        setVisible(visible.map((val, idx) => (idx + 1 === id ? !val : val)))
    }
    const handleanswer1 = (id) => {
        if(visible[id-1]===true)setVisible(visible.map((val, idx) => (idx + 1 === id ? false : false)))
        else setVisible(visible.map((val, idx) => (idx + 1 === id ? true : false)))
    }
    return (
        <div className="wrapper">
            <button onClick={() => {
                setCheck(!check)
                setVisible(data1.map(e => false))
            }
            }>Chage-Selection</button>
            <div className="accordian">
                {(data1 && data1.length > 0) ?
                    data1.map((e) => {
                        return (
                            <div className="item" key={e.id}>
                                <div onClick={() => {
                                    if (check) handleanswer(e.id);
                                    else {
                                        handleanswer1(e.id);
                                    }
                                }} className='title'>
                                    <h3>{e.question}</h3>
                                    <span>+</span>
                                </div>
                                {visible[e.id - 1] ? <div>{e.answer}</div> : null}
                            </div>
                        )
                    })
                    : <div>No data found</div>}
            </div>
        </div>
    )

}


