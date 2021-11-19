function siteReducer(state = {}, action) {
  switch (action.type) {
    case "SITE_INFO":
      return { ...action.payload };
    case "UPDATE_SITE":
      return { ...action.payload };
    default:
      return state;
  }
}

export default siteReducer;
