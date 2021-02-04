import { useEffect, useState } from 'react'
import Head from 'next/head'
import Players from '../components/players'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function Mannschaften() {
  async function fetchPlayerEntries() {
    const entries = await client.getEntries({
      'content_type': 'players'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [players, setImageLinks] = useState([])
  //useEffect hook retrieves posts on initial load.
  useEffect(() => {
    async function getPlayers() {
      const allPlayers = await fetchPlayerEntries()
      console.log(allPlayers);
      var teams = {MainTeam: [], SeniorTeam: []};
      allPlayers.forEach( player => {
        console.log(player)
        console.log(teams.MainTeam)
        if(player.fields.mannschaft=="1. Mannschaft"){
            teams.MainTeam.push(player);
        }
        if(player.fields.mannschaft=="Senioren 30+"){
            teams.SeniorTeam.push(player);
        }
    })
    console.log(teams)
      setImageLinks([...allPlayers])
    }
    getPlayers()
  }, [])

  return (
    <>
      <Head>
        <title>Spieler</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css" 
        />
      </Head>
      <h1>1. Mannschaft</h1>
      {players.length > 0
        ? players.map(p => (
            <Players
              key={p.fields.id}
              name={p.fields.name}
              image={p.fields.image}
              nummer={p.fields.nummer}
              mannschaft={p.fields.mannschaft}
              active={p.fields.active}
            />
          ))
        : null}
        <h1>Senioren</h1>
    </>
  )
}

export default Mannschaften