import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Reset margins */

body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}

/* Body set up */

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  line-height: 1.5;
}

body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
}



/* Forms */

input,
button,
textarea,
select,
option {
  font: inherit;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

:root {
  --dark-grey: hsl(226, 6%, 40%);
  --grey: hsl(223, 7%, 53%);
  --light-grey: #c9cdd9;
  --very-light-grey: hsl(230, 21%, 95%);
  --black: hsl(0, 0%, 5%);
  --white: hsl(0, 0%, 100%);

  --main-width: 80%;
  --tablet-width: 90%;

  --max-width: 1140px;
  --small-text: 14px;
  --big-text: 42px;
  --title-desktop-text: 3.8rem;
  --title-mobile-text: 1.8rem;
  --body-mobile-text: 1.4rem;
}

`;

export default GlobalStyles;
