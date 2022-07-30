import { useState } from "react";
import axios from "axios";
import style from "../../styles/Admin.module.css"

const AdminCategories = () => {
    const [data, setData] = useState([]);
    const [ready, setReady] = useState(false);

    const loadData = async () => {
        const res = await axios.get(
            "https://opentdb.com/api_category.php"
        )
        
        console.log(res.data.trivia_categories)

        for(let item of res.data.trivia_categories){
            data.push(
                {
                    name:item.name
                }
            )

            setData([...data])
        }

        console.log(data)

        setReady(true)
    }

    const sendData = async () => {
        const res = await axios.post("/api/admin/categories", data)
        console.log(res.data)
    }

    return(
        <div className={style.container}>

            {
                ready? <button className={style.btn_disabled}>Load Data</button> : <button onClick={() => loadData() } className={style.btn}>Load Data</button>
            }
            <button onClick={() => testData()}>Test Data</button>
            {
                ready? <button onClick={() => sendData()} className={style.btn}>Send Data</button> : <button className={style.btn_disabled}>Send Data</button> 
            }
        </div>
    )
}

export default AdminCategories


