import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true); //will recreate all tables

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: 'df2fbcd9-b76f-4b68-94c1-b9453693c9f0',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      image_url: 'http://localhost:9000/products/1.png',
    },
    
    {
      id: '6ed5a597-944d-4e83-8bdd-317ad4b4c228',
      name: 'Product 2',
      description: 'Description 2',
      price: 1200,
      image_url: 'http://localhost:9000/products/2.png',
    },
    
    {
      id: '12efdfd3-57ac-406a-80c1-307eb367910e',
      name: 'Product 3',
      description: 'Description 3',
      price: 400,
      image_url: 'http://localhost:9000/products/3.png',
    },
    
    {
      id: 'cbdafa14-deac-4309-b4da-41e7fc850115',
      name: 'Product 4',
      description: 'Description 4',
      price: 600,
      image_url: 'http://localhost:9000/products/4.png',
    },
    
    {
      id: '2cc03e02-880d-4621-b107-d391891789c6',
      name: 'Product 5',
      description: 'Description 5',
      price: 300,
      image_url: 'http://localhost:9000/products/5.png',
    },
    
    {
      id: 'eb5980ce-28dc-49e7-bf19-b96145e3bb9d',
      name: 'Product 6',
      description: 'Description 6',
      price: 100,
      image_url: 'http://localhost:9000/products/6.png',
    },
    
    {
      id: '963a0525-831a-4c0a-911b-d9bced1b8921',
      name: 'Product 7',
      description: 'Description 7',
      price: 100,
      image_url: 'http://localhost:9000/products/7.png',
    },
    
    {
      id: 'e29b4375-58b6-451c-b148-ce8060af9d0c',
      name: 'Product 8',
      description: 'Description 8',
      price: 1300,
      image_url: 'http://localhost:9000/products/8.png',
    },
    
    {
      id: '00eed2c2-53f9-490c-a656-b6a60873891a',
      name: 'Product 9',
      description: 'Description 9',
      price: 1500,
      image_url: 'http://localhost:9000/products/9.png',
    },
    
    {
      id: 'fe279aa3-57d7-4355-a781-fd9c91b28d2f',
      name: 'Product 10',
      description: 'Description 10',
      price: 1020,
      image_url: 'http://localhost:9000/products/10.png',
    },
  ]);
  await app.close();
}
bootstrap();
