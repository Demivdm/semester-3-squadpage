import { createClient } from '$lib/prismicio'

// export const prerender = true;

export async function load({ fetch, request, params}) {
  let { uid } = params
  const client = createClient({ fetch, request });

  const document = await client.getByUID('horoscoperad', uid);
  const members = await client.getAllByType('squadmembers')
  
  return { page: document.data , members: members }
  };
 