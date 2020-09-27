import Axios from 'axios';

export const get = (urlTmp) => {

    return Axios({
        method: 'get',
        url: urlTmp,
        // params: {
        //     id: 12345,
        //     name: '哈哈哈'
        // }
    })
        .then(function (response) {
            
            return response.data;
        });

}


export default get;