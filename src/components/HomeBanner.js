import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import me from "../assets/images/me.jpg";
import me2 from "../assets/images/me2.png";
import { useState, useEffect } from "react";
import heart from "../assets/images/heartPortfolio.png";
import star from "../assets/images/starPortfolio.png";

export const HomeBanner = () => {
  const [loopNum, setLoopNum] = useState(0); //which word (index) in animateWords is animated
  const [deletingTxt, setIsDeleting] = useState(false); //weather typing or deleting text 
  const animateWords = ["Passtionate CS Student", "Software Developer", "Mentor"];
  const [amText, setText] = useState('');
  const [delta, setDelta] = useState(260); //spped of typing and deletng 
  const period = 1700; //time pass after fully typign word before startign to delete

  useEffect(() => { //sets a timer to update text on screen 
    let ticker = setInterval(() => {
      tick(); //handles typing logic 
    }, delta); //thjat happens every delta seconds

    return () => { clearInterval(ticker); };
  }, [amText]); //run useEffect every time text updates, clears timer and starts new one evcery time 

  /*
delta controls how often tick() is called
but the effect itself (the useEffect function) 
runs only when text changes (because of [text])
  */

  const tick = () => {
    let i = loopNum % animateWords.length;
    let fulltxt = animateWords[i];
    //updates the text to add or minus a character depenign id deleting is true or nto
    let updatedTxt = deletingTxt ? fulltxt.substring(0, amText.length -1) : fulltxt.substring(0, amText.length + 1)
    
    setText(updatedTxt); 
    if (deletingTxt){
        setDelta(prevDelta => prevDelta /1.7) //delete faster than typing 
    }
    if (!deletingTxt && updatedTxt == fulltxt){
        setIsDeleting(true); 
        setDelta(period);
    }
    else if(deletingTxt && updatedTxt === ""){
        setIsDeleting(false); //go back to typing text now 
        setLoopNum(loopNum + 1); 
        setDelta(300); 
    }

  }   

  return (
    <section className="banner" id="home">
      <Container> {/*centers  content horizontally and applies responsive paddi */}
        <Row className="align-items-center"> {/* divides space horizontally into a row of column  */}
          <Col xs={12} md={6} xl={7}> {/* reps a unit of space inside a ropw and uses a 12 column grid system */  }
            <span className="tagline">Welcome To Mychaela's Portfolio</span>
            <h1>{'Hi! I am a '} <span className='wrap'>{amText}</span></h1>
            <p>I am a third year computer science student at McMaster University in their co-op program. I love to...</p>
            <button onClick={() => console.log('connect')}>
              Let's Connect <BsArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="heart-container">
                <img src={me2} alt="HeaderImage" className="me" />
                <img src={heart} className="heart heart1" />
                <img src={heart}  className="heart heart2" />
                <img src={heart}  className="heart heart3" />
                <img src={heart}  className="heart heart4" />
                <img src={heart}  className="heart heart5" />
                <img src={star}  className="heart star1" />
                <img src={star}  className="heart star2" />
                <img src={star}  className="heart star3" />
                <img src={star}  className="heart star4" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
