using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace usersAPI.Models
{
    //create the database
    public class Candidate
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName ="nvarchar(100)")]
        public string name { get; set; }

        [Column(TypeName = "nvarchar(25)")]
        public string mobile { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

        public int age { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string bloodGroup { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string adress { get; set; }

    }
}
