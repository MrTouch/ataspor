import { useEffect, useState } from 'react'
import Head from 'next/head'
//import Page from '../components/page'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

function Gallery() {
  async function fetchEntries() {
    const entries = await client.getEntries()
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  const [images, setImages] = useState([])
  //useEffect hook retrieves posts on initial load.
  useEffect(() => {
    async function getImages() {
      const allImages = await fetchEntries()
      setImages([...allImages])
    }
    getImages()
  }, [])

  return (
    <>
      <Head>
        <title>Gallery</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css" 
        />
      </Head>
      {images.length > 0
        ? images.map(p => (
            <Page
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