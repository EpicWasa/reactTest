async function createTea(name, origin, sortId) {
        await fetch('/api/tea/add',{
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