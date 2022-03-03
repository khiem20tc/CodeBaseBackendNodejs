const errorCode = {
    SUCCESSFUL: {
        errorCode: 200,
        name: 'SUCCESSFUL',
        message: 'Success'
    },
    ERROR_SERVER: {
        errorCode: 500,
        name: 'ERROR_SERVER',
        message: 'Error server'
    },
    DATA_NOT_EXISTS: {
        errorCode: 101,
        name: 'DATA_NOT_EXISTS',
        message: 'Data is not exist'
    },
    DATA_ALREADY_EXISTED: {
        errorCode: 102,
        name: 'DATA_ALREADY_EXISTED',
        message: 'Data is already existed'
    },
    INVALID_PARAMETER: {
        errorCode: 103,
        name: 'INVALID_PARAMETER',
        message: 'Invalid parameter'
    },
    INVALID_TOKEN: {
        errorCode: 104,
        name: 'INVALID_TOKEN',
        message: 'Invalid token'
    },
    INVALID_TYPE: {
        errorCode: 105,
        name: 'INVALID_TYPE',
        message: 'Invalid type'
    },
    MISSING_REQUIRED_FIELDS: {
        errorCode: 106,
        name: 'MISSING_REQUIRED_FIELDS',
        message: 'Missing required fields'
    },
    INVALID_INDEX: {
        errorCode: 107,
        name: 'INVALID_INDEX',
        message: 'Invalid index'
    },
    INVALID_GTIN: {
        errorCode: 108,
        name: 'INVALID_GTIN',
        message: 'Invalid gtin'
    },
    INVALID_PHONE_NUMBER: {
        errorCode: 109,
        name: 'INVALID_PHONE_NUMBER',
        message: 'Invalid phone number'
    },
    GTIN_OF_PRODUCT_IS_ALREADY_EXISTED: {
        errorCode: 110,
        name: 'GTIN_OF_PRODUCT_IS_ALREADY_EXISTED',
        message: 'Gtin of product is already existed'
    },
    EXCEED_NUMBER: {
        errorCode: 427,
        name: 'EXCEED_NUMBER',
        message: 'Exceed number'
    },
    DO_NOT_HAVE_PERMISSION: {
        errorCode: 428,
        name: 'DO_NOT_HAVE_PERMISSION',
        message: 'Do not have permission'
    },
    MANY_REQUEST: {
        errorCode: 429,
        name: 'MANY_REQUEST',
        message: 'Too many accounts created from this IP, please try again 15 minutes'
    },
}

export default errorCode