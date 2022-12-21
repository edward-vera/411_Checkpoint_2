export const addListing = (newListing) => {
    return {
        type: 'ADD_LISTING',
        value: newListing
    }
}

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}