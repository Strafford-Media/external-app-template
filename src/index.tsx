import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'

let root
export function init({ container, props = {} } = { container: null }) {
  if (container) {
    root = createRoot(container)

    root.render(<App {...props} />)
  }
}

export function clean() {
  if (root) {
    root.unmount()
  }
}

if (process.env.NODE_ENV === 'development') {
  const root = createRoot(document.getElementById('app')!)

  root.render(<App />)
}
