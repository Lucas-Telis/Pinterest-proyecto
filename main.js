import { createHeader } from './src/components/header.js'
import { handleSearch } from './src/components/search.js'
import { createGallery } from './src/components/gallery.js'

createHeader(handleSearch)

// Función para cargar imágenes aleatorias al inicio
async function loadRandomImages() {
  const gallery = document.getElementById('gallery')
  if (!gallery) return

  const apiKey = 'ye9ZeqCxQPs4loD2kVyHSCwSKSs5En7048_sEVqF_pU' // Reemplaza con tu clave de Unsplash
  const count = 10 // Número de imágenes

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=${count}&client_id=${apiKey}`
    )
    const images = await response.json()

    images.forEach((imgData) => {
      const img = document.createElement('img')
      img.src = imgData.urls.regular
      img.classList.add('gallery-image')
      gallery.appendChild(img)
    })
  } catch (error) {
    console.error('Error al cargar imágenes de Unsplash:', error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createGallery()
  loadRandomImages()
})
