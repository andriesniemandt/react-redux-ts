interface NPMPackageState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: NPMPackageState, action: any): NPMPackageState => {
  switch (action.type) {
    case 'SEARCH_NPM_PACKAGES':
      return {
        loading: true,
        error: null,
        data: []
      }
    case 'SEARCH_NPM_PACKAGES_SUCCESS':
      return {
        loading: false,
        error: null,
        data: action.payload
      }
    case 'SEARCH_NPM_PACKAGES_ERROR':
      return {
        loading: false,
        error: action.payload,
        data: []
      }
    default:
      return state;
  }
}

export default reducer;