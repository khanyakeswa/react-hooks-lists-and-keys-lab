import React from 'react'

let todoCounter = 1

function NavBar() {
  const links = ['home', 'about', 'projects']
  // console.log(linkList)

  const linkList = links.map((linkItem) => <a key={todoCounter += 1} href={`#` + linkItem}>{linkItem}</a>)

  return <nav>{linkList}</nav>
}

export default NavBar
