import { Link } from "react-router-dom";


export function StayPreview({ stay, onRemoveStay }) {
    return (
        <article className="stay-preview">
            {/* <Link className="details-a-link" to={`/stay/${stay._id}`}> */}
            {/* <img src={stay.imgUrls[0]} alt="" /> */}
            <h4>{stay.name}</h4>
            {/* {console.log('from stay preview' ,stay)} */}
            {console.log('from preview', stay)}
               { console.log(stay.host)}
            {/* <span>Stay with: {stay.host}</span> */}

            <p className="price-stay-preview"> {stay.price}$  <span>  night  </span>   </p>
            {/* <section>
                <button> <Link to={`/stay/edit/${stay._id}`}>Edit</Link> </button>
                <button onClick={() => { onRemoveStay(stay._id) }}>Remove Stay</button>
            </section> */}
            {/* </Link> */}
        </article>
    )
}

