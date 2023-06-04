import { StayPreview } from "./StayPreview";

export function StayList({ stays, onRemoveStay}) {
    return <ul className="stay-list">
        {stays.map(stay =>

            <li className="stay-preview-container" key={stay._id}>
                <StayPreview stay={stay} onRemoveStay={onRemoveStay} />
            </li>)}
        {stays.map(stay =>

            <li className="stay-preview-container" key={stay._id}>
                <StayPreview stay={stay} onRemoveStay={onRemoveStay} />
            </li>)}
    </ul>
}

