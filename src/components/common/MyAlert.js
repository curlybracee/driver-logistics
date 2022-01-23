import { Snackbar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { removeToast } from '../../actions';
import { Alert } from '@material-ui/lab';
import { clearToast } from '../../redux/action';
const MyAlert = () => {
    const [openAlert, setOpenAlert] = useState(false);
    const dispatch = useDispatch()
    const toast = useSelector(state => state.userLog.toast)
    const handleClose = () => {
        setOpenAlert(false)
        dispatch(clearToast())
    }
    useEffect(() => {
        setOpenAlert(true)
    }, [toast])
    return toast ? (
        <Snackbar
            open={openAlert} autoHideDuration={6000}
            onClose={handleClose}
            message={toast?.message}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <Alert severity={toast?.status}>
                <span style={{fontSize:'14px'}}>
                {toast?.message}
                    </span>
            </Alert>
        </Snackbar>
    ) : <></>
}

export default MyAlert
