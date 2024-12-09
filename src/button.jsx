import { useState } from "react";
import "./index.css"

export default function ButtonDisplay() {
    const [dis, setDis] = useState(false)
    const [count, setCount] = useState(0)
    const [task, setTask] = useState(()=>JSON.parse(localStorage.getItem('task'))||[])
    // const [radioVal, setRadioVal] = useState([])
    // const [check, setCheck] = useState([])
    // const handleChangeRadio = (event, val) => {
    //     let newRadioVal = [...radioVal]
    //     const newCheck = [...check]
    //     if (newRadioVal.includes(val)) {
    //         newRadioVal = newRadioVal.filter((value) => value !== val);
    //         newCheck[val] = false
    //     }
    //     else {
    //         newRadioVal.push(val)
    //         newCheck[val] = true
    //     }

    //     setRadioVal(newRadioVal)
    //     setCheck(newCheck)
    // }
    const handleChange = (event) => {
        const newTask = [...task]
        newTask[count] = event.target.value
        setTask(newTask)

    }
    const addFunc = () => {
        setDis(true)
        setTask([...task, ''])
        // setCheck([...check, false])
    }
    const addTask = () => {
        setCount(count + 1)
        setDis(false)
    }

    const removeTask = (index) => {
        const newTask = [...task]
        newTask.splice(index,1)
        // radioVal.map((val) => {
        //     newTask.splice(val, 1)
        //     setCount(count - 1)
        // })
        // setCheck([])
        setTask(newTask)
        setCount(count-1)
        // setRadioVal([])
    }
    localStorage.setItem('task',JSON.stringify(task))
    return (
        <div>
            <div className="button">
                <button onClick={addFunc} className="btn">Add Task</button>
                <button onClick={removeTask} className="btn">Remove Task</button>
            </div>
            <div className='taskInput' style={{ display: dis ? 'grid' : 'none' }}>
                <div>Enter Task: <input type="text" value={task[count]} onChange={(event) => handleChange(event)} className="textField" /></div>
                <div style={{ display: 'flex', justifyContent: 'center',paddingTop:'20px' }}>
                    <button onClick={addTask} className="submitBtn">Confirm</button>
                </div>
            </div>
            <div>{task.map((data, index) => (
                <div className="task">
                    {/* <input type="checkbox" checked={check[index]} onChange={(event) => handleChangeRadio(event, index)} style={{scale:'2'}} className="check"/> */}
                    <div style={{width:'100rem'}}>{data}</div>
                    <i class="fa-light fa-trash" onClick={()=>removeTask(index)}></i>
                </div>
            ))}</div>
        </div>
    )
    
}

