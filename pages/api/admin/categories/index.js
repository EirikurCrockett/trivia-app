import prisma from "../../../../components/prisma"

const AddCategories = async (req, res) => {

    const categories = await prisma.Category.createMany({
        data: req.body,
    }) 
        .catch(err => console.log(err))

    res.json(categories)
}


export default AddCategories