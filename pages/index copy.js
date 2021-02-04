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

  const [pages, setImageLinks] = useState([])
  //useEffect hook retrieves posts on initial load.
  useEffect(() => {
    async function getImageLinks() {
      const allPages = await fetchPageEntries()
      setImageLinks([...allPages])
    }
    getImageLinks()
  }, [])

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css" 
        />
      </Head>
      <Navigation></Navigation>
      
      {pages.length > 0
        ? pages.map(p => (
            <ImageLink
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
        : null}
    </>
  )
}

export default HomePage