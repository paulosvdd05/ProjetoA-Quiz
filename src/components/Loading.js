import React from 'react';
import { SyncLoader } from 'react-spinners';

function Loading() {
  return (
    <div style={styles.container}>
      <h1 style={styles.textQuiz}>Quiz</h1>
      <SyncLoader color="white" />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#4A90E2',
  },
  textQuiz:{
    color: 'white',
    fontSize: '3em', 
    fontFamily: 'Arial, sans-serif',
    
  }
};

export default Loading;