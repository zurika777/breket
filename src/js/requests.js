let path = "https://github.com/zurika777/Site-block1/blob/master/src/assets/js/langs.json";


const firstAsync = async () => {
 return await fetch(path).then(response => {
        let data = response.json();
        });
    }
    firstAsync();
