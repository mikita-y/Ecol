using System.Linq;
using System.Threading.Tasks;
using Ecol.DAL.Repository;
using Ecol.DAL.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Ecol.PL.WEB_API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IRepository<UserMessage> _repository;
        public MessageController(IRepository<UserMessage> repository)
        {
            _repository = repository;
        }

        // GET: api/Message
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(_repository.GetAll().ToList());
        }

        // GET: api/Message/5
        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            var item = await _repository.GetByIdAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UserMessage message)
        {
            
            message.CreationDate = DateTime.UtcNow;
            await _repository.CreateAsync(message);

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteByIdAsync(id);

            return Ok();
        }
    }
}