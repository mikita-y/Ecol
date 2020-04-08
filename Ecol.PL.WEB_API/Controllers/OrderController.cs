using Ecol.DAL.Entities;
using Ecol.DAL.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace Ecol.PL.WEB_API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IRepository<Order> _repository;
        public OrderController(IRepository<Order> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(_repository.GetAll());
        }

        [HttpGet]
        public async Task<IActionResult> Get(int id)
        {
            var order = await _repository.GetByIdAsync(id);

            if(order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Order order)
        {
            await _repository.CreateAsync(order);

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] string value)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteByIdAsync(id);

            return Ok();
        }
    }
}

