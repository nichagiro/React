import axios from 'axios'
import { allResources } from '../../mui/config/api'


export const AxiosGetResources = async () => {
    try {
        const res = await axios.get(allResources);
        return res.data;
        
    } catch (error) {
        console.log(error)
        return null;
    }

}