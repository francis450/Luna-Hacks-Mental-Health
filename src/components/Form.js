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
        const form = document.getElementById("form");
        form.style.display = "none";
    }
    console.log(inputs)
    return (
        <div className="question-card">
            <div className="options-dropdown" style={{display: "flex", justifyContent: "center"}}>
                <form className="ml-12 flex flex-col items-center gap-6" id='form' onSubmit={submitForm} style={{width: "80%"}}>
                    <label className='label'>Is your weight something that iss been on your mind recently?</label>
                    <select name='depression' id='depression' className="form-select dropdown-menu p-4" onChange={handleChange}>
                        <option value="0">Not at all</option>
                        <option value="1">More than half the Days</option>
                        <option value="2">Nearly Everyday</option>
                        <option value="3">Everyday</option>
                    </select>

                    <label className='label'>Little interest or pleasure in doing Things?</label>
                    <select name="satisfaction" id='satisfaction' className="form-select dropdown-menu p-4" onChange={handleChange}>
                        <option value="0">Not at all</option>
                        <option value="1">More than half the Days</option>
                        <option value="2">Nearly Everyday</option>
                        <option value="3">Everyday</option>
                    </select>

                    <label className='label'>Trouble Falling Asleep or Staying Asleep?</label>
                    <select name="anxiety" id='anxiety' className="form-select dropdown-menu p-4" onChange={handleChange}>
                        <option value="0">Not at all</option>
                        <option value="1">More than half the Days</option>
                        <option value="2">Nearly Everyday</option>
                        <option value="3">Everyday</option>
                    </select>

                    <label className='label'>Feeling Tired or having little Energy?</label>
                    <select name="stress" id='stress' className="form-select dropdown-menu p-4 " onChange={handleChange}>
                        <option value="0">Not at all</option>
                        <option value="1">More than half the Days</option>
                        <option value="2">Nearly Everyday</option>
                        <option value="3">Everyday</option>
                    </select>

                    <button type="submit" id='button' className="float-left">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Form

