import dayjs from 'dayjs'
import az from 'dayjs/locale/az'
import en from 'dayjs/locale/en'
import hu from 'dayjs/locale/hu'
import kk from 'dayjs/locale/kk'
import ky from 'dayjs/locale/ky'
import ru from 'dayjs/locale/ru'
import tk from 'dayjs/locale/tk'
import tr from 'dayjs/locale/tr'
import uz from 'dayjs/locale/uz-latn'
import relativeTime from 'dayjs/plugin/relativeTime.js'

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(relativeTime)
  dayjs.locale(az)
  dayjs.locale(en)
  dayjs.locale(hu)
  dayjs.locale(kk)
  dayjs.locale(ky)
  dayjs.locale(ru)
  dayjs.locale(tk)
  dayjs.locale(uz)
  dayjs.locale(tr)
  nuxtApp.provide('dayjs', dayjs)
})
