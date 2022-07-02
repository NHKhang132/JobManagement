import {Staff} from '../models/staff.js'
import {Address} from '../models/address.js'
export const StaffCtrl = {
    createStaff: async (req, res) => {
        const {name, phone, email, dob, avt, gender, password, number, street, ward, district, province} = req.body;
        const newAddress = await Address.create({
            number: number,
            street: street,
            ward: ward,
            district: district,
            province: province
        })  
        const newStaff = await Staff.create({
            name: name,
            phone: phone,
            email: email,
            dob: dob, 
            avt: avt,
            gender: gender, 
            password: password,
            addressId: newAddress.id
        })
        
        res.json(newStaff)
    }

}
