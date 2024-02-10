import { useState } from "react";
import Logo from "./assets/logo.svg";
import "./App.css";
import background from "./assets/background.svg";
import value from "./assets/Values.svg";
import solutions from "./assets/Solutions.svg";
import teams from "./assets/Teams.svg";
import backers from "./assets/Backers.svg";
import arrow from "./assets/arrow.svg";
import cta from "./assets/cta.svg";

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="">
            <img src={Logo} className="logo" alt="React logo" />
          </a>
          <ul>
            <li>
              <a href="">
                <img src={value}></img>Values
              </a>
            </li>
            <li>
              <a href="">
                <img src={solutions}></img>Solutions
              </a>
            </li>
            <li>
              <a href="">
                <img src={teams}></img>Teams
              </a>
            </li>
            <li>
              <a href="">
                <img src={backers}></img>Backers
              </a>
            </li>
          </ul>
          <div>
            <button className="btnStart">Get Started</button>
            <button className="btnMore">...</button>
          </div>
        </nav>
      </header>
      <main>
        <img src={background} alt="" className="background" />
        <h1>
          A <span>New Era</span> For Crypto
        </h1>
        <div className="card">
          <p>
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero
          </p>
          <button className="btnStart">
            Get Started <img src={arrow} alt="" />
          </button>
        </div>
        <img src={cta} alt="" className="cta" />
      </main>
      <section>
        <p>bandeau défilante</p>
      </section>
      <section>
        <div>
          <h1>Solutions for everyone</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, debitis.
          </p>
        </div>
        <div>
          <div>
            <p>Bitocoin Screener</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <p>Bitocoin Screener</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <p>Bitocoin Screener</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <p>Bitocoin Screener</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </section>
      <img src={backers} alt="" />
      <footer>
        <p>JOIN THE FOUNDATION</p>
        <p>NAKAYOSHI</p>
        <p>
          Join the Foundation and play an active part in building a better
          world. Let's work together to build a future of progress, inclusion
          and success.
        </p>
        <button>Be Part Of The Future</button>
      </footer>
    </>
  );
}

export default App;
