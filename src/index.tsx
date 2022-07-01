import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles.css'

const container = document.getElementById('app')
const reactRoot = createRoot(container!)
reactRoot.render(<App />)
