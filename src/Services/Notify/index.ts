import { toast } from 'react-toastify'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Notify service functions using react-toastify lib
 *
 */

export const Notify = {
    success: (data = '') => {
        data ? toast.success(data) : toast.success('Concluído!')
    },

    error: (data = '') => {
        data ? toast.success(data) : toast.success('Erro!')
    },

    warning: (data = '') => {
        data && toast.success(data)
    },

    info: (data = '') => {
        data && toast.success(data)
    }
}
