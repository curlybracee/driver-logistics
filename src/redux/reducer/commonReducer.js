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
    clients: {
        data: [],
        requestInProgress: false

    },
    statistics: {
        data: [],
        requestInProgress: false
    },
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
        // case TYPES.POST_SUBSCRIPTION_REQUEST: {
        //     return Object.assign({}, state, {
        //         postSubscription: {
        //             requestInProgress: true
        //         },
        //     })
        // }
        // case TYPES.POST_SUBSCRIPTION_SUCCESS: {
        //     return Object.assign({}, state, {
        //         postSubscription: {
        //             data: action.payload || [],
        //             requestInProgress: false
        //         },
        //     })
        // }
        // case TYPES.POST_SUBSCRIPTION_FAILURE: {
        //     return Object.assign({}, state, {
        //         postSubscription: {
        //             error: action.payload || [],
        //             requestInProgress: false
        //         },
        //     })
        // }
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
