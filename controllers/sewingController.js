const {Material} = require('../models/material')
const {Pattern} = require('../models/pattern')
const {Project} = require('../models/project')

module.exports = {
    getAllMaterials, getOneMaterial, createMaterial, updateMaterial, deleteMaterial, getAllPatterns, getOnePattern, createPattern, updatePattern, deletePattern, getAllProjects, getOneProject, createProject, updateProject, deleteProject,
}

//MATERIAL
async function getAllMaterials(req, res) {
    try {
        const materials = await material.find()
        res.json(materials)
    } catch (erro){
        return res.status(500).send(error.message)
    }
}

async function getOneMaterial(req, res){
    try{
        const id = req.params.id
        const material = await material.findById(id)
        if (material) {
            return res.json(material)
        }
        return res.status(404).send('Material with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createMaterial(req,res){
    try{
        const material = await new Material(req.body)
        await material.save()
        return res.status(201).json({
            material
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateMaterial(req, res) {
    try{
        const id= req.params.id
        //findByIdAndUpdate takes 3 arguments.  new: true means the return value will show you the new value after it has been modified with req.body.
        const material = await Material.findByIdAndUpdate(id, req.body, {new: true})
        if (material) {
            return res.status(200).json(material)
        }
        throw new Error("Material not found.")
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function deleteMaterial(req, res) {
    try{
        const id = req.params.id
        let material = await Material.findByIdAndDelete(id)
        if (material) {
            return res.status(200).send("Material deleted.")
        }
        throw new Error("Material not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//PATTERN
async function getAllPatterns(req, res) {
    try{
        const patterns = await Pattern.find()
        res.json(patterns)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOnePattern(req, res) {
    try{
        const id = req.params.id
        const pattern = await Pattern.findById(id)
        if (pattern) {
            return res.json(pattern)
        }
        return res.status(404).send('Pattern with the specified ID does not exist.')
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function createPattern(req, res) {
    try{
        const pattern = await Pattern.create(req.body)
        return res.status(201).json({
            pattern
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updatePattern(req, res) {
    try{
        const id = req.params.id
        const pattern = await Pattern.findByIdAndUpdate(id, req.body, {new: true})
        if (pattern) {
            return res.status(200).json(pattern)
        }
        throw new Error("Pattern not found.")
    } catch (error){
        return res.status(500).send(error.message)
    }
}

async function deletePattern(req, res) {
    try{
        const id = req.params.id
        const pattern = await Pattern.findByIdAndDelete(id)
        if (pattern) {
            return res.status(200).send('Pattern deleted.')
        }
        throw new Error("Pattern not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

//PROJECT

async function getAllProjects(req, res) {
    try{
        const projects = await Project.find()
        res.json(projects)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneProject(req, res) {
    try{
        const id = req.params.id
        const project = await Project.findById(id)
        if (project) {
            return res.json(project)
        }
        return res.status(404).send('Project with the specified ID does not exist.')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createProject(req,res) {
    try{
        const project = await Project.create(req.body)
        return res.status(201).json({
            project
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateProject(req, res) { 
    try{
        const id = req.params.id
        const project = await Project.findByIdAndUpdate(id, req.body, {new: true})
        if (project) {
            return res.status(200).json(project)
        }
        throw new Error("Project not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteProject(req, res) {
    try{
        const id = req.params.id
        const project = await Project.findByIdAndDelete(id)
        if (project) {
            return res.status(200).send("Project deleted.")
        }
        throw new Error("Project not found.")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}