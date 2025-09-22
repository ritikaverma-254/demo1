const email='krsonu1791@gmail.com'
let isValid=(/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/).test(email)
console.log(isValid,"==========");