import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/database.config';
import { VehicleModule } from './modules/vehicle/vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    VehicleModule, // Vehicle module registration
  ],
})
export class AppModule {}
