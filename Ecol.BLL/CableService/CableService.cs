using Ecol.BLL.Result;
using Ecol.DAL.Context;
using Ecol.DAL.Entities;
using System;
using System.Threading.Tasks;

namespace Ecol.BLL.CableService
{
    public class CableService : ICableService
    {
        private readonly EcolDbContext _db;

        public CableService(EcolDbContext db)
        {
            _db = db;
        }

        public async Task<OperationDetails> CreateCabelAsync(Cable cabel)
        {
            await _db.AddAsync(cabel);
            return await Save();
        }

        public async Task<OperationDetails> DeleteCabelByIdAsync(int id)
        {
            var cabel = await _db.Cabels.FindAsync(id);

            if (cabel == null)
            {
                return new OperationDetails(false, "Item not found");
            }

            _db.Cabels.Remove(cabel);
            return await Save();
        }

        public async Task<Cable> GetCabelByIdAsync(int id)
        {
            return await _db.Cabels.FindAsync(id);
        }

        public async Task<OperationDetails> UpdateCabelAsync(Cable cabel)
        {
            _db.Cabels.Update(cabel);
            return await Save();
        }

        private async Task<OperationDetails> Save()
        {
            try
            {
                await _db.SaveChangesAsync();
                return new OperationDetails(true);
            }
            catch (Exception e)
            {
                return new OperationDetails(false, e.Message);
            }
        }
    }
}
