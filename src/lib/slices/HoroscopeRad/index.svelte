<script>
  /** @type {import("@prismicio/client").Content.HoroscopeRadSlice} */
  export let slice;

  console.log(slice);
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <article>hiii</article>
  {#each slice.items as item}
    <a href="/{item.rads.slug}">
      <div>
        <p>{item.rads.data.title[0].text}</p>

        <img
          src={item.rads.data.zodiacicon.url}
          alt={item.rads.data.title[0].text}
          width="60"
          height="60"
        />
      </div>
    </a>
  {/each}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 30vh;
    position: relative;
    bottom: 2rem;
    -webkit-animation: spin 12s linear infinite;
    -moz-animation: spin 12s linear infinite;
    animation: spin 12s linear infinite;
    /* background-color: aqua; */
  }
  a {
    display: flex;
    justify-content: center;
    position: absolute;
    text-decoration: none;
    width: 0;
    height: 30%;
    border-style: solid;
    transform-origin: bottom center;
    transform: rotate(0deg);
    text-align: center;
    cursor: pointer;
    border: none;
    padding: 3em;
    color: white;
    border-top: 20px solid var(--gold);
    border-right: solid 20px transparent;
    border-bottom: solid 20px transparent;
    border-left: solid 20px transparent;
    font-family: "Montserrat";
    font-size: 0.7em;
  }
  a:nth-child(1) {
    transform: rotate(5deg);
    z-index: 9999;
  }
  a:nth-child(2) {
    transform: rotate(60deg);
  }
  a:nth-child(3) {
    transform: rotate(90deg);
  }
  a:nth-child(4) {
    transform: rotate(120deg);
  }
  a:nth-child(5) {
    transform: rotate(150deg);
  }
  a:nth-child(6) {
    transform: rotate(180deg);
  }
  a:nth-child(7) {
    transform: rotate(210deg);
  }
  a:nth-child(8) {
    transform: rotate(240deg);
  }
  a:nth-child(9) {
    transform: rotate(270deg);
  }
  a:nth-child(10) {
    transform: rotate(300deg);
  }
  a:nth-child(11) {
    transform: rotate(330deg);
  }
  a:nth-child(12) {
    transform: rotate(33deg);
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (min-width: 600px) {
    section {
      height: 60vh;
    }
  }
</style>
