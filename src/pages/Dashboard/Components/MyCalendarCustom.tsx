import {useState} from 'react';
import {DayPicker} from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./styles/MyCalendarCustom.css";


const diasMarcados = [
  new Date(2025, 6, 2),
  new Date(2025, 6, 5),
  new Date(2025, 6, 4)
];

const MyCalendarCustom = () => {

    const [selected, setSelected] = useState<Date | undefined>();

    return (
    <div>
        <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            modifiers={{ booked: diasMarcados }}
            disabled={() => true}

            modifiersClassNames={{
                booked: "my-booked-class"
            }}
        />
        {selected && <p>Dia selecionado: {selected.toLocaleDateString()}</p>}
    </div>
    )
}

export default MyCalendarCustom;