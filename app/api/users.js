function getUser(req, res) {
    console.log('get user');
    return res.status(200).send({
        success: true,
        type: 'get user'
    });
}

function postUser(req, res) {
    console.log('post user');
    return res.status(200).send({
        success: true,
        type: 'post user'
    });
}

function deleteUser(req, res) {
    console.log('delete user');
    return res.status(200).send({
        success: true,
        type: 'delete user'
    });
}

module.exports.get = {
    getUser : getUser
};
module.exports.post = {
    postUser : postUser
};
module.exports.delete = {
    deleteUser: deleteUser
};
