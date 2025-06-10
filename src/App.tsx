import './App.css'
import BlurText from './components/BlurText';
import ShinyText from './components/ShinyText'
import emailjs from "emailjs-com";
import TextBox from './components/TextBox';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [disabled, setDisabled] = useState(false);
  
  const handleAnimationComplete = () => {
    console.log("text animation finished");
  }
  
  const showToastSuccess = () => {
    toast.success("Pasitikrink emaila ;)", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressClassName: "toast-progress"
    })
  }
  
  const showToastError = () => {
    toast.error("kazkodel neissisiunte emailas :(", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressClassName: "toast-progress"
    })
  }
  
  const showToastSad = () => {
    toast.info("😭😭😭😭😢😢 Jei persigalvosi, visada gali pakeisti nuomone", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progressClassName: "toast-progress"
    })
  }
  
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);
    emailjs.send(
      "service_t1kyjxs",
      "template_5yajfdr", 
      {
      to_email: "Smiltealisauskaite1@gmail.com, marius.uktveris@gmail.com",
      from_name: "laba ;)",
      message: "date'as patvirtintas, jau gali ruostis",
      },
      "_tMxsmsddi8MdvfGM"
  ).then(
    (result) => {
      console.log("email sent:", result.text);
      setDisabled(false);
      showToastSuccess();
    },
    (error) => {
      console.log("email error:", error.text);
      setDisabled(false);
      showToastError();
    }
  );
  }

  return (
    <div className="main-container">
      <h1><BlurText
      text="Labas, fainuole"
      delay={100}
      animateBy="letters"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      />
      </h1>
      <TextBox />
      <div className="card">
        <button onClick={sendEmail} className={`yes-button ${disabled ? "disabled" : ""}`}>
          <ShinyText text="Taip" disabled={false} speed={2} />
        </button>
        <button className="nope-button" onClick={() => showToastSad()}>
          <p className="bigtext">Nope</p> 
          <div className="smalltext">(labai prasau nespausk :|)</div>
        </button>
      </div>
      <ToastContainer theme="dark" />
    </div>
  )
}

export default App
