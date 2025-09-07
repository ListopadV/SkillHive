'use client'

import { useEffect, useState } from 'react'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const breakpoints = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
}

export const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('xs')

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth
      
      if (width >= breakpoints.xl) {
        setCurrentBreakpoint('xl')
      } else if (width >= breakpoints.lg) {
        setCurrentBreakpoint('lg')
      } else if (width >= breakpoints.md) {
        setCurrentBreakpoint('md')
      } else if (width >= breakpoints.sm) {
        setCurrentBreakpoint('sm')
      } else {
        setCurrentBreakpoint('xs')
      }
    }

    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)

    return () => window.removeEventListener('resize', checkBreakpoint)
  }, [])

  return {
    currentBreakpoint,
    isXs: currentBreakpoint === 'xs',
    isSm: currentBreakpoint === 'sm',
    isMd: currentBreakpoint === 'md',
    isLg: currentBreakpoint === 'lg',
    isXl: currentBreakpoint === 'xl',
    isMobile: currentBreakpoint === 'xs' || currentBreakpoint === 'sm',
    isTablet: currentBreakpoint === 'md',
    isDesktop: currentBreakpoint === 'lg' || currentBreakpoint === 'xl',
    isSmUp: ['sm', 'md', 'lg', 'xl'].includes(currentBreakpoint),
    isMdUp: ['md', 'lg', 'xl'].includes(currentBreakpoint),
    isLgUp: ['lg', 'xl'].includes(currentBreakpoint),
    isSmDown: ['xs', 'sm'].includes(currentBreakpoint),
    isMdDown: ['xs', 'sm', 'md'].includes(currentBreakpoint),
    isLgDown: ['xs', 'sm', 'md', 'lg'].includes(currentBreakpoint),
  }
}
