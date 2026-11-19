import { computed } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

/**
 * Number of the current section ("01", "02"...), counting the slides with
 * `layout: section` up to the current one. Empty before the first section.
 * A slide can override it with `number:` in its frontmatter.
 */
export function useSectionNumber(frontmatter) {
  const { slides } = useNav()
  const { $page } = useSlideContext()

  return computed(() => {
    if (frontmatter?.number !== undefined) return String(frontmatter.number)
    const count = slides.value.filter(
      (route) => route.no <= $page.value && route.meta?.layout === 'section',
    ).length
    return count ? String(count).padStart(2, '0') : ''
  })
}
