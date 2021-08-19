Create database facturacion;
use facturacion;
Create table productos(
producto_id int not null  primary key ,
nombre nvarchar(50) not null ,
cantidad int not null ,
valor int not null
);
create table clientes (
cliente_id int  not null  primary key,
nombre nvarchar(50) not null,
fechaNacimiento date,

);
create table facturas(
factura_id int not null  primary key ,
fecha date,
cliente_id int not null FOREIGN KEY REFERENCES clientes(cliente_id)
);
create table detalles (
factura_id  int not null  FOREIGN KEY REFERENCES facturas(factura_id),
producto_id int not null  FOREIGN KEY REFERENCES productos(producto_id),
cantidad int not null,
primary key (factura_id,producto_id)
);

insert into clientes values(5,'dario','01/01/1983'),(2,'julian','01/01/2000'),(3,'alejandro','01/11/1975'),(8,'freddy','01/01/1980')
insert into productos values(1,'manzanas',90,2000),(2,'peras',5,2500),(3,'carne',80,6000),(4,'pollo',4,3000),(5,'fresas',900,5000)
insert into facturas values (1,'02/02/2000',5),(2,'03/02/2000',5),(3,'04/02/2000',5),(4,'03/03/2000',5),(5,'04/03/2000',5),(6,'02/02/2000',2),(7,'02/02/2000',2),(8,'05/02/2000',2),(9,'04/02/2000',2)
insert into detalles values (1,1,20),(1,2,10),(1,3,5),(2,1,20),(2,2,5),(2,3,5),(3,1,1),(3,2,2),(3,3,3),(4,2,20),(4,4,10),(4,5,5),(5,3,200),(5,4,10),(5,5,5)
