import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme)=>({
    appBar:{
        [theme.breakpoints.down('xs')]:{
            width: '90%'
        },
    },
    wrapper:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',

    }
}))

const App = () => {
    const classes = useStyles();
  return (
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <Typography variant='h2' align='center'>Video Conference</Typography>
        </AppBar>
        <VideoPlayer />
        <Options>
            <Notifications/>
        </Options>
      </div>
  )
}

export default App