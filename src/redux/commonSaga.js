import { all, takeLatest, put, call } from 'redux-saga/effects'
import { URL } from '../assets/constants';
import { action as Action, TYPES } from './action'
import { invokeApi, postApi, UserpostApi } from './api';
import history from './history';

function* handleFetchTestimonials() {
    const { response, error } = yield call(invokeApi, URL.TESTIMONIAL)
    console.log({ response });
    if (error) {
        yield put(Action(TYPES.FETCH_TESTIMONIALS_FAILURE, error))
    } else {
        yield put(Action(TYPES.FETCH_TESTIMONIALS_SUCCESS, response?.data))
    }
}
function* handleFetchBanner() {
    const { response, error } = yield call(invokeApi, URL.BANNER)
    console.log({ response });
    if (error) {
        yield put(Action(TYPES.FETCH_BANNER_FAILURE, error))
    } else {
        yield put(Action(TYPES.FETCH_BANNER_SUCCESS, response?.data))
    }
}
function* handleFetchBlog(action) {
    const { page } = action?.payload.data
    console.log({ action });
    const { response, error } = yield call(invokeApi, URL.BLOG, { page })
    console.log({ response });
    if (error) {
        yield put(Action(TYPES.FETCH_BLOG_FAILURE, error))
    } else {
        yield put(Action(TYPES.FETCH_BLOG_SUCCESS, response?.data))
    }
}
function* handleFetchNews(action) {
    const { page } = action?.payload.data
    console.log({ action });
    const { response, error } = yield call(invokeApi, URL.NEWS, { page })
    console.log({ response });
    if (error) {
        yield put(Action(TYPES.FETCH_NEWS_FAILURE, error))
    } else {
        yield put(Action(TYPES.FETCH_NEWS_SUCCESS, response?.data))
    }
}
function* handleFetchClient() {
    const { response, error } = yield call(invokeApi, URL.CLIENT_LOGOS)
    console.log({ response });
    if (error) {
        yield put(Action(TYPES.FETCH_CLIENT_FAILURE, error))
    } else {
        yield put(Action(TYPES.FETCH_CLIENT_SUCCESS, response?.data))
    }
}
function* handleFetchStatitics() {
    const { response, error } = yield call(invokeApi, URL.STATISTICS)
    console.log({ response });
    if (error) {
        yield put(Action(TYPES.FETCH_STATISTICS_FAILURE, error))
    } else {
        yield put(Action(TYPES.FETCH_STATISTICS_SUCCESS, response?.data))
    }
}


function* handlePostSubscription(action) {
    const { email } = action?.payload.data
    console.log({ email });
    const { response, error } = yield call(postApi, URL.NEWS_LETTER, { email })
    console.log({ response });
    if (error) {
        yield put(Action(TYPES.COMMON_FAILURE, error))
    } else {
        yield put(Action(TYPES.POST_SUBSCRIPTION_SUCCESS, response?.data))
    }
}
function* handlePostResume(action) {
    const { response, error } = yield call(postApi, URL.RESUME, action?.payload?.data)
    if (error) {
        yield put(Action(TYPES.COMMON_FAILURE, error))

    } else {
        yield put(Action(TYPES.POST_RESUME_SUCCESS, response?.data))
    }
}
function* handlePostContact(action) {
    const { response, error } = yield call(postApi, URL.CONTACT, action?.payload?.data)
    if (error) {
        yield put(Action(TYPES.COMMON_FAILURE, error))

    } else {
        yield put(Action(TYPES.POST_CONTACT_FORM_SUCCESS, response?.data))
    }
}
function* handlePostLogin(action) {
    const { response, error } = yield call(UserpostApi, URL.LOGIN, action?.payload?.data)
    if (error) {
        yield put(Action(TYPES.COMMON_FAILURE, error))

    } else {
        // console.log("#######################"+ JSON.stringify(response));
        yield put(Action(TYPES.POST_LOGIN_SUCCESS, response?.data))

        if (response.Status) {
            localStorage.setItem('user', JSON.stringify(response.Data[0]))
            // yield call(history.push, `/dashboard`)
            window.location.href = "/dashboard"
        }
        else {
            yield put(Action(TYPES.POST_LOGIN_FAILURE, error))
        }
        // const valuesArray = JSON.parse(response);

        // localStorage.setItem('token', JSON.stringify(response))
        //check status true or false then move to user dashboard
    }
}
function* handleUpdateSearch(action) {
    const searchKey = action?.payload?.data;
    yield call(history.push, `/dashboard/search/${searchKey}`)
}
function* handleDashBoard(action) {
    const { response, error } = yield call(UserpostApi, URL.GET_DASHBOARD, action?.payload?.data)
    if (error) {
        yield put(Action(TYPES.COMMON_FAILURE, error))
    } else {
        yield put(Action(TYPES.FETCH_DASHBOARD_SUCCESS, response?.Data))
    }
}
export default function* mySagas() {
    yield all([
        takeLatest(TYPES.FETCH_TESTIMONIALS, handleFetchTestimonials),
        takeLatest(TYPES.FETCH_BANNER, handleFetchBanner),
        takeLatest(TYPES.FETCH_BLOG, handleFetchBlog),
        takeLatest(TYPES.FETCH_NEWS, handleFetchNews),
        takeLatest(TYPES.FETCH_CLIENT, handleFetchClient),
        takeLatest(TYPES.FETCH_STATISTICS, handleFetchStatitics),

        takeLatest(TYPES.POST_SUBSCRIPTION, handlePostSubscription),
        takeLatest(TYPES.POST_RESUME, handlePostResume),
        takeLatest(TYPES.POST_CONTACT_FORM, handlePostContact),
        takeLatest(TYPES.POST_LOGIN, handlePostLogin),
        takeLatest(TYPES.UPDATE_SEARCH, handleUpdateSearch),
        takeLatest(TYPES.FETCH_DASHBOARD, handleDashBoard),
    ])
}