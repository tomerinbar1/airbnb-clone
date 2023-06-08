import { DayPicker } from "react-day-picker";
import 'react-day-picker/dist/style.css';



export function DateSelect() {




        return (
            <div className="check-in-pick">
                <DayPicker
                    mode="range"
                    numberOfMonths={2}
                    showOutsideDays
                />
            </div>
        )
    }