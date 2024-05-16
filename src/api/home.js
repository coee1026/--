import requert from '@/utils/requert'

export const getIndexData = () => {
  return requert({
    url: '/page/detail'
  })
}
