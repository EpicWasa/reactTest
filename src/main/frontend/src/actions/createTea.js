async function createTea(name, origin, sortId) {
        await fetch('http://localhost:8080/api/tea/add',{
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                origin: origin,
                teaSortID: sortId,
            })
        } ).then(() => window.location.replace('/'));
}

export default createTea;