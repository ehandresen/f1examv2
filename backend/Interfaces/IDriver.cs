namespace backend.Interfaces;

// A Driver should have the following information:
// - Id, Name, Age, Nationality, Image (of person)

public interface IDriver
{
    int Id { get; set; }
    string? Name { get; set; }
    int Age { get; set; }
    string? Nationality { get; set; }
    string? Image { get; set; }
}