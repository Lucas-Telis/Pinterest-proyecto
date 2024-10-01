// js/gallery.js

export function displayImages(images) {
  const gallery = document.querySelector('.image-gallery')
  gallery.innerHTML = '' // Limpiar la galería existente

  if (images.length === 0) {
    gallery.textContent = 'No se encontraron imágenes.'
    return
  }

  images.forEach((image) => {
    const img = document.createElement('img')
    img.src = image.urls.small
    img.alt = image.alt_description || 'Imagen de Unsplash'
    img.classList.add('gallery-image')
    gallery.appendChild(img)
  })
}

export function createGallery() {
  const gallery = document.createElement('div')
  gallery.classList.add('image-gallery')
  document.body.appendChild(gallery)
}
