

const getQuery = (event) => {

    return {
        type: "QUERY",
        data: event.target.value
    }
}

export default getQuery;