import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  create(@Body() vehicleData) {
    return this.vehicleService.create(vehicleData);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() vehicleData) {
    return this.vehicleService.update(+id, vehicleData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleService.remove(+id);
  }
}
