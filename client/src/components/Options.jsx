import React, { useContext, useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Assignment} from '@material-ui/icons'
import { SocketContext } from '../SocketContext'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '10px 20px',
      border: '2px solid black',
    },
  }));
const Options = ({children}) => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
const [idToCall, setIdToCall] = useState('')
const classes = useStyles()
  return (
    <div>Options
        {children}
    </div>
  )
}

export default Options