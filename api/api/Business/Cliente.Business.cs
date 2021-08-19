using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Business
{
    public class Cliente
    {
        private Data.Cliente dataCliente=new ();
        public List<Models.Cliente> getClientes(int? clianteId){
            return dataCliente.getCliente(clianteId);
}
        public List<Models.Cliente> getClienteMenores()
        {
            return dataCliente.getClienteMenores();
        }
        public List<dynamic> getFrecuenciaCliente()
        {
            return dataCliente.getFrecuenciaCliente();
        }
    }
}
