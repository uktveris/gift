import './App.css'
import BlurText from './components/BlurText';
import ShinyText from './components/ShinyText'
import emailjs from "emailjs-com";
import TextBox from './components/TextBox';

function App() {
  
  const handleAnimationComplete = () => {
    console.log("text animation finished");
  }
  
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      "service_t1kyjxs",
      "template_5yajfdr", 
      {
      to_email: "speakserslanguageapp@gmail.com, marius.uktveris@gmail.com",
      from_name: "Kazkoks appsas",
      message: "date'as patvirtintas, jau gali ruostis",
      },
      "_tMxsmsddi8MdvfGM"
  ).then(
    (result) => {console.log("email sent:", result.text);},
    (error) => {console.log("email error:", error.text);}
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
        <button onClick={sendEmail}>
          {/* count is {count} */}
          <ShinyText text="Taip" disabled={false} speed={2} />
        </button>
        <button className="nope-button">
          <p className="bigtext">Nope</p> 
          <div className="smalltext">(labai prasau nespausk)</div>
        </button>
      </div>
    </div>
  )
}

export default App
