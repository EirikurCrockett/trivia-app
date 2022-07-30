import { useState } from "react"

const SetupForm = (props) => {
    const [categories, setCategories] = useState([]);
    const [numQuestions, setNumQuestions] = useState(10);
    const [cat, setCat] = useState("Any");
    const [diff, setDiff] = useState("Any");
    const [type, setType] = useState("Any");


    const submitHandler = (e) => {

    }

    return(
        <div>
            <form onSubmit={submitHandler()}>
                <div>
                    <label>Number of Questions:</label>
                    <input type="number" min="10" max="50" value="10" onChange={ (e) => {setNumQuestions(e.target.value)}}/>
                </div>

                <div>
                    <label>Category:</label>
                    <select onChange={ (e) => setCat(e.target.value)}>
                        <option value="Any" selected>Any Categories</option>
                        {
                            props.categories.map(cat => {
                                <option value={cat}>{cat}</option>
                            })
                        }
                    </select>
                </div>

            </form>
        </div>
    )
}

export default SetupForm