class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(" ")
    const title = []
    function capitalize(stringArray){
      stringArray.forEach(titleWord => {
        if (exceptions.find(word => word === titleWord)){
          title.push(titleWord)
        } else {
          title.push(titleWord[0].toUpperCase()+titleWord.slice(1))
        }
      })
    }
    capitalize(words)
    title[0] = title[0][0].toUpperCase()+title[0].slice(1)
    return title.join(" ")
    }
  }

