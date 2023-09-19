<script>
  /** @type {import("@prismicio/client").Content.HoroscopeRadSlice} */
  export let slice;

  console.log(slice)
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
 {#each slice.items as item}

 <div><a href="#">{item.rads.data.title[0].text}</a> </div>

 {/each}
</section>
<style>
section{
     display: flex;
     justify-content: center;
    margin: auto;
    height: 30vh;
    position: relative;
    bottom: 2rem;
    -webkit-animation:spin 12s linear infinite;
    -moz-animation:spin 12s linear infinite;
    animation:spin 12s linear infinite;
}
div{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 0;
    height: 30%;
    border-style: solid;
    transform-origin: bottom center;
    transform: rotate(0deg);
    text-align: center;
    background-color: aqua;
    cursor: pointer;
    border: none;
    padding: 3em;
    color: white  ;
}
div:nth-child(1) {
transform: rotate(5deg);
z-index: 9999;
}
div:nth-child(2) {
transform: rotate(60deg);
}
div:nth-child(3) {
    transform: rotate(90deg);
}
div:nth-child(4) {
    transform: rotate(120deg); 
}
div:nth-child(5) {
    transform: rotate(150deg); 
}
div:nth-child(6) {
    transform: rotate(180deg); 
}
div:nth-child(7) {
    transform: rotate(210deg);
}
div:nth-child(8) {
    transform: rotate(240deg); 
}
div:nth-child(9) {
    transform: rotate(270deg); 
}
div:nth-child(10) {
    transform: rotate(300deg); 
}
div:nth-child(11) {
    transform: rotate(330deg);
}
div:nth-child(12) {
    transform: rotate(33deg); 
}
@-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
}
@-webkit-keyframes spin { 
    100% { -webkit-transform: rotate(360deg); } 
}
@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}
@media only screen and (min-width: 600px) {
section{
  height: 60vh;
}
}
</style>