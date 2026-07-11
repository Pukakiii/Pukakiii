export type Education = {
  id: string
  school: string
  /**
   * School logo to display; falls back to a graduation-cap icon when absent.
   * Provide an absolute URL or a path under /public.
   */
  logo?: string
  degree?: string
 fieldOfStudy?: string
 period: {
 start: string
 end?: string
 }
 description?: string
 skills?: string[]
 isExpanded?: boolean
}
