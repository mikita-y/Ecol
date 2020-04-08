using System.Threading.Tasks;
using Ecol.BLL.CabelListService;
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
        public async Task<IActionResult> Get([FromQuery] SortingCriterion criterion)
        {
            var result = await _cabelListService.GetCableListAsync(criterion);

            return Ok(result);
        }
    }
}