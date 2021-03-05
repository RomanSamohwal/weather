import React, {useEffect, useState} from 'react';
import {SearchContainer} from '../features/search/SearachContainer';
import { restoreCities,restoreWeathers } from '../utils/localStorage';

function App() {

    const [firstLoading, setFirstLoading] = useState(true)

    useEffect(() => {
        if (firstLoading) {
            let cities = restoreCities()
            let weathers = restoreWeathers()
            console.log(cities)
            console.log(weathers)
            setFirstLoading(false)
        }
    }, [firstLoading])

    return (
        <div>
            <SearchContainer firstLoading = {firstLoading}/>
        </div>
    );
}

export default App;
