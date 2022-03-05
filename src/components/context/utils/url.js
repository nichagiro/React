import axios from "axios"
import { FecthPost } from "../config/urls"

export const ExecuteGetPost = async () => {
     return await axios.get(FecthPost)
}



