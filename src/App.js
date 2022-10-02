import './App.css';
import './css/normalize.css';
import Testimonio from './components/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio 
        img='Shawn'
        name='Shawn Wang'
        city='Singapore'
        job='Software Engineer'
        work='Amazon'
        testimony="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonio 
        img='Sarah'
        name='Sarah Chima'
        city='Nigeria'
        job='Software Engineer'
        work='ChatDesk'
        testimony="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
        <Testimonio 
        img='Emma'
        name='Emma Bostian'
        city='Sweden'
        job='Software Engineer'
        work='Spotify'
        testimony="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
