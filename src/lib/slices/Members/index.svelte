<script>
  /** @type {import("@prismicio/client").Content.MembersSlice} */
  export let slice;
  console.log(slice);
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  {#each slice.items as item}
    <article class="member-card">
     <div class="inner-card">
      <section class="back-of-card">
        <h2>{item.squadmembers.data.name[0].text}</h2>
        <div class="top-card-img">
          <img
          src={item.squadmembers.data.memberimage.url}
          alt={item.squadmembers.data.name[0].text}
        />
        </div>
          
       
        <p>{item.squadmembers.data.age}</p>
        <p>{item.squadmembers.data.horoscope}</p>
        <p>{item.squadmembers.data.favoritecodelanguage[0].text}</p>
        <a href={item.squadmembers.data.profielcardlink}>Visitekaartje</a>
      </div>
      </section>
      
     <img class="front-of-card"
      src={item.squadmembers.data.horoscopeimage.url}
      alt={item.squadmembers.data.horoscope}
    />
    </article>
  {/each}
</section>

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

  a {
    font-family: "Elsie";
    padding: 0.7em;
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

  .member-card{
    display: flex;
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
  }


</style>
