import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id:uuid(),
            marca: 'Toyota',
            modelo:'Corolla',
            año:'2020',
            kilometraje:'35000',
            color:'blanco',
            tipo_combustible:'Gasolina',
            transmision:'Automática'
        },{
            id:uuid(),
            marca: 'Toyota',
            modelo:'Corolla',
            año:'2020',
            kilometraje:'35000',
            color:'blanco',
            tipo_combustible:'Gasolina',
            transmision:'Automática'
        },{
            id:uuid(),
            marca: 'Toyota',
            modelo:'Corolla',
            año:'2020',
            kilometraje:'35000',
            color:'blanco',
            tipo_combustible:'Gasolina',
            transmision:'Automática'
        }
    ];

    findAll(){
        return this.cars
    }

    findOneById(id:string){
        const car = this.cars.find(car => car.id===id);

        if(!car){
            throw new NotFoundException(`Datos con Id '${id}' no existe!`);
        }

        return car;
    }

    findOneByBrand(marca:string){
        const br = this.cars.filter(car => car.marca===marca);

        return br;
    }

    create(createCarDto: CreateCarDto){
        
        const car: Car={
            id: uuid(), //...createCarDto
            modelo: createCarDto.model,
            marca: createCarDto.marca,
            año: createCarDto.marca,
            kilometraje: createCarDto.marca,
            color: createCarDto.marca,
            tipo_combustible: createCarDto.marca,
            transmision: createCarDto.marca
        }

        this.cars.push(car);

        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneById(id);

        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`El id del carro no es válido`)

        this.cars = this.cars.map(car =>{
            if(car.id===id){
                carDB = {...carDB, ...updateCarDto, id}
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    delete(id:string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        console.log({car})
    }

}
