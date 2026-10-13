import { useEffect } from 'react';
import { dealership } from '../data/dealership';

function setMeta(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/** Page title + description. The prospect demo is always kept out of search indexes. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} · ${dealership.name}`;
    setMeta('description', description);
    setMeta('robots', 'noindex, nofollow');
  }, [title, description]);
}