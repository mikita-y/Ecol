using System.Linq;

namespace Ecol.BLL.Pagination
{
    static class PaginationHelper
    {
        public static IQueryable<T> GetPage<T>(this IQueryable<T> items, int pageNumber, int PageSize)
        {
            return items.Skip(pageNumber * PageSize).Take(PageSize);
        }

        public static IQueryable<T> GetPage<T>(this IQueryable<T> items, int pageNumber, int PageSize, out int pageCount)
        {
            pageCount = items.Count() / PageSize;

            if(items.Count() % PageSize != 0)
            {
                pageCount++;
            }

            int skip;

            if(pageNumber == 0)
            {
                skip = 0;
            }
            else
            {
                skip = pageNumber * PageSize - 1;
            }

            return items.Skip(skip).Take(PageSize);
        }
    }
}
