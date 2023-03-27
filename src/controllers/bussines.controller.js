import Business from "../dao/classes/business.dao.js"

const businessService = new Business()

export const getBusiness = async (req,res) => {
    const business = await business.getBusiness()
    res.json({ status : "ok", result: "getBusiness"})
}

export const getBusinessById = async (req,res) => {
    res.json({ status : "ok", result: "getBusinessById"})
}

export const createBusiness = async (req,res) => {
    res.json({ status : "ok", result: "createBusiness"})
}

export const addProduct = async (req,res) => {
    res.json({ status : "ok", result: "addProduct"})
}