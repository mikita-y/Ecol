using System;
using System.ComponentModel.DataAnnotations;

namespace Ecol.DAL.Entities
{
    public class UserMessage
    {
        public int Id { get; set; }

        [EmailAddress(ErrorMessage = "Некорректный email адрес.")]
        public string UserEmail { get; set; }

        [StringLength(100, ErrorMessage = "Длина строки должна быть до 100 символов.")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Отсутствует текст сообщения.")]
        public string Text { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
