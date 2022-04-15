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
    success: (message?: string) => {
        message ? toast.success(message) : toast.success('Success')
    },

    error: (message?: string) => {
        message ? toast.error(message) : toast.error('An error occurred!')
    },

    warning: (message?: string) => {
        message && toast.warning(message)
    },

    info: (message?: string) => {
        message && toast.info(message)
    }
}
