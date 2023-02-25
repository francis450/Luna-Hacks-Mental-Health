import React, {useState} from 'react'
function Form({question, options}){
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }
    
    
    return (
            <form class="form"className=" flex flex-col items-center gap-6">
                <label class="label">Are you feeling Down?</label>
                <select name='depression' id="form-select" className="dropdown-menu p-4" onChange="handleSelectChange()">
                    <option value="dep3">Everyday</option>
                    <option value="dep2">Nearly Everyday</option>
                    <option value="dep1">More than half the Days</option>
                    <option value="dep0">Not at all</option>
                </select>
                
                <label class="label">Little interest or pleasure in doing Things?</label>
                <select name="satisfaction" id="form-select" className="dropdown-menu p-4" onChange="handleSelectChange()">
                    <option value="satis3" >Everyday</option>
                    <option value="satis2">Almost Everyday</option>
                    <option value="satis1">More than half the Days</option>
                    <option value="satis0">Not at all</option>
                </select>

                <label class="label">Trouble Falling Asleep or Staying Asleep?</label>
                <select name="anxiety" id="form-select" className="p-4" onChange="handleSelectChange()">
                    <option value="anx3">Everyday</option>
                    <option value="anx2">Almost Everyday</option>
                    <option value="anx1">More than half the Days</option>
                    <option value="anx0">Not at all</option>
                </select>
                
                <label class="label">Feeling Tired or having little Energy?</label>
                <select name="stress" id="form-select" className="dropdown-menu p-4" onChange="handleSelectChange()">
                    <option value="stress3">Everyday</option>
                    <option value="stress2">Nearly Everyday</option>
                    <option value="stress1">More than half the Days</option>
                    <option value="stress0">Not at all</option>
                </select>

                <button type="submit" id="button">Submit</button>
            </form>
    )
}
export default Form

