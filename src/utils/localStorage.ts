export const saveCities = (state: any) => {
    localStorage.setItem('cities', JSON.stringify(state));
};

export const saveWeathers = (state: any) => {
    localStorage.setItem('weathers', JSON.stringify(state));
};

/*export const restoreCities = async () => {
    if (localStorage.getItem('cities') === null) {
        return initProcess
    } else {
        return JSON.parse(<string>localStorage.getItem('processes'))
    }
};*/

/*
export const restoreJobs =  () => {
    if (localStorage.getItem('jobs') === null) {
        return initJobs
    } else {
        return JSON.parse(<string>localStorage.getItem('jobs'))
    }
};*/
