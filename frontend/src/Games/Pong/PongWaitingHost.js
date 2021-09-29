import React, {useEffect, useRef, useState} from 'react'
import { useHistory } from 'react-router-dom'
import io from "socket.io-client"
import PongGameView from './PongGameView';

// import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose"; //입력에서 한 손 감지
import Webcam from "react-webcam";
import { drawHand } from "./Utilities";

import * as fp from "fingerpose"; //손가락 분류
// import { logSoftmax } from "@tensorflow/tfjs";
import Player from "./Player";

let socket;
const PongWaitingHost = (props) =>{

  let history = useHistory()
  const roomNumber = props.history.location.newRoom;
  const nickName = props.history.location.newNickName;

  const [currentUser, setCurrentUser] = useState();

  const enterCode = useRef()

  useEffect(()=>{
    socket = io.connect("http://localhost:80/pong");
    socket.emit("join room", roomNumber, nickName);

    socket.on('userList', (data) => {
      console.log(data);
      console.log(data.length)
      setCurrentUser(data.length);
    });
  },[])

  const gameStart = ()=>{
    socket.emit('game start',roomNumber)
    history.push({
      pathname: "/pong",
      socket : socket
    })
  }

  const style = {
    marginRight: '10px',
    width: '30%'
  }

  const center = {
    textAlign : 'center'
  }
  return(
    <div>
      <h1>PongWaitingHost</h1>
        
        <div>
        <div style={center}>NAME : {nickName}</div>
        {/* 여기에 pingpon게임이랑 webcam 컴포넌트 추가!!!!! */}
        <p id="game_menu"></p>
        <PongGameView />
        <div style={center}>
          <div>
            <input
                type="text"
                id="enter_room_host"
                className="modal-input"
                value={roomNumber}
                ref={enterCode}
                style={style}
                disabled
            />
            <button onClick={() => navigator.clipboard.writeText(enterCode.current.value)}>복사</button>
          </div>

          <div>{currentUser}명 대기중..
            <button onClick={gameStart}>게임시작</button>
          </div>
        </div>
      </div>
      
     

    </div>
  )
}

export default PongWaitingHost