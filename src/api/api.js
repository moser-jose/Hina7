/* export default {
    getHinos = () => {
        fetch('./hinario.js',{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            return data.hinos;
        })
        .catch((error) => {
            console.error(error);
        }); 
    }
} */