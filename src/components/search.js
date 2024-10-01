import { fetchImages } from '../js/api.js'
import { displayImages } from './gallery.js'

export function debounce(func, delay) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}
export async function handleSearch(query) {
  const images = await fetchImages(query)
  displayImages(images)
}
