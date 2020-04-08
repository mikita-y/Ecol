using System.Linq;

namespace Ecol.BLL.Common
{
    static class PaginationHelper
    {
        public static IQueryable<T> GetPage<T>(this IQueryable<T> items, int pageNumber, int PageSize)
        {
            var pageCount = items.Count() / PageSize;

            if(items.Count() % PageSize != 0)
            {
                pageCount++;
            }

            return items.Skip(pageNumber * PageSize).Take(PageSize);
        }
    }
}
