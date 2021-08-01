const LanguageReducer = (state, action) => {
  switch(action.type){
    case 'esEs':
      return 'esEs';
    case 'enEn':
      return 'enEn';
    case 'enUs':
      return 'enUs';
    default:
      return 'esEs';
  }
}

export default LanguageReducer;