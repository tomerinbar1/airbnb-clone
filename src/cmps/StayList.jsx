// import PropTypes from 'prop-types'

import { StayPreview } from "./StayPreview";

export function StayList({ stays, onRemoveStay, onStayDetails}) {
    return <ul className="stay-list">
        {stays.map(stay =>

            <li className="stay-preview-container" key={stay._id}>
                {/* {console.log('from list' , stay)} */}
                <StayPreview stay={stay} onRemoveStay={onRemoveStay} />
            </li>)}
    </ul>
}

