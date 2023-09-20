<!-- <h1>Starlight Diviners</h1> -->
<script>
  import * as prismic from "@prismicio/client";
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";

  export let data;
  console.log(data);
</script>

<section>
  <h1>{data.titel[0].text}</h1>
  <p>{data.intro[0].text}</p>
</section>
<SliceZone slices={data.slices} {components} />

<style>
  :root {
    --gold: #e1c253;
    --darkblue: #061528;
    --offwhite: #fffbea;
    --lightblue: #062968;
  }
  section {
    padding-left: 1em;
    width: 25em;
  }
  h1,
  h2 {
    font-family: "Elsie";
    color: var(--offwhite);
    font-size: 40px;
  }
  p {
    font-family: "Montserrat";
    color: var(--offwhite);
    margin-top: -1em;
  }
</style>
