using System.Threading.Tasks;
using Ecol.BLL.CableListService;
using Ecol.DAL.Entities;
using Ecol.DAL.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ecol.PL.WEB_API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CableController : ControllerBase
    {
        private readonly IRepository<Cable> _repository;
        private readonly ICableListService _cabelListService;
        public CableController(IRepository<Cable> repository, ICableListService cabelListService)
        {
            _repository = repository;
            _cabelListService = cabelListService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _cabelListService.GetCableListAsync(new CableListCriterion());

            return Ok(result);
        }

        // GET: api/Cable/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var cabel = await _repository.GetByIdAsync(id);

            if(cabel == null)
            {
                return NotFound();
            }

            return Ok(cabel);
        }

        // POST: api/Cable
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Cable cabel)
        {
            await _repository.CreateAsync(cabel);
            return Ok();
        }

        // PUT: api/Cable/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] string value)
        {
            return BadRequest();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.DeleteByIdAsync(id);
            return Ok();
        }
    }
}
