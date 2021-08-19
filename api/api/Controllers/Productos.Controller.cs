using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Productos : Controller
    {
        Business.Producto producto = new();
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public List<Models.Producto> getProductos([FromQuery(Name = "id")] int? productoId) {
            return producto.getProductos(productoId);
        }
        [HttpGet]
        [Route("criticos")]
        public List<Models.Producto> getProductosCriticos() {
            return producto.getProductosCriticos();
        }
        [HttpGet]
        [Route("total")]
        public List<dynamic> getProductosCompradosTotal()
        {
            return producto.getProductosCompradosTotal();
        }
    }
}
