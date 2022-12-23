export const userLogin = (user) => {
    return {
      type: 'USER_LOGIN',
      value: user,
    };
  };

export const addListing = (newListing) => {
    return {
        type: 'ADD_LISTING',
        value: newListing
    }
}

export const removeListings = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}