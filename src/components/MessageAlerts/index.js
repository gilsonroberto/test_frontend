import React, {  useEffect } from 'react'
import { useSnackbar } from 'notistack';
import { AiOutlineClose } from 'react-icons/ai'

export default function MessageAlert({ message, key, color }) {
    const { closeSnackbar } = useSnackbar()
 


    useEffect(() => {
      //  setCurrentKey(key)
     // closeSnackbar(); 
    }, [])

    const closeMessage = () => {
        closeSnackbar();
    }
    return (
        <div style={{ margin: 0, width: '320px',justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
            <span>{message}</span>
            <AiOutlineClose
                size={20}
                style={{ cursor: 'pointer' }}
                onClick={() => closeMessage()}
            />
        </div>
    )
}