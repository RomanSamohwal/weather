export const saveCities = (state: any) => {
    localStorage.setItem('cities', JSON.stringify(state));
};

export const saveWeathers = (state: any) => {
    localStorage.setItem('weathers', JSON.stringify(state));
};

export const restoreCities =  () => {
    if (localStorage.getItem('cities') === null) {
        return []
    } else {
        return JSON.parse(<string>localStorage.getItem('cities'))
    }
};

export const restoreWeathers =  () => {
    if (localStorage.getItem('weathers') === null) {
        return {}
    } else {
        return JSON.parse(<string>localStorage.getItem('weathers'))
    }
};
