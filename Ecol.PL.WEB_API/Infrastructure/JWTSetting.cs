namespace Ecol.PL.WEB_API.Infrastructure
{
    public class JWTSetting
    {
        //public string Issuer { get; set; }
        //public string Audience { get; set; }
        public string SecretKey { get; set; }
        public int LifeTime { get; set; }
        
    }
}
