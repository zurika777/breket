let path = "https://github.com/zurika777/breket/tree/master/src/data";


const firstAsync = async () => {
 return await fetch(path).then(response => {
        let data = response.json();
        });
    }
    firstAsync();
