import { StayPreviewCarousel } from './StayPreviewCarousel'

import { StayPreview } from "./StayPreview";

export function StayList({ stays, onRemoveStay}) {
    return <ul className="stay-list">
              {/* <StayPreviewCarousel/> */}

        {stays.map(stay =>

            <li className="stay-preview-container" key={stay._id}>
                {/* {console.log('from list' , stay)} */}
                <StayPreview stay={stay} onRemoveStay={onRemoveStay} />
            </li>)}
        {stays.map(stay =>

            <li className="stay-preview-container" key={stay._id}>
                {/* {console.log('from list' , stay)} */}
                <StayPreview stay={stay} onRemoveStay={onRemoveStay} />
            </li>)}
    </ul>

    
}

