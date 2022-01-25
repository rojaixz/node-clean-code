import { VehicleModel } from '../models/vehicle-model'
import exp = require("constants");
describe('Classes', () => {
    it('Class VehicleModel',  () => {
        const vehicleModel = new VehicleModel({
            name: 'Nissan',
            model: 'DXT',
            year:2020,
            price: 25,
            inventory: true
        })
        expect(vehicleModel.getName()).toEqual('Nissan')
        expect(vehicleModel.getModel()).toEqual('DXT')
        expect(vehicleModel.getYear()).toBe(2020)
    });
})