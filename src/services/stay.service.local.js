
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'stay'


let gStays
_createStays()

export const stayServiceLocal = {
    query,
    getById,
    save,
    remove,
    getEmptystay
    // addstayMsg
}
window.cs = stayServiceLocal


async function query(filterBy = { txt: '', price: 0 }) {
    var stays = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        stays = stays.filter(stay => regex.test(stay.vendor) || regex.test(stay.description))
    }
    if (filterBy.price) {
        stays = stays.filter(stay => stay.price <= filterBy.price)
    }
    return stays
}

function getById(stayId) {
    return storageService.get(STORAGE_KEY, stayId)
}

async function remove(stayId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, stayId)
}

async function save(stay) {
    var savedstay
    if (stay._id) {
        savedstay = await storageService.put(STORAGE_KEY, stay)
    } else {
        // Later, owner is set by the backend
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

function getEmptystay() {
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
            _id: "u101",
            fullname: "Davit Pok",
            imgUrl: "",
        },
        loc: {
            country: '',
            countryCode: '',
            city: '',
            address: '',
            lat: '',
            lng: ''
        },
        reviews: [],
        likedByUsers: []
    }

    return stay
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))



function _createStays() {
    gStays = utilService.loadFromStorage(STORAGE_KEY)
    if (gStays && gStays.length > 0) return

    gStays = [
        {
            "_id": "s101",
            "name": "Ribeira Charming Duplex",
            "type": "House",
            "imgUrls": [
                "https://res.cloudinary.com/ddryx9aj0/image/upload/v1685628524/3_zipgos.jpg",
                "otherImg.jpg"
            ],
            "price": 80.00,
            "summary": "Fantastic duplex apartment...",
            "capacity": 8,
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen",
                "Smoking allowed",
                "Pets allowed",
                "Cooking basics"
              ],
              "labels": [
                "Top of the world",
                "Trending",
                "Play",
                "Tropical"
              ],
              "host":"Christi-Anna",
              "loc": {},
              "reviews":[],
              "likedByUsers": []
        },  {
            "_id": "s102",
            "name": "Ribeira",
            "type": "House",
            "imgUrls": [
                "https://res.cloudinary.com/ddryx9aj0/image/upload/v1685628692/1_kb8ojv.jpg",
                "otherImg.jpg"
            ],
            "price": 90.00,
            "summary": "Fantastic duplex apartment...",
            "capacity": 7,
            "amenities": [
                "Cooking basics"
              ],
              "labels": [
                "Tropical"
              ],
              "host":"Valentina",
              "loc": {},
              "reviews":[],
              "likedByUsers": []
        },  {
            "_id": "s103",
            "name": "Charming",
            "type": "House",
            "imgUrls": [
                "https://res.cloudinary.com/ddryx9aj0/image/upload/v1685628692/main_wsayog.jpg",
                "otherImg.jpg"
            ],
            "price": 100.00,
            "summary": "Fantastic duplex apartment...",
            "capacity": 2,
            "amenities": [
                "Kitchen",
                "Smoking allowed"
              ],
              "labels": [
                "Trending"
              ],
              "host":"Russell",
              "loc": {},
              "reviews":[],
              "likedByUsers": []
        },  {
            "_id": "s104",
            "name": "Duplex",
            "type": "House",
            "imgUrls": [
                "https://res.cloudinary.com/ddryx9aj0/image/upload/v1685628687/1_ll5ymx.jpg",
                "otherImg.jpg"
            ],
            "price": 70.00,
            "summary": "Fantastic duplex apartment...",
            "capacity": 2,
            "amenities": [
                "Smoking allowed",
                "Pets allowed",
                "Cooking basics"
              ],
              "labels": [
                "Play",
                "Tropical"
              ],
              "host":"Sara",
              "loc": {},
              "reviews":[],
              "likedByUsers": []
        },  {
            "_id": "s105",
            "name": "TARANTULA",
            "type": "House",
            "imgUrls": [
                "https://res.cloudinary.com/ddryx9aj0/image/upload/v1685628692/3_rlm0lq.jpg",
                "otherImg.jpg"
            ],
            "price": 200.00,
            "summary": "Fantastic duplex apartment...",
            "capacity": 10,
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen",
                "Smoking allowed",
                "Pets allowed",
                "Cooking basics"
              ],
              "labels": [
                "Top of the world",
                "Trending",
                "Play",
                "Tropical"
              ],
              "host":"Patricia",
              "loc": {},
              "reviews":[],
              "likedByUsers": []
        }
    ]
    _saveStays()
}

function _saveStays() {
    utilService.saveToStorage(STORAGE_KEY, gStays)
}