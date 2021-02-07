import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

const NotFoundPage = () => {
  useEffect(() => {
    const idx = window.location.href.split('/', 3).join('/').length
    const slug = window.location.href.substring(idx)
    navigate(`https://dailypenn.github.io/old.projects.34st.com${slug}`)
  }, [])

  return null
}

export default NotFoundPage
