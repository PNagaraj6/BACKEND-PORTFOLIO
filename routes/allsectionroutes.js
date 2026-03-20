const express = require("express")
const router = express.Router()

const About = require("../models/Aboutme")
const Mytoolkit = require("../models/Mytoolkit")
const Mywork = require("../models/projects")
const Workhistory = require("../models/workhistory")
const Education = require("../models/Education")
const Testimonals = require("../models/Testimonals")
const Blog = require("../models/blog")
const Contact = require("../models/contact")

// About section
router.get('/about',async(req,res) => {
    const data = await About.find()
    res.json(data)
})


router.post('/about',async(req,res) => {
    try {
        const newdata = new About(req.body)
        const savedata = await newdata.save()
    res.json(savedata)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/about/:id', async (req, res) => {
    try {
        const updatedData = await About.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        res.json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/about/:id', async (req, res) => {
    try {
        const deletedData = await About.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted successfully", deletedData })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// .................
// MY TOOLKIT section
// ................
router.get('/mytoolkit',async(req,res) => {
    const data = await Mytoolkit .find()
    res.json(data)
})
router.post('/mytoolkit',async(req,res) => {
    try {
        const newdata = new Mytoolkit(req.body)
      const saveData = await newdata.save()
    res.json(saveData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/mytoolkit/:id', async (req, res) => {
    try {
        const updatedData = await Mytoolkit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        res.json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/mytoolkit/:id', async (req, res) => {
    try {
        const deletedData = await Mytoolkit.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted successfully", deletedData })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
// ..............
// MYWORK section
// ...............

router.get('/mywork',async(req,res) => {
    const data = await Mywork.find()
    res.json(data)
})

router.post('/mywork',async(req,res) => {
    try {
        const newdata = new Mywork(req.body)
      const saveData = await newdata.save()
    res.json(saveData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/mywork/:id', async (req, res) => {
    try {
        const updatedData = await Mywork.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        res.json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/mywork/:id', async (req, res) => {
    try {
        const deletedData = await Mywork.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted successfully", deletedData })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// .....................
// WORKHISTORY section
// ......................

router.get('/workhistory',async(req,res) => {
    const data = await Workhistory.find()
    res.json(data)
})

router.post('/workhistory',async(req,res) => {
    try {
        const newdata = new Workhistory(req.body)
      const saveData = await newdata.save()
    res.json(saveData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/workhistory/:id', async (req, res) => {
    try {
        const updatedData = await Workhistory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        res.json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/workhistory/:id', async (req, res) => {
    try {
        const deletedData = await Workhistory.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted successfully", deletedData })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// ....................
// EDUCATION section
// ....................

router.get('/education',async(req,res) => {
    const data = await Education.find()
    res.json(data)
})
router.post('/education',async(req,res) => {
    try {
        const newdata = new Education(req.body)
      const saveData = await newdata.save()
    res.json(saveData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/education/:id', async (req, res) => {
    try {
        const updatedData = await Education.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        res.json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/education/:id', async (req, res) => {
    try {
        const deletedData = await Education.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted successfully", deletedData })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// ......................
// TESTIMONALS section
// ......................

router.get('/testimonals',async(req,res) => {
    const data = await Testimonals.find()
    res.json(data)
})
router.post('/testimonals',async(req,res) => {
    try {
        const newdata = new Testimonals(req.body)
      const saveData = await newdata.save()
    res.json(saveData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/testimonals/:id', async (req, res) => {
    try {
        const updatedData = await Testimonals.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        res.json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/testimonals/:id', async (req, res) => {
    try {
        const deletedData = await Testimonals.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted successfully", deletedData })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// ................
// Blog section
// ...................

router.get('/blog',async(req,res) => {
    const data = await Blog.find()
    res.json(data)
})
router.post('/blog',async(req,res) => {
    try {
        const newdata = new Blog(req.body)
      const saveData = await newdata.save()
    res.json(saveData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/blog/:id', async (req, res) => {
    try {
        const updatedData = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        res.json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/blog/:id', async (req, res) => {
    try {
        const deletedData = await Blog.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted successfully", deletedData })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
// ..................
// contact section
// ....................

router.get('/contact',async(req,res) =>{
     const data = await Contact.find()
    res.json(data)
})
router.post('/contact', async(req,res)=>{

const newContact = new Contact({
name:req.body.name,
email:req.body.email,
subject:req.body.subject,
message:req.body.message
})

await newContact.save()

res.json({message:"Message saved successfully"})

})
router.put('/contact/:id', async (req, res) => {
    try {
        const updatedData = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } 
        )
        res.json(updatedData)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/contact/:id', async (req, res) => {
    try {
        const deletedData = await Contact.findByIdAndDelete(req.params.id)
        res.json({ message: "Deleted successfully", deletedData })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = router