export const getCookie = (key) => {
  var name = key + '='
  var ca = document.cookie.split(';')
  for(let i=0; i < ca.length; i++){
    let c = ca[i].trim()
    if(c.indexOf(name)===0) return c.substring(name.length, c.length)
  }
  return ''
}