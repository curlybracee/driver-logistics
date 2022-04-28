import { TYPES } from "../action";

const initialState = {
    testimonials: {
        data: [],
        requestInProgress: false

    },
    banner: {
        data: [],
        requestInProgress: false

    },
    blogs: {
        data: [],
        requestInProgress: false
    },
    blogById: {
        data: {},
        requestInProgress: false
    },
    news: {
        data: [],
        requestInProgress: false

    },
    newsById: {
        data: {},
        requestInProgress: false
    },
    clients: {
        data: [],
        requestInProgress: false

    },
    statistics: {
        data: [],
        requestInProgress: false
    },
    toast:undefined
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FETCH_TESTIMONIALS_REQUEST: {
            return Object.assign({}, state, {
                testimonials: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.FETCH_TESTIMONIALS_SUCCESS: {
            return Object.assign({}, state, {
                testimonials: {
                    data: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_TESTIMONIALS_FAILURE: {
            return Object.assign({}, state, {
                testimonials: {
                    error: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_BANNER_REQUEST: {
            return Object.assign({}, state, {
                banner: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.FETCH_BANNER_SUCCESS: {
            return Object.assign({}, state, {
                banner: {
                    data: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_BANNER_FAILURE: {
            return Object.assign({}, state, {
                banner: {
                    error: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_BLOG_REQUEST: {
            return Object.assign({}, state, {
                blogs: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.FETCH_BLOG_SUCCESS: {
            return Object.assign({}, state, {
                blogs: {
                    data: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_BLOG_FAILURE: {
            return Object.assign({}, state, {
                blogs: {
                    error: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_BLOG_BY_ID_REQUEST: {
            return Object.assign({}, state, {
                blogById: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.FETCH_BLOG_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                blogById: {
                    data: action.payload || {},
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_BLOG_BY_ID_FAILURE: {
            return Object.assign({}, state, {
                blogById: {
                    error: action.payload || {},
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_NEWS_REQUEST: {
            return Object.assign({}, state, {
                news: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.FETCH_NEWS_SUCCESS: {
            return Object.assign({}, state, {
                news: {
                    data: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_NEWS_FAILURE: {
            return Object.assign({}, state, {
                news: {
                    error: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_NEWS_BY_ID_REQUEST: {
            return Object.assign({}, state, {
                newsById: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.FETCH_NEWS_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                newsById: {
                    data: action.payload || {},
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_NEWS_BY_ID_FAILURE: {
            return Object.assign({}, state, {
                newsById: {
                    error: action.payload || {},
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_CLIENT_REQUEST: {
            return Object.assign({}, state, {
                clients: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.FETCH_CLIENT_SUCCESS: {
            return Object.assign({}, state, {
                clients: {
                    data: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_CLIENT_FAILURE: {
            return Object.assign({}, state, {
                clients: {
                    error: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_STATISTICS_REQUEST: {
            return Object.assign({}, state, {
                statistics: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.FETCH_STATISTICS_SUCCESS: {
            return Object.assign({}, state, {
                statistics: {
                    data: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.FETCH_STATISTICS_FAILURE: {
            return Object.assign({}, state, {
                statistics: {
                    error: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        case TYPES.POST_CONTACT_FORM_SUCCESS: {
            return Object.assign({}, state, {
                toast: {
                    message: 'Your details successfully submitted',
                    status:'success',
                    requestInProgress: false
                },
            })
        }
        case TYPES.POST_RESUME_SUCCESS: {
            return Object.assign({}, state, {
                toast: {
                    message: 'Your details successfully submitted',
                    status:'success',
                    requestInProgress: false
                },
            })
        }
        case TYPES.COMMON_FAILURE: {
            return Object.assign({}, state, {
                toast: {
                    message:'Something went wrong',
                    status:'error',
                    requestInProgress: false
                },
            })
        }
        case TYPES.CLEAR_TOAST: {
            return Object.assign({}, state, {
                toast: undefined,
            })
        }
        case TYPES.POST_SUBSCRIPTION_REQUEST: {
            return Object.assign({}, state, {
                postSubscription: {
                    requestInProgress: true
                },
            })
        }
        case TYPES.POST_SUBSCRIPTION_SUCCESS: {
            return Object.assign({}, state, {
                toast: {
                    message: 'Your details successfully submitted',
                    status:'success',
                    requestInProgress: false
                },
            })
        }
        case TYPES.POST_SUBSCRIPTION_FAILURE: {
            return Object.assign({}, state, {
                postSubscription: {
                    error: action.payload || [],
                    requestInProgress: false
                },
            })
        }
        // case TYPES.POST_RESUME_REQUEST: {
        //     return Object.assign({}, state, {
        //         postResume: {
        //             requestInProgress: true
        //         },
        //     })
        // }
        // case TYPES.POST_RESUME_SUCCESS: {
        //     return Object.assign({}, state, {
        //         postResume: {
        //             data: action.payload || [],
        //             requestInProgress: false
        //         },
        //     })
        // }
        // case TYPES.POST_RESUME_FAILURE: {
        //     return Object.assign({}, state, {
        //         postResume: {
        //             error: action.payload || [],
        //             requestInProgress: false
        //         },
        //     })
        // }
        // case TYPES.POST_CONTACT_REQUEST: {
        //     return Object.assign({}, state, {
        //         postResume: {
        //             requestInProgress: true
        //         },
        //     })
        // }
        // case TYPES.POST_CONTACT_SUCCESS: {
        //     return Object.assign({}, state, {
        //         postResume: {
        //             data: action.payload || [],
        //             requestInProgress: false
        //         },
        //     })
        // }
        // case TYPES.POST_CONTACT_FAILURE: {
        //     return Object.assign({}, state, {
        //         postResume: {
        //             error: action.payload || [],
        //             requestInProgress: false
        //         },
        //     })
        // }
        default: return state
    }
}
export default userReducer;
