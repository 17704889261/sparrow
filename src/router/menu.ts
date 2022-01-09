import type { RouteConfig } from 'vue-router'
import { routes } from '@/router/index'

export interface Menu {
  name: string | undefined
  path: string
  meta: any
  children: RouteConfig[]
}

export function getMenus() {
  // 深拷贝router内容，避免缓存问题
  const obj = JSON.stringify(routes)
  const menus = JSON.parse(obj)
  const res: any = []
  menus.forEach((item: any) => {
    res.push(eachMenu(item))
  })
  return res
}

function eachMenu(item: any) {
  const parent: any = item

  if (!item.children) {
    return parent
  }

  const menuRes: any[] = []
  item.children.forEach((ele: any) => {
    const ktem = eachMenu(ele)
    const obj = {
      ...ktem,
      path: `${parent.path}/${ktem.path}`
    }
    menuRes.push(obj)
  })
  parent.children = menuRes
  return parent
}
