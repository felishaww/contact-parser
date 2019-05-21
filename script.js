function getContacts(str) {
  var split = str.split(',')
  var splitted = split.map(function (x){
    return x.split(',')
  })

}

var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
console.log(getContacts(text))
// [
//   ['dimitri', 'dimitri@mail.com', 'male'],
//   ['icha', 'icha@mail.com', 'female'],
//   ['windi', 'windi@mail.com', 'female']
// ]