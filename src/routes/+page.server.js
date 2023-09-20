import { createClient } from '$lib/prismicio'

export const prerender = true;

export async function load({ fetch, request}) {
  const client = createClient({ fetch, request })

  const document = await client.getByUID('home', 'home', {'fetchLinks': ['squadmembers.name', 'squadmembers.horoscope', 'squadmembers.age', 'squadmembers.memberimage','squadmembers.horoscopeimage', 'squadmembers.favoritecodelanguage', 'squadmembers.squad', 'squadmembers.profielcardlink', 'horoscoperad.uid','horoscoperad.title', 'horoscoperad.zodiacicon', 'horoscoperad.explanationtext', 'horoscoperad.horoscopecard']})
  
  return document.data
  }


  
      // return {'list':document}
      //   console.log(params)
      // const document = await client.getAllByType('squadmembers')
      // const horoscope = await client.getAllByType('Horoscoperads')
      