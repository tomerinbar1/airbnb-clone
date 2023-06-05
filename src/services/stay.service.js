
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'Stay'

export const StayService = {
    query,
    getById,
    save,
    remove,
    getEmptyStay,
    addStayMsg,
    getDefaultFilter
}
window.cs = StayService

function getDefaultFilter() {
    return { title: '' }
}
async function query(filterBy = { txt: '', price: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(StayId) {
    return httpService.get(`Stay/${StayId}`)
}

async function remove(StayId) {
    return httpService.delete(`Stay/${StayId}`)
}
async function save(Stay) {
    var savedStay
    if (Stay._id) {
        savedStay = await httpService.put(`Stay/${Stay._id}`, Stay)

    } else {
        savedStay = await httpService.post('Stay', Stay)
    }
    return savedStay
}

async function addStayMsg(StayId, txt) {
    const savedMsg = await httpService.post(`Stay/${StayId}/msg`, { txt })
    return savedMsg
}


function getEmptyStay() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}





