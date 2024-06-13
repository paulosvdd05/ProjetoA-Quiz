import React from 'react';

function Loading() {
  return (
    <div style={styles.container}>
      <h1 style={styles.textQuiz}>Quiz</h1>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
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