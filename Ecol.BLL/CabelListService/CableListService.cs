using Ecol.BLL.CabelListService.DTO;
using Ecol.DAL.Entities;
using Ecol.DAL.Repository;
using System.Linq;
using System.Threading.Tasks;

namespace Ecol.BLL.CabelListService
{
    public class CableListService: ICableListService
    {
        private readonly IRepository<Cable> _repository;

        public CableListService(IRepository<Cable> repository)
        {
            _repository = repository;
        }

        public async Task<CableListDTO> GetCableListAsync(SortingCriterion criterion)
        {
            var cabels = _repository.GetAll();

            var criterionSetting = new CriterionSetting()
            {
                MarkingList = cabels.Select(x => x.Marking).Distinct().ToArray(),
                AdditionalMarkingList = cabels.Select(x => x.AdditionalMarking).Distinct().ToArray(),
                PairsNumberList = cabels.Select(x => x.PairsNumber).Distinct().ToArray(),
                SectionList = cabels.Select(x => x.Section).Distinct().ToArray(),
            };

            await Task.Run(() =>
            {
                if (!string.IsNullOrEmpty(criterion.Marking))
                    cabels = cabels.Where(x => x.Marking.Equals(criterion.Marking));
                if (!string.IsNullOrEmpty(criterion.AdditionalMarking))
                    cabels = cabels.Where(x => x.AdditionalMarking.Equals(criterion.AdditionalMarking));
                if (criterion.Performance != null)
                    cabels = cabels.Where(x => x.Performance == criterion.Performance);
                if (criterion.Section != null)
                    cabels = cabels.Where(x => x.Section == criterion.Section);
                if (criterion.PairsNumber != null)
                    cabels = cabels.Where(x => x.PairsNumber == criterion.PairsNumber);
                if (criterion.Twist != null)
                    cabels = cabels.Where(x => x.Twist == criterion.Twist);
            });

            return new CableListDTO() { CableList = cabels, CriterionSetting = criterionSetting };
        }
    }
}
