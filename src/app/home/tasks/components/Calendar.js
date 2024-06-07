import { useState } from "react";
import { X, Tag, CircleSlash, CalendarIcon, AlertCircle, Info } from "lucide-react";
import { Circle } from "react-feather";

const Calendar = ({ visible, setCreateTaskVisibility }) => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    const [date, setDate] = useState(new Date());

    const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ]

    const dateMonth = months[date.getMonth()]
    const dateDay = date.getDate()
return (
    <div className="w-full flex flex-col justify-center items-center p-4 rounded-lg border border-dark-500">
        
        <div className="text-2xl pb-2">{dateMonth}</div>
        <div
        className="grid grid-cols-7 w-full gap-2">
                <div className="bg-dark-800 rounded-lg text-lg py-2 text-center">Mon</div>
                <div className="bg-dark-800 rounded-lg text-lg py-2 text-center">Tue</div>
                <div className="bg-dark-800 rounded-lg text-lg py-2 text-center">Wed</div>
                <div className="bg-dark-800 rounded-lg text-lg py-2 text-center">Thu</div>
                <div className="bg-dark-800 rounded-lg text-lg py-2 text-center">Fri</div>
                <div className="bg-dark-800 rounded-lg text-lg py-2 text-center">Sat</div>
                <div className="bg-dark-800 rounded-lg text-lg py-2 text-center">Sun</div>
                {days.map((day) => (
                    <div key={day} className={`transition-all cursor-pointer hover:bg-dark-950 rounded-lg py-5 text-center ${dateDay === day ? 'border border-2 border-red-950' : ''}`}>{day}</div>
                ))}
        </div>
    </div>

) }
export default Calendar;