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
import team from "./assets/theteam.svg";
import icon from "./assets/Icon.svg";
import greenarrow from "./assets/greenarrow.svg";
import graph from "./assets/graph.svg";
import thunder from "./assets/thunder.svg";
import rome from "./assets/rome.svg";
import tools from "./assets/tools.svg";

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
                        <button className="btnMore">
                            <img src={icon} alt="" />
                        </button>
                    </div>
                </nav>
            </header>
            <main>
                <img src={background} alt="" className="background" />
                <h1 className="first-title">
                    A <span>New Era</span> For Crypto
                </h1>
                <div className="card">
                    <p>
                        Morem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero
                    </p>
                    <button className="btnStart">
                        Get Started <img src={arrow} alt="" />
                    </button>
                </div>
                <img src={cta} alt="" className="cta" />
            </main>
            <section className="dropdownBanner">
                <p>bandeau défilante</p>
            </section>
            <section>
                <div className="section1">
                    <h2>Solutions for everyone</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur, debitis.
                    </p>
                </div>
                <ul className="section2">
                    <li>
                        <div>
                            <img src={graph}></img>
                            <h3>Bitocoin Screener</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <p>
                            Q1 2024 <img src={greenarrow} alt="" />
                        </p>
                    </li>
                    <li>
                        <div>
                            <img src={thunder}></img>
                            <h3>Bitocoin Screener</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <p>
                            Q1 2024 <img src={greenarrow} alt="" />
                        </p>
                    </li>
                    <li>
                        <div>
                            <img src={rome}></img>
                            <h3>Bitocoin Screener</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <p>
                            Q1 2024 <img src={greenarrow} alt="" />
                        </p>
                    </li>
                    <li>
                        <div>
                            <img src={tools}></img>
                            <h3>Bitocoin Screener</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <p>
                            Q1 2024 <img src={greenarrow} alt="" />
                        </p>
                    </li>
                </ul>
            </section>
            <div className="team">
                <img src={team} alt="" />
            </div>
            <footer>
                <div className="footer">
                    <h2>JOIN THE FOUNDATION</h2>
                    <h3>NAKAYOSHI</h3>
                    <p>
                        Join the Foundation and play an active part in building
                        a better world. Let's work together to build a future of
                        progress, inclusion and success.
                    </p>
                    <button>Be Part Of The Future</button>
                </div>
            </footer>
        </>
    );
}

export default App;
