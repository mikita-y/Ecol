using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Ecol.BLL.AuthenticationService;
using Ecol.PL.WEB_API.Infrastructure;
using Ecol.PL.WEB_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Ecol.PL.WEB_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : Controller
    {
        private readonly IAuthenticationService _authService;
        private readonly JWTSetting _jwtSetting;

        public AuthenticationController(IAuthenticationService authService,
            IOptions<JWTSetting> jwtSetting)
        {
            _authService = authService;
            _jwtSetting = jwtSetting.Value;
        }

        // POST: api/Authentication
        [HttpPost]
        [Route("api/signin")]
        public async Task<IActionResult> SignIn(SignInModel user)
        {
            var result = await _authService.CheckPasswordAsync(user.Login, user.Password);

            if (!result.IsSuccess)
            {
                return BadRequest(result.Description);
            }

            var encodedJwt = GetToken(user.Login);

            var response = new
            {
                access_token = encodedJwt,
            };

            return Ok(response);
        }

        private string GetToken(string username)
        {
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_jwtSetting.SecretKey));

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Expires = DateTime.UtcNow.AddMinutes(_jwtSetting.LifeTime),
                Subject = new ClaimsIdentity(new List<Claim> {
                new Claim(ClaimTypes.Name, username)
                }),
                SigningCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature)
            };
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var jwtToken = jwtTokenHandler.CreateToken(tokenDescriptor);
            var token = jwtTokenHandler.WriteToken(jwtToken);
            return token;
        }
    }
}
