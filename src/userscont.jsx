import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { USR } from './actions/index'

function Userscont({ userData, feachusers }) {
    useEffect(() => {
        feachusers()
    }, [])
    return (
        <div>
            <div>
                asd
                <h1>{JSON.stringify(userData)}</h1>
            </div>
        </div>
    )
}

// this is act like a state in useState Hook
const mapStateToProps = (state) => {
    return {
        userData: state
    }
}

// and this will update the state with API callBack
const mapDispatchToProps = (dispatch) => {
    return {
        feachusers: () => dispatch(USR())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userscont)
