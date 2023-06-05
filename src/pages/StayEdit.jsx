import { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { removeStay , saveStay} from '../store/stay.actions.js'
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import { Link } from 'react-router-dom'
import { uploadService } from '../services/upload.service.js'
import { stayServiceLocal } from '../services/stay.service.local.js'

export function StayEdit() {

    const [stayToEdit, setStayToEdit] = useState(stayServiceLocal.getEmptyStay())
    const [stayImage, setStayImage] = useState(null)


    const { stayId } = useParams()
    console.log(stayToEdit)
    const navigate = useNavigate()

    useEffect(() => {
        loadStay()
    }, [])


    async function onHandleImg(ev) {
        try {
            const imgUrl = await uploadService.uploadImg(ev)
            setStayToEdit((preStayToEdit) => ({ ...stayToEdit, imgUrls: [...stayToEdit.imgUrls, imgUrl] }))
        } catch (err) {
            console.log('Cannot upload image right now..', err)
        }
    }


    async function onAddStay() {
        const newStay = stayServiceLocal.getEmptyStay()
        newStay.name = prompt('Stay\'s name?')
        newStay.price = prompt('Stay\'s price?')
        setStayToEdit(newStay)

        try {
            const savedStay = await saveStay(newStay)
            showSuccessMsg(`Stay added (id: ${savedStay._id})`)
        } catch (err) {
            showErrorMsg('Cannot add stay')
        }
    }


    async function onRemoveStay() {
        try {
            await removeStay(stayId)
            showSuccessMsg('Stay removed')
            navigate('/')
        } catch (err) {
            showErrorMsg('Cannot remove stay')
        }
    }

    async function loadStay() {
        try {
            const stay = await stayServiceLocal.getById(stayId)
            setStayToEdit(stay)
        }
        catch (err) {
            console.log('Had issued in stay edit:', err)
            navigate('/stay')
            showErrorMsg('Stay not found!')
        }
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setStayToEdit(prevStayToEdit => ({ ...prevStayToEdit, [field]: value }))
    }

    async function onSaveStay(ev) {
        ev.preventDefault()
        try {
            const savedStay = await stayServiceLocal.save(stayToEdit)
            // saveStay(stayToEdit)
            // console.log('stay saved', savedStay)
            navigate('/')
            showSuccessMsg(`Stay '${savedStay._id}' saved!`)
        }
        catch (err) {
            console.log('err', err)
            showErrorMsg('Cannot save stay')
        }
    }


    return (
        <section className="stay-edit-container">
            <h2>{stayToEdit._id ? 'Edit this stay' : 'Add a new stay'}</h2>

            <button onClick={onRemoveStay}>Remove Stay</button>
            {/* <button onClick={onAddStay}>Add Stay</button> */}


            <form className="stay-edit-inputs" onSubmit={onSaveStay}>
                <input type="file" accept="image/png/jpeg" onChange={onHandleImg} />

                {stayImage &&
                    <img
                        alt="not found"
                        height={"150px"}
                        src={URL.createObjectURL(stayImage)}
                    />
                }

                <label htmlFor="title">Name:</label>
                <input type="text" required
                    name="name"
                    id="name"
                    placeholder="Enter new stay name"
                    onChange={handleChange}
                    value={stayToEdit.name}
                />

                <label htmlFor="price">Price:</label>
                <input type="number" required
                    name="price"
                    id="price"
                    placeholder="Enter price"
                    onChange={handleChange}
                    value={stayToEdit.price}
                />

                <div className="button-group">
                    <button>{stayToEdit._id ? 'Save' : 'Add'}</button>
                    <Link to="/">Cancel</Link>
                </div>


            </form>
        </section>
    )
}