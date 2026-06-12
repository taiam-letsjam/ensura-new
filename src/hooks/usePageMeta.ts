import { useEffect } from 'react'

/**
 * Lightweight per-route SEO: sets document.title and <meta name="description">.
 * Re-runs whenever title/description change (i.e. on route changes, since each
 * page passes its own values). No external head-management dependency.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title

    let meta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description)
  }, [title, description])
}
