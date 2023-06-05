import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import {default as data} from '../data/data.json'

const STORAGE_KEY = 'stay'

let gStays
_createStays()

export const stayServiceLocal = {
  query,
  getById,
  save,
  remove,
<<<<<<< HEAD
  getEmptyStay,
=======
  getEmptystay,
  getDefaultFilter

>>>>>>> 29a7b8de0bdcf282331123b65f2edf547fdd29f4
  // addstayMsg
}
window.cs = stayServiceLocal

function getDefaultFilter() {
  return { txt: '' }
}

async function query(filterBy = { txt: '', price: 0 }) {
  console.log(filterBy)
  var stays = await storageService.query(STORAGE_KEY)
  let staysToDisplay = stays
  if (filterBy.txt) {
    const regex = new RegExp(filterBy.txt, 'i')
    staysToDisplay = staysToDisplay.filter(
      stay => regex.test(stay.loc.country)||regex.test(stay.loc.city)
    )
  }
  // if (filterBy.price) {
  //   stays = stays.filter(stay => stay.price <= filterBy.price)
  // }
  return staysToDisplay
}

function getById(stayId) {
  return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
  let savedstay
  // console.log(stay)
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

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))

function _createStays() {
  gStays = utilService.loadFromStorage(STORAGE_KEY)
  if (gStays && gStays.length > 0) return

  gStays = data
  _saveStays()
}

function _saveStays() {
  utilService.saveToStorage(STORAGE_KEY, gStays)
}
