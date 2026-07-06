import { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "./Home.css";
import Contact from "../components/Contact";
import Button from "../components/Button";

function Home() {
  const navItems: Record<string, string> = {
    resume: "/resume.pdf"
  };

  useEffect(() => {
    document.title = "Rishab Karki - Home";
  }, []);

  return (
    <div className="home-container">
      <div>
        <Navbar navItems={navItems}>
          <a href="/">imrishhh</a>
        </Navbar>
      </div>
      <div className="home-card-container" style={{ paddingTop: "80px" }}>
        <div className="home-card-content">
          <h2>About Me</h2>
          <p>
            Hey, I'm <span className="home-card-content-name">Rishab Karki</span> — an undergraduate computer science student passionate
            about building and learning.
          </p>
          <h4>Areas of interest:</h4>
          <ul>
            <li>Backend Development</li>
            <li>Linux</li>
            <li>Artificial Intelligence (Machine Learning specifically)</li>
            <li>Cybersecurity</li>
            <li>System Programming</li>
          </ul>

          <h3>Technical Skills</h3>
          <ul>
            <li>Programming Languages: Go・Python・Typescript・C/CPP・Rust</li>
            <li>Backend: GoFiber・Express・FastAPI・Django</li>
            <li>Databases: PostgreSQL・MySQL・Redis・MongoDB</li>
            <li>Version Control &amp; Collaboration: Git・Github・Codeberg</li>
            <li>DevOPS &amp; Infrastructure: Docker・Linux・Bare Metal Servers・Nginx </li>
          </ul>
          <p>
            <Button onClick={() => { window.open('mailto:rishabkarki78@gmail.com', "_blank") }}>
              Contact Me
            </Button>
            <br />
            <h3>Socials</h3>
            <Contact />
          </p>
        </div>
      </div >
    </div >
  );
}

export default Home;
