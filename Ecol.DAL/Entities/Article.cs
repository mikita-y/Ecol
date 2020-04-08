using System;

namespace Ecol.DAL.Entities
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string PhotoUrl { get; set; }
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
