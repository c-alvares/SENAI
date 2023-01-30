const create = (req, res) => {
    res.status(200).send("Create").end();
}

const read = (req, res) => {
    res.status(200).send("Read").end();
}

const update = (req, res) => {
    res.status(200).send("Update").end();
}

const remove = (req, res) => {
    res.status(200).send("Delete").end();
}

module.exports = {
    create,
    read,
    update,
    remove
}