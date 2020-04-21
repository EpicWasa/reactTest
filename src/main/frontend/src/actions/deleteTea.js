function deleteTea(id){
    fetch("http://localhost:8080/api/tea/"+id, {
        method: 'delete',
        mode: 'cors',}).then(result => window.location.replace('/'))
}

export default deleteTea;