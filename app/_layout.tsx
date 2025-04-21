import React from 'react'
import { Slot } from 'one'
import './base.css'

/**
 * The root _layout.tsx filters <html /> and <body /> out on native
 */

export default function Layout() {
  return (
    <>
      {typeof document !== 'undefined' && (
        <>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          
          {/* Primary Meta Tags */}
          <title>Proyecto Salvaje | Regenerative Village School</title>
          <meta name="title" content="Proyecto Salvaje | Regenerative Village School" />
          <meta name="description" content="An educational sanctuary committed to regenerative practices, community living, and natural learning environments for families seeking sustainable alternatives." />
          <meta name="keywords" content="regenerative education, village school, sustainable community, natural learning, ecological education, holistic education" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://proyectosalvaje.com/" />
          <meta property="og:title" content="Proyecto Salvaje | Regenerative Village School" />
          <meta property="og:description" content="An educational sanctuary committed to regenerative practices, community living, and natural learning environments." />
          <meta property="og:image" content="https://proyectosalvaje.com/images/land-1.jpg" />
          <meta property="og:site_name" content="Proyecto Salvaje" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://proyectosalvaje.com/" />
          <meta property="twitter:title" content="Proyecto Salvaje | Regenerative Village School" />
          <meta property="twitter:description" content="An educational sanctuary committed to regenerative practices, community living, and natural learning environments." />
          <meta property="twitter:image" content="https://proyectosalvaje.com/images/land-1.jpg" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.svg" />
          <link rel="apple-touch-icon" href="/app-icon.png" />
        </>
      )}
      <Slot />
    </>
  )
}
