import { defData } from './defaultData'

class FrequenService {
  constructor () {
    this.storage = window.localStorage
    this.item = 'frequen'
    this.getData = this.getData.bind(this)
    this.setStorage = this.setStorage.bind(this)
  }

  getData () {
    let data

    // Check if there's storage access
    if (typeof (Storage) !== 'undefined') {
      // If we can access storage, check if there is data in storage.
      if (this.storage.getItem(this.item)) {
        // If there's data in storage, pull it
        data = JSON.parse(this.storage.getItem(this.item))
      } else {
        // If there's not data in storage, pull the default data
        data = defData
        // Store the default data in storage
        this.setStorage(data)
      }
    } else {
      // If we can't access storage, use the default data
      data = defData
    }

    return data
  }

  // Store the current data in storage
  setStorage (data) {
    if (typeof (Storage) !== 'undefined') {
      this.storage.setItem(this.item, JSON.stringify(data))
    }
  }

  // Analyze the data
  analyze (data) {
    // Break the input into arrays and remove duplicates
    const splitBySlash = (arr) => Array.from(new Set(arr.split('/')))
    // Break each element in an array into a sub-array
    const makeSubArrays = (arr) => {
      let newArr = []
      arr.forEach((el) => {
        newArr.push(el.split(','))
      })
      return newArr
    }
    const consonants = makeSubArrays(splitBySlash(data.consonants))
    const vowels = makeSubArrays(splitBySlash(data.vowels))

    // Flatten arrays and make sure there are no duplicates
    const flattenArrays = (arr) => Array.from(new Set([].concat(...arr)))
    // And sort the flattened arrays by length so the longest segments are first
    const sortArrays = (arr) => {
      return arr.sort((a, b) => b.length - a.length)
    }
    const consonantsFlat = sortArrays(flattenArrays(consonants))
    const vowelsFlat = sortArrays(flattenArrays(vowels))

    let results = {}

    // Add each element in the flattened arrays to the results object and indicate which type they are
    const initResults = (arr, type) => {
      arr.forEach((el) => {
        results[el] = {}
        results[el].count = 0
        results[el].type = type
      })
    }
    initResults(consonantsFlat, 'consonant')
    initResults(vowelsFlat, 'vowel') // Currently, if an element appears in both consonants and vowels, its vowel instance will take precedence

    // Label which segments are allophones
    const labelAllophones = (arr) => {
      arr.forEach((elArr, i) => {
        if (elArr.length > 1) {
          elArr.forEach((el, j) => {
            if (j > 0) {
              results[arr[i][j]].allophoneOf = arr[i][0]
            }
          })
        }
      })
    }
    labelAllophones(consonants)
    labelAllophones(vowels)

    // Build a single array and sort by segment length
    const fullArr = sortArrays(consonantsFlat.concat(vowelsFlat))

    let corpus = data.corpus

    // For every instance of the segment in the text, increment the count and slice the instance out of the text
    const sliceAndCount = (seg) => {
      if (corpus.indexOf(seg) > -1) {
        results[seg].count += 1
        corpus = corpus.slice(0, corpus.indexOf(seg)) + corpus.slice(corpus.indexOf(seg) + seg.length)
      }
    }

    // Loop through all segments counting and slicing all instances of each.
    fullArr.forEach((el) => {
      while (corpus.indexOf(el) > -1) {
        sliceAndCount(el)
      }
    })

    return results
  }
}

const frequenService = new FrequenService()

export default frequenService
