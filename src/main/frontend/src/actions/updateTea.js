 async function updateTea(teaId, name, origin, sortId) {
    await   fetch('http://localhost:8080/api/tea/'+teaId ,{
            method: 'put',
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
        } ).then(result => window.location.replace('/'));


}

export default updateTea;