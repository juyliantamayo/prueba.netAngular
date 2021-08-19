using System;
using System.Collections.Generic;

#nullable disable

namespace api.Models
{
    public partial class Factura
    {
        public int FacturaId { get; set; }
        public DateTime? Fecha { get; set; }
        public int ClienteId { get; set; }

        public virtual Cliente Cliente { get; set; }
    }
}
