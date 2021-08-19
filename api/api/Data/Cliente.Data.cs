using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Data
{
    public class Cliente
    {
        public List<Models.Cliente> getCliente(int? clienteId)
        {
            List<Models.Cliente> clientes = new();
            using (Models.facturacionContext db = new())
            {
                if (clienteId == null
                 )
                {
                    clientes = (from cliente in db.Clientes select cliente).ToList();
                }
                else
                {
                    clientes = (from cliente in db.Clientes where cliente.ClienteId == clienteId select cliente).ToList();
                }


            }
            return clientes;
        }
        public List<Models.Cliente> getClienteMenores()
        {
            List<Models.Cliente> clientes = new();
            using (Models.facturacionContext db = new())
            {
                DateTime fechaInicio = new DateTime(2000,2,1);
                DateTime fechaFin = new DateTime(2000, 5, 25);
                clientes = (from cliente in db.Clientes 
                            join factura in db.Facturas 
                            on cliente.ClienteId equals factura.ClienteId 
                            where (factura.Fecha >= fechaInicio && factura.Fecha <= fechaFin) select cliente).ToList()
                    .Where(c => ((DateTime.Today.AddTicks(-c.FechaNacimiento.Value.Ticks).Year - 1) < 35)).Distinct().ToList();
            }
            return clientes;
        }
        public List<dynamic> getFrecuenciaCliente() {
            List<dynamic> clientes = new();
            using (Models.facturacionContext db = new())
            {
                clientes = ((IEnumerable<dynamic>)
                    (from cliente in db.Clientes
                     join factura in db.Facturas
                     on cliente.ClienteId equals factura.ClienteId select new { cliente,factura}).AsEnumerable()
                     .GroupBy(p=>p.cliente.ClienteId)
                     .Select(p=>
                     new {Nombre=p.First().cliente.Nombre,
                         Frecuencia=calcularFrecuencia(((IEnumerable<dynamic>)p).ToList())/p.Count(),
                          UltimaCompra= p.Last().factura.Fecha.Value,
                         ProximaCompra =p.Last().factura.Fecha.Value.AddDays(calcularFrecuencia(((IEnumerable<dynamic>)p).ToList()) / p.Count()) 
                     })).ToList();
            }
                return clientes;
        }
        private long calcularFrecuencia(List<dynamic> elements) {
            long frecuencia = 0;
            for (var i=1; i<elements.Count; i++)
            {
                Console.WriteLine(i);
                TimeSpan difFechas = (TimeSpan)(((Models.Factura) (elements[i].factura)).Fecha-((Models.Factura)(elements[i-1].factura)).Fecha);
                frecuencia += difFechas.Days;
            }
            return frecuencia;
        }
    }
}
