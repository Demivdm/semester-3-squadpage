<script>
  /** @type {import("@prismicio/client").Content.MembersSlice} */
  export let slice;
  console.log(slice);
</script>

<section class="member-cards"
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  {#each slice.items as item}

    <section class="member-card">
     <div class="inner-card">
      <section class="front-of-card">
        <img class="front-of-card"
      src={item.squadmembers.data.horoscopeimage.url}
      alt={item.squadmembers.data.horoscope}
    />
      </section>
      <section class="back-of-card">
        <h2>{item.squadmembers.data.name[0].text}</h2>
        <div class="top-card-img">
          <img
          src={item.squadmembers.data.memberimage.url}
          alt={item.squadmembers.data.name[0].text}
        />
        </div>
          
       <ul>
        <li>{item.squadmembers.data.age}</li>
        <li>{item.squadmembers.data.horoscope}</li>
        <li>{item.squadmembers.data.favoritecodelanguage[0].text}</li>
       </ul>
       <div class="button_container">
        <a href={item.squadmembers.data.profielcardlink} class="button"
          >Visitekaartje</a
        >
      </div>
     
  </div>
</section>
  {/each}
</section>

<style>
  :root {
    --gold: #e1c253;
    --darkblue: #061528;
    --offwhite: #fffbea;
    --lightblue: #062968;
    background: url(sterren-achtergrond.jpg);
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

  .button_container {
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
    width: 215px;
    height: 55px;
    margin: 0 auto;
  }

  a.button {
    color: var(--darkblue);
    border: 1px solid var(--darkblue);
    width: 196px;
    height: 40px;
    padding: 10px 38px;
    margin: 8px 1px -42px 8.5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 19px;
    font-family: "Elsie";
    display: inline-block;
    text-decoration: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .member-cards{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 40vw;
    margin: auto;
  }


  .back-of-card{
    height: 423px;
    width: 234px;
  }
 .top-card-img{
  
  overflow: hidden;
  width:100%;
  height: 40%;
  }
  .top-card-img img{
     
    width: 100%;
    position: relative;
    top: -2em;
  }

  .front-of-card{
   position: absolute;
   z-index: 1;
   
  }


</style>
