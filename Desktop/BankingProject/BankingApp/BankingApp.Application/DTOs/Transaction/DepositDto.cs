namespace BankingApp.Application.DTOs.Transaction
{
    public class DepositDto
    {
        public string AccountNumber { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string? Description { get; set; }
    }
}
