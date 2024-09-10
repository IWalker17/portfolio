import { useState, useEffect, ReactElement } from 'react';
import './../../styles/home.css';

const MESSAGES = [
  'abcdefghijklmnopqrstuvwxyz', 
  '012345678910'
];

function Home() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(MESSAGES[0]);
  const [terminalBuffer, setTerminalBuffer] = useState('');
  const [lineCount, setLineCount] = useState(0);

  // useEffect(() => {
  //   if (messageIndex < MESSAGES.length) {
  //     console.log('useEffect :: messageIndex: ', messageIndex);
  //     renderTerminalLines();
  //   } else {
  //     console.log('DONE!');
  //   }
  // })

  const renderTerminalLines = (): JSX.Element | null => {
    let index;
    for (let i = 0; i < MESSAGES[messageIndex].length; i++) {
      index = i;
      let delay = Math.floor(Math.random() * 4500);
        setTimeout(() => {

          console.log(`
            renderTerminalLines :: for :: setTimeout: \n
            \t terminalBuffer.includes(MESSAGES[messageIndex]): ${terminalBuffer.includes(MESSAGES[messageIndex])}\n
            \t MESSAGES[messageIndex]: ${MESSAGES[messageIndex]}\n
            \t terminalBuffer: ${terminalBuffer}\n
          `);
          
          if (!terminalBuffer.includes(MESSAGES[messageIndex])) {
          
            console.log('SECOND');
            console.log('SECOND :: MESSAGES[messageIndex]', MESSAGES[messageIndex]);
          
            let temp = terminalBuffer + currentMessage[0];
            let newCurrentMessage = currentMessage.substring(1)
          
            console.log('SECOND :: newCurrentMessage: ', newCurrentMessage);
            console.log(`SECOND :: newCurrentMessage.length: ${newCurrentMessage.length}`);
            
            if (newCurrentMessage.length === 0) {
              setTerminalBuffer(s => s + currentMessage[0] + '\n' + '[isaiah] ~: ');
              // setTerminalBuffer(() => temp);
              console.log('SECOND :: temp: ', temp);
              console.log('SECOND :: messageIndex + 1: ', messageIndex + 1);
          
              if ((messageIndex + 1) < MESSAGES.length) {
          
                console.log('testing 2...');
          
                let newMessageIndex = messageIndex + 1;
                console.log('newMessageIndex: ', newMessageIndex);
                setMessageIndex(newIndex => newIndex + 1)
                setCurrentMessage(_ => MESSAGES[newMessageIndex]);
              }
            } else {
              
              console.log('SECOND :: ELSE :: newCurrentMessage: ', newCurrentMessage);
              
              setTerminalBuffer(s => s + currentMessage[0]);
              setCurrentMessage(_ => newCurrentMessage);
            }
          } else if (terminalBuffer.includes(MESSAGES[messageIndex])) {
            
            console.log('enter THIRD: ', terminalBuffer.includes(MESSAGES[messageIndex]));
            console.log('enter THIRD: ', MESSAGES[messageIndex]);
            console.log('enter THIRD: ', terminalBuffer);
            console.log('THIRD');

            if (MESSAGES[messageIndex + 1]) {
              setMessageIndex(n => n + 1)
              setCurrentMessage(_ => currentMessage.substring(1));
              setTerminalBuffer(s => s + '\n');
            }
            
            // let newCurrentMessage = currentMessage.substring(1)
            // if (i === currentMessage.length - 1) {
            //   let newMessageIndex = messageIndex + 1;
            //   newCurrentMessage = MESSAGES[newMessageIndex];
            //   if (newCurrentMessage != null) {
            //     setMessageIndex(n => n + 1)
            //     setCurrentMessage(_ => newCurrentMessage);
            //     // renderTerminalLines();
            //   }
            // }
            // setCurrentMessage(_ => newCurrentMessage);
            // setTerminalBuffer(s => s + '\n');
          } else {
            console.log('NO STATE CHANGES...');
          }
          // setLineCount(() => lineCount + 1);
          
        }, delay)
    }
    
    
    // MESSAGES.forEach((message, index) => {
    //   console.log('message: ', MESSAGES[messageIndex]);
    //   console.log('messageIndex: ', messageIndex);
    //   console.log('index: ', index);
    //   if (MESSAGES.filter((message) => terminalBuffer.includes(message)).length === MESSAGES.length) {
    //     return null;
    //   }
    //   for (let i = 0; i < MESSAGES[messageIndex].length; i++) {
    //     let delay = Math.floor(Math.random() * 1500);
    //     // console.log('here 1 :: delay: ', delay);
    //     setTimeout(() => {
    //       // console.log('here 2 :: In timeout with currentMessage of: ', currentMessage);
    //       if (currentMessage.length === 0) {
    //         console.log('setting currentMessage to message: ', MESSAGES[messageIndex]);
    //         setCurrentMessage(() => MESSAGES[messageIndex])
    //       } else if (!terminalBuffer.includes(MESSAGES[messageIndex])) {
    //         setTerminalBuffer(() => terminalBuffer + currentMessage[0]);
    //         currentMessage.substring(1)
    //         setCurrentMessage(() => currentMessage);
    //       } else {
    //         currentMessage.substring(1)
    //         setTerminalBuffer(() => terminalBuffer + '\n');
    //       } 
    //       setLineCount(() => lineCount + 1);
    //     }, delay)
    //   }
    // })
    console.log(`${messageIndex}-${index}`, terminalBuffer);
    // setMessageIndex(() => messageIndex + 1)
    return (
        <p key={`${messageIndex}-${index}`}>
          [<span className="terminal-profile">isaiah</span>] <span className="terminal-profile">~</span>: {terminalBuffer ?? ''}
        </p>
    )
  } 
  
  return (
    <div id='landing-container'>
      <div id='term-bar'>
        <div id='red'></div>
        <div id='yellow'></div>
        <div id='green'></div>
        <div id='tab'>
          <svg id='shell-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#04ca35" ><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z"/></svg>
          <span id='shell-name'>-zsh</span>
          <span id='tab-name'>⌘1</span>
        </div>
      </div>
      {/* {currentMessage != null && renderTerminalLines()} */}
    </div>
  );
}

export default Home;
