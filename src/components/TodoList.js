import React from 'react'
import TodoItem from './TodoItem'
import styled from 'styled-components'


const TodoList = () => {
    return (
        <Wrapper>
            <TodoCategoryHeader>
                <CategoryIcon style={{ background:'#FD76A1' }}>
                    <i className={'fas fa-user'}/>    
                </CategoryIcon>
                <Title> Personal </Title>
                <TodoInput />
                <AddTodo className='fas fa-plus' />
            </TodoCategoryHeader>
            <TodoItem />
        </Wrapper>    
    )
}

export default TodoList

const Wrapper = styled.div`
    background-color: #20212d;
    margin-bottom: 30px;
    border-radius: 20px;
    overflow: hidden;
`

const TodoCategoryHeader = styled.div`
    background-color: #272833;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
`

const CategoryIcon = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-right: 10px;
`

const Title = styled.div`
    flex: 1;
    font-size: 18px;
    font-weight: 600;
`

const TodoInput = styled.input`
    height: 30px;
    font-size: 18px;
    outline: none;
    border: none;
    background-color: #20212d;
    border-radius: 4px;
    color: white;
    padding: 4px 10px;
    margin-right: 4px;
`

const AddTodo = styled.i`
    padding: 10px, 16px;
    border-radius: 4px;
    margin-right: -12px;
    
    &:hover{
        background-color: #20212d;
        transition: 0.3;
        cursor: pointer;
    }
`

const TodoListItems = styled.div``