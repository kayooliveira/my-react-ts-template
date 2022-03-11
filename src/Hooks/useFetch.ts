import useSWR from 'swr'
import api from '../Services/Api'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: useFetch hook using lib SWR and Axios
 *
 * @param url:string
 *
 * @return {data,error}
 *
 */

const useFetch = <Data = unknown>(url: string) => {
    const { data, error } = useSWR<Data>(
        url,
        async url => {
            const response = await api.get(url)
            const data = response.data.message
            return data
        },
        { revalidateOnFocus: false, revalidateOnReconnect: true }
    )
    return { data, error }
}

export default useFetch
