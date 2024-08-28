export const share = (network: string, title: string) => {
  console.log(window.location.href)
  if (process.client) {
    switch (network) {
      case 'telegram':
        window.open(
          `https://t.me/share/url?url=${window.location.href}&text=${title}`,
          '_blank'
        )
        break
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${title}\n+${window.location.href}`,
          '_blank'
        )
        break
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&display=iframe&quote=${title}`,
          '_blank'
        )
        break
    }
  }
}

export const toEmbed = (url: string) => {
  let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  let match = url.match(regExp)
  if (match && match[2].length === 11) {
    return match[2]
  } else {
    return 'error'
  }
}

export const formatPhoneNumber = (number: string) => {
  const format = number
    ?.replace(/\D/g, '')
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
  return `+${format && format[1] ? format[1] : ''}
          ${format && format[2] ? format[2] : ''}
          ${format && format[3] ? format[3] : ''} ${
    format && format[4] ? format[4] : ''
  }${format && format[5] ? format[5] : ''}`
}

export function generateUUID() {
  // Public Domain/MIT
  let d = new Date().getTime() //Timestamp
  let d2 =
    (typeof performance !== 'undefined' &&
      performance.now &&
      performance.now() * 1000) ||
    0 //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0
      d = Math.floor(d / 16)
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0
      d2 = Math.floor(d2 / 16)
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}
const timeouts = {}

const cTimeout = (key = 'key') => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key])
    timeouts[key] = undefined
  }
}

export const debounce = (key = 'key', fn = () => {}, timeout = 500) => {
  const sTimeout = (key, fn, timeout) => {
    cTimeout(key)

    timeouts[key] = setTimeout(() => {
      try {
        fn()
      } catch (e) {
        console.log(e)
      }

      timeouts[key] = undefined
    }, timeout)
  }

  return sTimeout(key, fn, timeout)
}

export function calculateNumberWithShortcuts(number) {
  const symbols = {
    B: 1000000000,
    M: 1000000,
    K: 1000,
  }

  for (const symbol in symbols) {
    if (number >= symbols[symbol]) {
      const formattedNumber = number / symbols[symbol]
      return formattedNumber.toFixed(1) + symbol
    }
  }

  return number.toString()
}
