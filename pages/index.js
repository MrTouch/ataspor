import { useEffect, useState } from 'react'
import Head from 'next/head'
import ImageLink from '../components/imageLink'
import Navigation from '../components/navigation'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function HomePage() {
  async function fetchPageEntries() {
    const entries = await client.getEntries({
      'content_type': 'page'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  async function fetchSettingsEntries() {
    const entries = await client.getEntries({
    'content_type': 'settings'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

const [settings, setImageSettingsLinks] = useState([])
//useEffect hook retrieves posts on initial load.
useEffect(() => {
    async function getSettings() {
    const allSettings = await fetchSettingsEntries()
    console.log(allSettings);
    setImageSettingsLinks([...allSettings])
    }
    getSettings()
}, [])

  const [pages, setImageLinks] = useState([])
  //useEffect hook retrieves posts on initial load.
  useEffect(() => {
    async function getImageLinks() {
      const allPages = await fetchPageEntries()
      console.log("allpages")
      console.log(allPages)
      setImageLinks([...allPages])
    }
    getImageLinks()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
      </Head>
      {console.log("settings 2",settings)}{
        settings.length > 0
        ? settings.map(p => (
           <Navigation activePage="Home" logo={p.fields.logo.fields.file.url} ></Navigation>
          ))
        : null}
      
    </>
  )
}

export default HomePage