using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class Producto
    {
        public int ProductoId { get; set; }
        public string Nombre { get; set; }
        public int Cantidad { get; set; }
        public int Valor { get; set; }
    }
}
