import Vue from 'vue'
import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'
import parse from 'date-fns/parse'

Vue.prototype.$unixtimeFormat = unixtime => {
  const date = new Date(Number(unixtime) * 1000)
  return format(parse(date), 'YYYY/MM/DD HH:mm:ss', { locale: ja })
}
