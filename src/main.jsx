import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary, { reloadOnceForNewDeploy } from './components/ErrorBoundary.jsx'
import './index.css'

// Vite fires this when a lazy route's JS/CSS cannot be fetched — almost always
// a visitor with an old tab open after a new deploy. Reload once to recover.
//
// Deliberately NOT calling event.preventDefault(): that tells Vite to swallow
// the failure, so React.lazy receives an empty module and crashes with an
// unhelpful "reading 'default'" TypeError. Letting the real error propagate
// means that if the single reload does not fix it, the error boundary sees an
// accurate message and can say so.
window.addEventListener('vite:preloadError', () => {
  reloadOnceForNewDeploy()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
