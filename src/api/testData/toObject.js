let fromJson;

const jsonToObject = () => {
        let object = require ("./movies.json");
        fromJson = object.results;
}

jsonToObject()

export { fromJson }