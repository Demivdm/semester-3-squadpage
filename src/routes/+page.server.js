import { createClient } from '$lib/prismicio'

export async function load({ fetch, request}) {
  const client = createClient({ fetch, request })
//   console.log(params)
  const document = await client.getAllByType('squadmembers')
  // const horoscope = await client.getAllByType('Horoscoperads')
  

  return {'list':document}
}