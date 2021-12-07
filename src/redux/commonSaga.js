import { all, takeLatest, put, call } from 'redux-saga/effects'
import { action, TYPES } from './action'
import { invokeApi } from './api';

function* handleFetchTestimonials() {
    const payload = yield call(invokeApi, 'testimonial')
    yield put(action(TYPES.FETCH_TESTIMONIALS_SUCCESS, payload?.response?.data))
}
export default function* mySagas() {
    yield all([
        takeLatest(TYPES.FETCH_TESTIMONIALS, handleFetchTestimonials)
    ])
}