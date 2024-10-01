// js/header.js

import { debounce } from './search.js'

export function createHeader(onSearch) {
  const header = document.createElement('header')

  // Crear el logo
  const logoDiv = document.createElement('div')
  logoDiv.classList.add('logo')
  const logoImg = document.createElement('img')
  logoImg.src =
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'
  logoImg.alt = 'Pinterest logo'
  logoDiv.appendChild(logoImg)

  // Crear los enlaces de navegación
  const navLinks = document.createElement('nav')
  navLinks.classList.add('nav-links')

  const links = [
    { href: 'http://localhost:5173/', text: 'Inicio', isActive: true },
    { href: '#', text: 'Explorar' },
    { href: '#', text: 'Crear' }
  ]

  links.forEach((link) => {
    const a = document.createElement('a')
    a.href = link.href
    a.textContent = link.text
    if (link.isActive) {
      a.classList.add('active')
    }
    navLinks.appendChild(a)
  })

  // Crear la barra de búsqueda
  const searchBarDiv = document.createElement('div')
  searchBarDiv.classList.add('search-bar')

  const searchInput = document.createElement('input')
  searchInput.type = 'text'
  searchInput.placeholder = 'Buscar'

  const searchIcon = document.createElement('span')
  searchIcon.classList.add('search-icon')
  searchIcon.textContent = '🔍' // Icono de búsqueda

  searchBarDiv.appendChild(searchInput)
  searchBarDiv.appendChild(searchIcon)

  // Añadir evento de búsqueda con debounce (300ms)
  const debouncedSearch = debounce((event) => {
    const query = searchInput.value.trim()
    if (query) {
      onSearch(query) // Llamar a la función de búsqueda
    }
  }, 300)

  searchInput.addEventListener('input', debouncedSearch)

  // Crear los íconos de la derecha (notificaciones, chat)
  const iconsDiv = document.createElement('div')
  iconsDiv.classList.add('icons')

  const bellDiv = document.createElement('div')
  bellDiv.classList.add('icon-bell')
  const bellImg = document.createElement('img')
  bellImg.src =
    'https://static.vecteezy.com/system/resources/previews/009/394/758/non_2x/bell-icon-transparent-notification-free-png.png'
  bellImg.alt = 'Bell Icon'

  const notificationCount = document.createElement('span')
  notificationCount.classList.add('notification-count')
  notificationCount.textContent = '10' // Número de notificaciones

  bellDiv.appendChild(bellImg)
  bellDiv.appendChild(notificationCount)

  const chatImg = document.createElement('img')
  chatImg.src =
    'https://static-00.iconduck.com/assets.00/message-icon-2043x2048-z7d1f8at.png'
  chatImg.alt = 'Chat Icon'

  iconsDiv.appendChild(bellDiv)
  iconsDiv.appendChild(chatImg)

  // Agregar todos los elementos al header
  header.appendChild(logoDiv)
  header.appendChild(navLinks)
  header.appendChild(searchBarDiv)
  header.appendChild(iconsDiv)

  // Añadir el header al cuerpo del documento
  document.body.prepend(header)
}
