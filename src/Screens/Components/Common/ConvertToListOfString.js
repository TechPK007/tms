const convertToListOfString = (list, filterBy) => {
    const onlyStringList = list.map((data) => {
        return data[filterBy]
    })
    return onlyStringList
}



export default convertToListOfString;