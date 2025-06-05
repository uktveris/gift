import './App.css'
import BlurText from './components/BlurText';
import ShinyText from './components/ShinyText'
import emailjs from "emailjs-com";

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
    <>
      <h1><BlurText
      text="Labas fainuole"
      delay={100}
      animateBy="letters"
      direction="top"
      onAnimationComplete={handleAnimationComplete}
      />
      </h1>
      {/* <h1><ShinyText text="Labas fainuole" disabled={false} speed={3}/></h1> */}
      <div className="card">
        <button onClick={sendEmail}>
          {/* count is {count} */}
          <ShinyText text="Taip" disabled={false} speed={2} />
        </button>
        <button>
          <p className="bigtext">Nope</p> 
          <div className="smalltext">(labai prasau nespausk)</div>
        </button>
      </div>
    </>
  )
}

export default App
