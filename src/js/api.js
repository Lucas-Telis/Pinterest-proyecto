const accessKey = 'ye9ZeqCxQPs4loD2kVyHSCwSKSs5En7048_sEVqF_pU'

export async function fetchImages(query) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
      return data.results
    } else {
      console.error('Error al buscar imágenes:', data)
      return []
    }
  } catch (error) {
    console.error('Error en la petición:', error)
    return []
  }
}
