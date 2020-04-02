import './index.css'
import Home from "@components/Home"

const htmlDocument = document.implementation.createHTMLDocument()
htmlDocument.body.innerHTML = Home({ title: 'Pepito!' })
const homeEl = htmlDocument.body.children[0]
const rootEl = document.querySelector('#root')
rootEl.append(homeEl)
rootEl.append(homeEl.cloneNode(true))
rootEl.append(homeEl.cloneNode(true))
rootEl.append(homeEl.cloneNode(true))
rootEl.append(homeEl.cloneNode(true))
rootEl.append(homeEl.cloneNode(true))
