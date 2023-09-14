<slot />
<main>
  <style>
    :root {
      --gold: #e1c253;
      --darkblue: #061528;
      --offwhite: #fffbea;
      --lightblue: #062968;
      background: url(background-stars.jpg);
    }

    h1,
    h2 {
      font-family: "Elsie";
      color: var(--offwhite);
    }

    p {
      font-family: "Montserrat";
      color: var(--offwhite);
    }

    button {
      font-family: "Elsie";
      width: 135px;
      height: 35px;
      /* background: rgb(202, 162, 82); */
      background: linear-gradient(
        90deg,
        rgba(225, 194, 83, 1) 0%,
        rgba(255, 231, 183, 1) 50%,
        rgba(225, 194, 83, 1) 100%
      );
      color: var(--darkblue);
      border-style: solid;
      border-width: 1px;
      border-color: var(--darkblue);
    }
  </style>
</main>
