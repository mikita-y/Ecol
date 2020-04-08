using System.Threading.Tasks;
using Ecol.BLL.CableListService;
using Microsoft.AspNetCore.Mvc;

namespace Ecol.PL.WEB_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CableListController : ControllerBase
    {
        // GET: api/CableList
        private readonly ICableListService _cabelListService;

        public CableListController(ICableListService cabelListService)
        {
            _cabelListService = cabelListService;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] CableListCriterion criterion)
        {
            var result = await _cabelListService.GetCableListAsync(criterion);

            return Ok(result);
        }
    }
}