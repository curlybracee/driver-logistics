import { all, takeLatest, put, call } from 'redux-saga/effects'
import { URL } from '../assets/constants';
import { action, TYPES } from './action'
import { invokeApi, postApi } from './api';

function* handleFetchTestimonials() {
    const payload = yield call(invokeApi, URL.TESTIMONIAL)
    console.log({ payload });
    yield put(action(TYPES.FETCH_TESTIMONIALS_SUCCESS, payload?.response?.data))
}
function* handlePostSubscription(action) {
    const { email } = action?.payload.data
    const { response, error } = yield call(postApi, URL.NEWS_LETTER, email)
    console.log({ response });
    if (error) {

    } else {
        yield put(action(TYPES.POST_SUBSCRIPTION_SUCCESS, response?.data))
    }
}
function* handlePostResume(action) {
    const { response, error } = yield call(postApi, URL.RESUME, action?.payload?.data)
    if (error) {

    } else {
        yield put(action(TYPES.POST_RESUME_SUCCESS, response?.data))
    }
}
function* handlePostContact(action) {
    const { response, error } = yield call(postApi, URL.CONTACT, action?.payload?.data)
    if (error) {

    } else {
        yield put(action(TYPES.POST_CONTACT_FORM_SUCCESS, response?.data))
    }
}
export default function* mySagas() {
    yield all([
        takeLatest(TYPES.FETCH_TESTIMONIALS, handleFetchTestimonials),
        takeLatest(TYPES.POST_SUBSCRIPTION, handlePostSubscription),
        takeLatest(TYPES.POST_RESUME, handlePostResume),
        takeLatest(TYPES.POST_CONTACT_FORM, handlePostContact),
    ])
}