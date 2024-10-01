import { createHeader } from './src/components/header.js'
import { handleSearch } from './src/components/search.js'
import { createGallery } from './src/components/gallery.js'

createHeader(handleSearch)

// galería vacía para las imágenes
createGallery()
