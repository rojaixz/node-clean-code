 import { RegisterVehicle } from '../controllers/register-vehicle'
 import {MissingFormalParameter} from "../errors/client-error";

 describe('RegisterVehicle', () => {
     test('is the name does not exist return 400', () => {
         const sut = new RegisterVehicle()
         const httpRequest =  {
             body: {
                 //name: 'Nissar',
                 model: 'DXT',
                 year: 2020
             }
         }
         const httpResponse = sut.handle(httpRequest)
         expect(httpResponse.statusCode).toBe(400)
         expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
     })
     test('is the model does not exist return 400', () => {
         const sut = new RegisterVehicle()
         const httpRequest =  {
             body: {
                 name: 'Nissar',
               //  model: 'DXT',
                 year: 2020
             }
         }
         const httpResponse = sut.handle(httpRequest)
         expect(httpResponse.statusCode).toBe(400)
         expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
     })
 })