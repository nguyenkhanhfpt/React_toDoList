import React, {useState} from 'react';
import './ToDoList.scss';
import classNames from 'classnames';

import dont from '../images/correct.png';
import did from '../images/tick.png';
import remove from '../images/close.png';

function ToDoList() {
    let input = React.createRef();
    let [datas, setDatas] = useState([
        {name: 'Sleep', isCompleted: false},
        {name: 'Eat', isCompleted: true}
    ]);
    let [filter, setFilter] = useState('All');

    const clickItem = (item) => {
        return () => {
            let status = item.isCompleted;
            let index = datas.indexOf(item);
            
            setDatas(
                datas = [
                    ...datas.slice(0, index),
                    {...item, isCompleted: !status},
                    ...datas.slice(index + 1)
                ]
            )
        }
    }

    const addNew = (event) => {
        if(event.keyCode === 13) {
            let toDo = event.target.value;

            if(toDo.length === 0) {
                return;
            }
            setDatas(
                datas = [
                    {name: toDo, isCompleted: false},
                    ...datas.slice()
                ]
            )
            input.current.value = '';
        }
    }

    const deleteItem = (item) => {
        return () => {
            let index = datas.indexOf(item);
            
            setDatas(
                datas = [
                    ...datas.slice(0, index),
                    ...datas.slice(index + 1)
                ]
            )
        }
    }

    const changeFilter = event => {
        setFilter(
            filter = event.target.textContent
        );
    }

    let filterDatas = datas.filter(item => {
        if(filter === 'Active') {
            return item.isCompleted === false;
        }
        else if(filter === 'Completed') {
            return item.isCompleted === true;
        }
        else {
            return item;
        }
    });

    return(
        <div class="toDoList">
            <h2 className="text-center">To do list</h2>

            <div className="toDoBox">
                <div className="toDoBox__header">
                    <input ref={input} type="text" onKeyUp={addNew} placeholder="Enter new item" />
                </div>
                {filterDatas.map((item, key) => (
                    <div className="toDo__item" key={key}>
                        {item.isCompleted ? <img src={did} alt="" className="tick"/> :
                        <img src={dont} alt="" className="tick"/> }
                        <p onClick={clickItem(item)} className={classNames({
                            active: item.isCompleted === true
                        })} >{item.name}</p>
                        <img src={remove} alt="" width="12" onClick={deleteItem(item)}/>
                    </div>
                ))}
                
                <div className="toDoBox__footer">
                    <span onClick={changeFilter} className={classNames({
                        active: filter === 'All'
                    })}>
                        All
                    </span>
                    <span onClick={changeFilter} className={classNames({
                        active: filter === 'Active'
                    })}>
                        Active
                    </span>
                    <span onClick={changeFilter} className={classNames({
                        active: filter === 'Completed'
                    })}>
                        Completed
                    </span>
                </div>
            </div>

        </div>
    );
} 

export default ToDoList;