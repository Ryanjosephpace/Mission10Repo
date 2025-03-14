namespace Mission10Assignment.Models
{
    public class Bowler
    {
        public int BowlerID { get; set; }
        public string BowlerFirstName { get; set; } = string.Empty;
        public string? BowlerMiddleInit { get; set; } // ✅ Allow NULL values
        public string BowlerLastName { get; set; } = string.Empty;
        public int TeamID { get; set; }
        public string? BowlerAddress { get; set; } // ✅ Allow NULL values
        public string? BowlerCity { get; set; } // ✅ Allow NULL values
        public string? BowlerState { get; set; } // ✅ Allow NULL values
        public string? BowlerZip { get; set; } // ✅ Allow NULL values
        public string? BowlerPhoneNumber { get; set; } // ✅ Allow NULL values
    }

}

