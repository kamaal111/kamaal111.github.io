import React from 'react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin-left: 0;
            margin-right: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          * {
            box-sizing: border-box;
          }

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
        `}
      </style>
    </>
  );
}

export default MyApp;
