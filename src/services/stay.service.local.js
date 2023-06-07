import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
<<<<<<< HEAD
import { default as data } from '../data/data.json'
=======
// import {default as data} from '../data/data.json'
import {default as stay} from '../data/stay.json'
>>>>>>> 0f3392f1416ddbdc843061e26f91a6cf9f9d67c1

const STORAGE_KEY = 'stayDB'

let gStays
_createStays()

export const stayServiceLocal = {
  query,
  getById,
  save,
  remove,
  getEmptyStay,
  getDefaultFilter
  // addstayMsg
}
window.cs = stayServiceLocal

function getDefaultFilter() {
  return { txt: '', location: '', capacity: 0 }
}

async function query(filterBy = { txt: '', price: 0 }) {
  var stays = await storageService.query(STORAGE_KEY)
  let staysToDisplay = stays
  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    staysToDisplay = staysToDisplay.filter(
      stay => regex.test(stay.loc.country) || regex.test(stay.loc.city)
    )
  }
  if (filterBy.location) {
    const regex = new RegExp(filterBy.location, 'i')
    staysToDisplay = staysToDisplay.filter(
      stay => regex.test(stay.loc.country) || regex.test(stay.loc.city)
    )
  }

  if (filterBy.capacity) {
    staysToDisplay = staysToDisplay.filter(
      stay => stay.capacity >= filterBy.capacity
    )
  } 
console.log(staysToDisplay);
  return staysToDisplay
}

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
  await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
  let savedstay
  if (stay._id) {
    savedstay = await storageService.put(STORAGE_KEY, stay)
  } else {
    // stay.owner = userService.getLoggedinUser()
    savedstay = await storageService.post(STORAGE_KEY, stay)
  }
  return savedstay
}

// async function addstayMsg(stayId, txt) {
//     // Later, this is all done by the backend
//     const stay = await getById(stayId)
//     if (!stay.msgs) stay.msgs = []

//     const msg = {
//         id: utilService.makeId(),
//         by: userService.getLoggedinUser(),
//         txt
//     }
//     stay.msgs.push(msg)
//     await storageService.put(STORAGE_KEY, stay)

//     return msg
// }

function getEmptyStay() {
  const stay = {
    name: '',
    type: '',
    imgUrls: '',
    price: '',
    summary: '',
    capacity: '',
    amenities: [],
    labels: [],
    host: {
      _id: 'u101',
      fullname: 'Davit Pok',
      imgUrl: '',
    },
    loc: {
      country: '',
      countryCode: '',
      city: '',
      address: '',
      lat: '',
      lng: '',
    },
    reviews: [],
    likedByUsers: [],
  }

  return stay
}

function _createStays() {
  gStays = utilService.loadFromStorage(STORAGE_KEY)
  if (gStays && gStays.length > 0) return

  gStays = stay
  _saveStays()
}

function _saveStays() {
  utilService.saveToStorage(STORAGE_KEY, gStays)
}
