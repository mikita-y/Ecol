using Ecol.BLL.CableListService.DTO;
using Ecol.BLL.Pagination;
using Ecol.DAL.Entities;
using Ecol.DAL.Repository;
using System.Linq;
using System.Threading.Tasks;

namespace Ecol.BLL.CableListService
{
    public class CableListService: ICableListService
    {
        private readonly IRepository<Cable> _repository;

        public CableListService(IRepository<Cable> repository)
        {
            _repository = repository;
        }

        public async Task<CableListDTO> GetCableListAsync(CableListCriterion criterion)
        {
            var cables = _repository.GetAll();

            var criterionSetting = new CriterionSetting()
            {
                MarkingList = cables.Select(x => x.Marking).Distinct().ToArray(),
                AdditionalMarkingList = cables.Select(x => x.AdditionalMarking).Distinct().ToArray(),
                PairsNumberList = cables.Select(x => x.PairsNumber).Distinct().ToArray(),
                SectionList = cables.Select(x => x.Section).Distinct().ToArray(),
            };

            var pageSetting = new PageSetting();

            await Task.Run(() =>
            {
                if (!string.IsNullOrEmpty(criterion.Marking))
                    cables = cables.Where(x => x.Marking.Equals(criterion.Marking));
                if (!string.IsNullOrEmpty(criterion.AdditionalMarking))
                    cables = cables.Where(x => x.AdditionalMarking.Equals(criterion.AdditionalMarking));
                if (criterion.Performance != null)
                    cables = cables.Where(x => x.Performance == criterion.Performance);
                if (criterion.Section != null)
                    cables = cables.Where(x => x.Section == criterion.Section);
                if (criterion.PairsNumber != null)
                    cables = cables.Where(x => x.PairsNumber == criterion.PairsNumber);
                if (criterion.Twist != null)
                    cables = cables.Where(x => x.Twist == criterion.Twist);
                if(criterion.PageSize > 0)
                {
                    int pageCount;
                    cables = cables.GetPage(criterion.PageNumber, criterion.PageSize, out pageCount);
                    pageSetting.CurrentPage = criterion.PageNumber;
                    pageSetting.PageCount = pageCount;
                }
            });

            return new CableListDTO() { 
                CableList = cables, 
                CriterionSetting = criterionSetting, 
                PageSetting = pageSetting 
            };
        }
    }
}
