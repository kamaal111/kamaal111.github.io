import React from 'react';

const Styles = () => {
  return (
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin-left: 8px;
          margin-right: 8px;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
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
  );
};

export default Styles;
