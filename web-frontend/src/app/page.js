"use client";

import Image from 'next/image';
import Button from '../components/atoms/Button.js';

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <Image
          className="logo"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <h1 className="primary primary-font">Save and see your changes instantly</h1>
        <h1 className="primary secondary-font">Save and see your changes instantly</h1>
        <h1 className="secondary primary-font">Save and see your changes instantly</h1>
        <h1 className="secondary secondary-font">Save and see your changes instantly</h1>

        <h2 className="secondary secondary-font">-------</h2>
          
        <h2 className="primary primary-font">Save and see your changes instantly</h2>
        <h2 className="primary secondary-font">Save and see your changes instantly</h2>
        <h2 className="secondary primary-font">Save and see your changes instantly</h2>
        <h2 className="secondary secondary-font">Save and see your changes instantly</h2>

        <h2 className="secondary secondary-font">-------</h2>

        <p className="primary primary-font">Save and see your changes instantly</p>
        <p className="primary secondary-font">Save and see your changes instantly</p>
        <p className="secondary primary-font">Save and see your changes instantly</p>
        <p className="secondary secondary-font">Save and see your changes instantly</p>

        <div className="ctas">
          <Button 
            label="Everyone has the right" 
            icon="https://nextjs.org/icons/vercel.svg"
            onClick={() => window.open("https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", "_blank")} 
            className="primary"
          />
          <Button 
            label="Read our docs" 
            onClick={() => window.open("https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", "_blank")} 
            className="secondary"
          />
        </div>
      </main>
      <footer className="footer">
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
