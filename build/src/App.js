import avMark from "./images/avatar-mark-webber.webp"
import avAngela from "./images/avatar-angela-gray.webp"
import avJacob from "./images/avatar-jacob-thompson.webp"
import avRizky from "./images/avatar-rizky-hasanuddin.webp"
import avkimberly from "./images/avatar-kimberly-smith.webp"
import avChess from "./images/image-chess.webp"
import avNathan from "./images/avatar-nathan-peterson.webp"
import avAnna from "./images/avatar-anna-kim.webp"
import './App.css';
import { useState } from "react"

function App(){

const [count, setCount] = useState(3)
  const ids = ["noti__new", "noti__new1", "noti__new2"]
    const dots = ["dot1", "dot2", "dot3"]

      const DotItems = ()=>{
        dots.map((dot)=>{
          const reuse = document.getElementById(dot)
            if(reuse){
              reuse.style.display = "none"
            }
        })
      }

      const ReadMessages  = ()=>{

        DotItems()

        ids.map((item)=>{
          const element = document.getElementById(item)
            if(element){
              element.style.backgroundColor = "white"
                setCount(0)
  }
})}
      const ReadMessage1 = ()=>{
        const message1 = document.getElementById(ids[0])
          const dot1 = document.getElementById(dots[0])
            setCount(count - 1)
              if (message1) {
              message1.style.backgroundColor = "white";
                          }
              if (dot1) {
                dot1.style.display = "none";
                        }
      }

      const ReadMessage2 = ()=>{
        const message2 = document.getElementById(ids[1])
          const dot2 = document.getElementById(dots[1])
            setCount(count - 1)
              if (message2) {
              message2.style.backgroundColor = "white";
                          }
              if (dot2) {
                dot2.style.display = "none";
                        }
      }

      const ReadMessage3 = ()=>{
        const message3 = document.getElementById(ids[2])
          const dot3 = document.getElementById(dots[2])
            setCount(count - 1)
              if (message3) {
              message3.style.backgroundColor = "white";
                          }
              if (dot3) {
                dot3.style.display = "none";
                        }
      }

  return (
<div className="container">
  <div className="header">
    <h2>Notifications </h2>
      <p className="three">{count}</p>
        <button onClick={ReadMessages}>Mark all as read</button>
  </div>
<div className="notifications" id="noti__new" onClick={ReadMessage1}>
<img src= {avMark} /> 
  <div className= "align__date">
    <div className="text__set"> 
      <p><b>Mark Webber&nbsp;</b>
        reacted to your recent post&nbsp;
          <b> My first tournament today! </b></p><div className="yes__dot" id="dot1">.</div><br></br>
            </div>
              <small>&nbsp;1m ago</small></div>
</div>
<div className="notifications" id="noti__new1" onClick={ReadMessage2}>
  <img src= {avAngela} />
    <div className= "align__date"> 
      <div className="text__set1">
        <p><b>Angela Gray&nbsp;</b>
           followed you</p><div className="yes__dot"id="dot2">.</div><br></br>
            </div>
              <small>&nbsp;5m ago</small>
                </div>  
</div>
  <div className="notifications" id="noti__new2" onClick={ReadMessage3}>
    <img src= {avJacob} /> 
      <div className= "align__date">
        <div className="text__set2">
          <p><b>Jacob Thompson&nbsp;</b>
             has joined your group&nbsp; 
              <a>Chess Club</a></p>
                <div className="yes__dot"id="dot3">.</div><br></br>
                  </div>
                    <small>&nbsp;1 day ago</small>
                      </div>
</div>
  <div className="notifications">
    <img src= {avRizky} /> 
      <div className="align__text">
        <div className="text__set3"><p><b>Rizky Hasanuddin&nbsp;</b>
           sent you a private message</p><br></br>
            </div>
              <small>&nbsp;5 days ago</small>
                <div className="textarea">Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                  I'm already having lots of fun and improving my game.
                  </div>
                    </div>
</div>
  <div className="notifications">
    <img src= {avkimberly} />
      <div className= "align__date">
        <div className="text__set4">
          <p><b>Kimberly Smith&nbsp;</b>
             commented on your picture</p>
              <img src= {avChess}/>
                <br></br>
                  </div>
                    <small>1 week ago</small></div>
</div>
<div className="notifications">
  <img src= {avNathan} />
    <div className= "align__date">
      <div className="text__set5">
        <p><b>Nathan Peterson&nbsp;</b>
          reacted to your recent post&nbsp;
            <b>5 end-game strategies to increase your win rate</b></p> 
              </div>
                <small>2 weeks ago</small>
                  </div>
</div>
<div className="notifications">
  <img src= {avAnna} />
    <div className= "align__date">
      <div className="text__set6">
        <p><b>Anna Kim&nbsp;</b> 
          left the group&nbsp;
            <a>Chess Club</a></p> <br></br>
              </div>
                <small>2 weeks ago</small>
                  </div>
</div>
<div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/Alan-H-H">Alan Hackbartt</a>.
</div>
</div>
  
  );
}

export default App;
