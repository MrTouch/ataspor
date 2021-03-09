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
    console.log(`Error getting Entries for page.`)
  }

  async function fetchHomePage() {
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

  async function fetchBigImageTeasersEntries() {
    const entries = await client.getEntries({
      'content_type': 'bigImageTeasers'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for bigImageTeasers.`)
  }
/*
  async function fetchPageEntries() {
    const entries = await client.getEntries({
      'content_type': 'page'
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }
*/
const [settings, setImageSettingsLinks] = useState([])
const [bigImageTeaser, setBigImageTeasersLinks] = useState([])
const [page, setPageLinks] = useState([])
const [home, setHomeLink] = useState([])
//useEffect hook retrieves posts on initial load.
useEffect(() => {

    async function getSettings() {
      const allSettings = await fetchSettingsEntries()
      console.log(allSettings);
      setImageSettingsLinks([...allSettings])
    }

    async function getBigImageTeasers() {
      const allBigImageTeasers = await fetchBigImageTeasersEntries()
      console.log(allBigImageTeasers);
      setBigImageTeasersLinks([...allBigImageTeasers])
    }

    async function getPages() {
      const allPages = await fetchPageEntries()
      console.log("allpages",allPages);
      setPageLinks([...allPages])
    }

    
    async function getHome() {
      const homePage = await fetchHomePage()
      console.log(homePage, 'test');
      setHomeLink([...homePage])
    }

    getSettings()
    //getBigImageTeasers()
    //getPages()
    getHome()

}, [])



/*
  const [pages, setImageLinks] = useState([])
  //useEffect hook retrieves posts on initial load.
  useEffect(() => {
    async function getImageLinks() {
      const allPages = await fetchPageEntries()
      setImageLinks([...allPages])
    }
    getImageLinks()
  }, [])
*/
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
        home.length > 0
        ? home.map(p=>(
          <div>{p.fields.title}asdf</div>
        ))
        :null
        }
      
    </>
  )
}

export default HomePage