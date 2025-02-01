import { fetchImages } from '../js/api.js'
import { displayImages } from './gallery.js'
import didYouMean from 'didyoumean'

const popularWords = [
  'naturaleza',
  'arte',
  'tecnología',
  'viajes',
  'fotografía',
  'moda'
]

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

  const suggestionsContainer = document.getElementById('suggestions')
  suggestionsContainer.innerHTML = ''

  if (images.length === 0) {
    let suggestion = didYouMean(query, popularWords)

    const message = document.createElement('p')
    message.textContent = 'No se encontraron resultados. '
    suggestionsContainer.appendChild(message)

    if (suggestion) {
      const suggestionText = document.createElement('p')
      suggestionText.textContent = `¿Quisiste decir "${suggestion}"?`
      suggestionsContainer.appendChild(suggestionText)
      createSuggestionButton(suggestion, suggestionsContainer)
    } else {
      const suggestionText = document.createElement('p')
      suggestionText.textContent = 'Prueba con estas palabras:'
      suggestionsContainer.appendChild(suggestionText)

      popularWords.forEach((word) =>
        createSuggestionButton(word, suggestionsContainer)
      )
    }
  }
}

function createSuggestionButton(word, container) {
  const button = document.createElement('button')
  button.textContent = word
  button.classList.add('suggestion-button')
  button.onclick = () => handleSearch(word)
  container.appendChild(button)
}

export function handleSearchInput() {
  const cleaInput = document.getElementById('miInput')
  cleaInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      handleSearch(cleaInput.value)
      cleaInput.value = ''
    }
  })
}
