import './App.css';
import { Auth } from './components/Auth';
import { useState, useRef } from 'react';
import Cookies from "universal-cookie";
import { Chat } from './components/Chat';
import '../src/css/style.css'
const cookies = new  Cookies();

function App() {
  const [isAuth, setIsAuth] = useState( cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);
  if(!isAuth){
    return (
      <div className="App">
          <div><Auth setIsAuth={setIsAuth}/></div>
      </div>
    );
  }

  return( 
    <div>{room ?(
      <Chat room={room} /> 
      ) : (
      <form id='flex' onSubmit={() => setRoom(roomInputRef.current.value)} className='room'>
        <label>Rentrée dans le salon</label>
        <input id='salon' ref={roomInputRef}/> 
        <button id='btn' type='submit'>Entrée</button>
      </form> )}
      <section id='all'>
          <div className='box'>
            <h2>General</h2>
            <p>lorem loremloremlorem loremloremlorem loremloremlorem loremlorem </p>
            <button onClick={() => setRoom("General")}>Rejoindre</button>
          </div>

          <div className='box'>
            <h2>RPsofiane</h2>
            <p>lorem loremloremlorem loremloremlorem loremloremlorem loremlorem </p>
            <button onClick={() => setRoom("RPsofiane")}>Rejoindre</button>
          </div>

          <div className='box'>
            <h2>RPnathan</h2>
            <p>lorem loremloremlorem loremloremlorem loremloremlorem loremlorem </p>
            <button onClick={() => setRoom("RPnatahn")}>Rejoindre</button>
          </div>
        </section>

        <p id='footer'>&copy; 2023 Brice : <span className='bleu'>https://bricefrigo.github.io/Chat-Groupe/</span></p>
    </div>)}
export default App;
