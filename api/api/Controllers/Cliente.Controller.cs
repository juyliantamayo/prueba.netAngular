using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Cliente : Controller
    {
        private Business.Cliente businessCliente = new();
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public List<Models.Cliente> GetClientes([FromQuery(Name = "id")] int? clientId)
        {
            return businessCliente.getClientes(clientId);
        }
        [HttpGet]
        [Route("menores")]
        public List<Models.Cliente> getClienteMenores()
        {
            return businessCliente.getClienteMenores();

        }
        [HttpGet]
        [Route("frecuencia")]
        public List<dynamic> getFrecuenciaCliente()
        {
            return businessCliente.getFrecuenciaCliente();
        }
    }
}
