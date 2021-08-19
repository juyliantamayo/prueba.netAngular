using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Data
{
    public class Producto
    {
        public List<Models.Producto> getProductos(int? productoId)
        {
            List<Models.Producto> productos = new();
            using (Models.facturacionContext db = new())
            {
                if (productoId == null
              )
                {
                    productos = (from producto in db.Productos select producto).ToList();
                }
                else
                {
                    productos = (from producto in db.Productos where producto.ProductoId == productoId select producto).ToList();
                }
            }
            return productos;
        }
        public List<Models.Producto> getProductosCriticos()
        {
            List<Models.Producto> productos = new();
            using (Models.facturacionContext db = new())
            {

                productos = (from producto in db.Productos where producto.Cantidad <= 5 select producto).ToList();

            }
            return productos;
        }
        public List<dynamic> getProductosCompradosTotal()
        {
            List<dynamic> productos = new();
            using (Models.facturacionContext db = new())
            {
                DateTime fechaInicio = new DateTime(2000, 1, 1);
                DateTime fechaFin = new DateTime(2000, 12, 31);

                productos = ((IEnumerable<dynamic>)
                    (from producto in db.Productos
                     join detalles in db.Detalles
                     on producto.ProductoId equals detalles.ProductoId
                     join factura in db.Facturas
                     on detalles.FacturaId equals factura.FacturaId
                     where (factura.Fecha >= fechaInicio && factura.Fecha <= fechaFin) select new { producto, detalles }).AsEnumerable()
                     .GroupBy(p=>p.producto.ProductoId)
                     .Select(p=> new { 
                         Nombre=p.ToList().First().producto.Nombre,
                         Valor = p.Sum(newGroupelement => newGroupelement.producto.Valor * newGroupelement.detalles.Cantidad)
                     })).ToList();



                }
        
                return productos;
            }
        }
}

  