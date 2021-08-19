using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Business
{
    public class Producto
    {
        Data.Producto dataProducto = new();
        public List<Models.Producto> getProductos(int? productoId)
        {
            return dataProducto.getProductos(productoId);
        }
        public List<Models.Producto> getProductosCriticos()
        {
            return dataProducto.getProductosCriticos();
        }
        public List<dynamic> getProductosCompradosTotal()
        {
            return dataProducto.getProductosCompradosTotal();
        }
    }
}
