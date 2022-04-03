import React from 'react'
import './Todo.css';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from '@mui/material'

const Todo = (props) => {
  return (
      <List className='todo_list'>
          <ListItem>
              <ListItemAvatar>
                  <Avatar>
                    <imageIcon/>
                  </Avatar>
              </ListItemAvatar>
              <ListItemText primary={props.text} secondary='Dummy Deadline ..'/>
          </ListItem>
      </List>
  )
}

export default Todo