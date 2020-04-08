namespace Ecol.DAL.Entities
{
    public class Administrator
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Login { get; set; }
        public string PasswordHash { get; set; }
    }
}
