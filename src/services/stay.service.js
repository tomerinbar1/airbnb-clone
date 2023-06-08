
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'

const BASE_URL = '/'
const STORAGE_KEY = 'Stay'

export const stayService = {
    getStays,
    getById,
    save,
    remove,
    getEmptyStay,
    addStayMsg,
    getDefaultFilter
}
window.cs = stayService

function getDefaultFilter() {
    return { txt: '', location:'', guests:1 }
}
async function getStays(filterBy = getDefaultFilter()) {
    return await httpService.get(BASE_URL, filterBy)
}

function getById(StayId) {
    return httpService.get(`/${StayId}`)
}

async function remove(StayId) {
    return httpService.delete(`/${StayId}`)
}
async function save(Stay) {
    var savedStay
    if (Stay._id) {
        savedStay = await httpService.put(`/${Stay._id}`, Stay)

    } else {
        savedStay = await httpService.post('Stay', Stay)
    }
    return savedStay
}

async function addStayMsg(StayId, txt) {
    const savedMsg = await httpService.post(`/${StayId}/msg`, { txt })
    return savedMsg
}


function getEmptyStay() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}





