import React, { useState } from 'react'
function Form({ setSymptom }) {

    const symptomMatcher = {
            depression: "Weight loss",
            satisfaction: "Self-reflection",
            anxiety: "Reduce anxiety",
            stress: "relationships"
    }
    const [inputs, setInputs] = useState(
        {
            depression: "",
            satisfaction: "",
            anxiety: "",
            stress: ""
        }
    )
    function handleChange(e) {
        let { name, id, value } = e.target;
        console.log(name, value);
        setInputs({ ...inputs, [name]: value })
    }
    function submitForm(e) {
        e.preventDefault();
        const highestValueKey = Object.entries(inputs).reduce((max, curr) => max[1] > curr[1] ? max : curr)[0];
        setSymptom(symptomMatcher[highestValueKey])
        console.log(symptomMatcher[highestValueKey])

    }
    console.log(inputs)
    return (
        <div className="question-card">
            <div className="options-dropdown">
                <form className="ml-12 flex flex-col " onSubmit={submitForm}>
                    <label>Are you feeling Down?</label>
                    <select name='depression' id='depression' className="dropdown-menu p-4" onChange={handleChange}>
                        <option value="0">Not at all</option>
                        <option value="1">More than half the Days</option>
                        <option value="2">Nearly Everyday</option>
                        <option value="3">Everyday</option>
                    </select>

                    <label>Little interest or pleasure in doing Things?</label>
                    <select name="satisfaction" id='satisfaction' className="dropdown-menu p-4" onChange={handleChange}>
                        <option value="0">Not at all</option>
                        <option value="1">More than half the Days</option>
                        <option value="2">Nearly Everyday</option>
                        <option value="3">Everyday</option>
                    </select>

                    <label>Trouble Falling Asleep or Staying Asleep?</label>
                    <select name="anxiety" id='anxiety' className="dropdown-menu p-4" onChange={handleChange}>
                        <option value="0">Not at all</option>
                        <option value="1">More than half the Days</option>
                        <option value="2">Nearly Everyday</option>
                        <option value="3">Everyday</option>
                    </select>

                    <label>Feeling Tired or having little Energy?</label>
                    <select name="stress" id='stress' className="dropdown-menu p-4 " onChange={handleChange}>
                        <option value="0">Not at all</option>
                        <option value="1">More than half the Days</option>
                        <option value="2">Nearly Everyday</option>
                        <option value="3">Everyday</option>
                    </select>

                    <button type="submit" className="float-left">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Form

