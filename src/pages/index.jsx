/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

import About from '../components/Home/About';
import Header from '../components/Home/Header';
import Footer from '../components/Home/Footer';
import Projects from '../components/Home/projects/Projects';

import '../styles.css';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
      <style jsx global>{`
        @media (prefers-color-scheme: no-preference) {
          * {
            background-color: #ffffff;
          }

          h1,
          h2,
          h3,
          h4,
          p,
          i,
          span,
          strong {
            color: #000000;
          }

          /* unvisited link */
          a:link {
            color: #3492da;
          }

          /* visited link */
          a:visited {
            color: #6801b1;
          }

          /* mouse over link */
          a:hover {
            color: #d52d81;
          }

          /* selected link */
          a:active {
            color: #0202d2;
          }
        }
        @media (prefers-color-scheme: light) {
          * {
            background-color: #ffffff;
          }

          h1,
          h2,
          h3,
          h4,
          p,
          i,
          span,
          strong {
            color: #000000;
          }

          /* unvisited link */
          a:link {
            color: #3492da;
          }

          /* visited link */
          a:visited {
            color: #6801b1;
          }

          /* mouse over link */
          a:hover {
            color: #d52d81;
          }

          /* selected link */
          a:active {
            color: #0202d2;
          }
        }
        @media (prefers-color-scheme: dark) {
          * {
            background-color: #000000;
          }

          h1,
          h2,
          h3,
          h4,
          p,
          i,
          span,
          strong {
            color: #ffffff;
          }

          /* unvisited link */
          a:link {
            color: #3ca4f4;
          }

          /* visited link */
          a:visited {
            color: #7300c6;
          }

          /* mouse over link */
          a:hover {
            color: #ff389b;
          }

          /* selected link */
          a:active {
            color: #0000ff;
          }
        }
      `}</style>
    </div>
  );
}
