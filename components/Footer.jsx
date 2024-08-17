import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const handleClick = (event) => {
    event.preventDefault();
    alert("Coming soon");
  };

  return (
    <footer
      id="footer"
      style={{ backgroundColor: "#8D5DF4" }}
      className="text-white py-5 mt-auto w-full opacity-65"
    >
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-4 mb-4">
          <li>
            <Link href="https://www.linkedin.com" legacyBehavior>
              <a
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com" legacyBehavior>
              <a
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                <span className="sr-only">Instagram</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com" legacyBehavior>
              <a
                onClick={handleClick}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                <span className="sr-only">Facebook</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Cindy0202-mae/Flashcard-SaaS-Project" legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-300 transition"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <span className="sr-only">Github</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="mailto:spongheen@gmail.com" legacyBehavior>
              <a
                className="text-white hover:text-purple-300 transition"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <span className="sr-only">Email</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center text-sm text-zinc-200">
          <li>&copy; NovaCopy AI 2024</li>
        </ul>
      </div>
    </footer>
  );
}
