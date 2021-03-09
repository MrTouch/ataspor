import { useEffect, useState } from 'react'
import Head from 'next/head'
import Players from '../components/players'
import Navigation from '../components/navigation'

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

  async function fetchSetting(){
    // Fetch main setting
    const setting = await client.getEntry("lcWwEXxr4F2hazOseLmgf")
    // If nothing was found, return an empty object for props, or else there would
    // be an error when Next tries to serialize an `undefined` value to JSON.
    if (!setting) {
      return {  }
    }
    return setting;
      // Return the post as props
     
  }
  

  const [players, setImageLinks] = useState([])
  const [setting, setSetting] = useState([])
  //useEffect hook retrieves posts on initial load.
  useEffect(() => {
    async function getPlayers() {
      const allPlayers = await fetchPlayerEntries()
      console.log(allPlayers);
      var teams = {MainTeam: [], SeniorTeam: []};
      allPlayers.forEach( player => {
        console.log(player);
        console.log(teams.MainTeam);
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

    async function getSetting(){
      const setting = await fetchSetting();
      
      setSetting([setting])
    }
    getSetting()
    getPlayers()
  }, [])

  return (
    <>
      <Head>
        <title>Spieler</title>
      </Head>
      {
        setting.length > 0
        ? setting.map(s => (
           <Navigation activePage="Mannschaft" logo={s.fields.logo.fields.file.url}></Navigation>
          ))
        : null
      }
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