import { useEffect, useState } from 'react'
import Head from 'next/head'
import BigImageTeaser from '../components/bigImageTeaser'
import Navigation from '../components/navigation'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {

  async function fetchSettingsEntries() {
    const entries = await client.getEntries({
      'content_type': 'settings'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }
  
  async function fetchBigImageTeasers() {
    const bigImageTeasers = await client.getEntries({
      'content_type': 'bigImageTeaser'
    })
    if (bigImageTeasers.items) return bigImageTeasers.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [settings, setImageSettingsLinks] = useState([])
  const [bigImageTeasers, setBigImageTeasers] = useState([])

  //useEffect hook retrieves posts on initial load.
  useEffect(() => {

      async function getSettings() {
        const allSettings = await fetchSettingsEntries()
        console.log(allSettings);
        setImageSettingsLinks([...allSettings])
      }
      
      async function getBigImageTeasers() {
        const allBigImageTeasers = await fetchBigImageTeasers()
        console.log('allbigimageteasers', allBigImageTeasers);
        setBigImageTeasers([...allBigImageTeasers])
      }

      getBigImageTeasers()
      getSettings()

  }, [])


  return (
    <>
      <Head>
        <title>Ataspor</title>
      </Head>
     {
        settings.length > 0
        ? settings.map(p => (
           <Navigation activePage="Home" logo={p.fields.logo.fields.file.url}></Navigation>
          ))
        : null
      }
      {
        bigImageTeasers.length > 0
        ? bigImageTeasers.map(bIT => (
         <BigImageTeaser displayTitle={bIT.fields.displayTitle} image={bIT.fields.image.fields.file.url} url={bIT.fields.url} description={bIT.fields.description}></BigImageTeaser>
        ))
        : null
      }

      
    </>
  )
}

export default HomePage