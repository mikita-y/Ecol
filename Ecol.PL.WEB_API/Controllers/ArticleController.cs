using System.Linq;
using System.Threading.Tasks;
using Ecol.DAL.Entities;
using Ecol.DAL.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ecol.PL.WEB_API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IRepository<Article> _repository;
        public ArticleController(IRepository<Article> repository)
        {
            _repository = repository;
        }

        // GET: api/Article
        [AllowAnonymous]
        [HttpGet]
        public IActionResult Get()
        {
            var articles = _repository.GetAll().ToList();
            return Ok(articles);
        }

        // GET: api/Article/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var article = await _repository.GetByIdAsync(id);
            
            if(article == null)
            {
                return NotFound();
            }

            return Ok(article);
        }

        // POST: api/Article
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Article article)
        {
            await _repository.CreateAsync(article);
            return Ok();
        }

        // PUT: api/Article/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] Article article)
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
