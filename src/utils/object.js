export function removeUndefinedParams(obj) {
    try {
        for (let key in obj) {
            if (!obj[key])
                delete obj[key]
        }
    } catch (error) {
        throw error
    }
};

export function objIsEmpty(obj) {
    for (let key in obj) {
        if (obj[key])
            return false
    }
    return true
}