
const Select = (props: { title: string }) => {
    return <div>
        <label className="block text-gray-900 text-left">{props.title}</label>

        <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full text-gray-700"
        >
            <option value="">Please select</option>
            <option value="JM">John Mayer</option>
            <option value="SRV">Stevie Ray Vaughn</option>
            <option value="JH">Jimi Hendrix</option>
            <option value="BBK">B.B King</option>
            <option value="AK">Albert King</option>
            <option value="BG">Buddy Guy</option>
            <option value="EC">Eric Clapton</option>
        </select>
    </div>
}

export default Select;