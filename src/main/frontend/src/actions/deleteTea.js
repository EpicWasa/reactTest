function deleteTea(id){
    fetch("/api/tea/"+id, {
        method: 'delete',
        mode: 'cors',}).then(result => window.location.replace('/'))
}

export default deleteTea;