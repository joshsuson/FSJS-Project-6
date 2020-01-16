const express = require('express');
const router = express.Router();
const {projects} = require('../data.json');


router.get('/', (req, res) => {
    res.redirect('/');
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const {project_name, description, technologies, live_link, github_link, image_urls} = projects[id];

    const templateData = {id, project_name, description, technologies, live_link, github_link, image_urls};
    res.render('projects', templateData);
});


module.exports = router;