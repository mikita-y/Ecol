namespace Ecol.BLL.Result
{
    public class OperationDetails
    {
        public bool IsSuccess { get; set; }
        public string Description { get; set; }

        public OperationDetails(bool success, string description = null)
        {
            IsSuccess = success;
            Description = description;
        }
    }
}
