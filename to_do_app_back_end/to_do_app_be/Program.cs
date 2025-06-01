using System.ComponentModel.Design.Serialization;
using System.IO;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();



app.MapGet("/Creat_task/{NAME}", (String NAME) =>
{
    Console.WriteLine(NAME);
    var data_r = new StreamReader("data.txt");
    String data = data_r.ReadToEnd();
        data_r.Close();
    data +=data==""? $"\"{NAME}\"":$",\"{NAME}\"";

   var data_w = new StreamWriter("data.txt");
    data_w.Write(data);
    data_w.Close();
    return Results.Ok();
});
app.MapGet("/List_task", () =>
{
    var data_r = new StreamReader("data.txt");
        String data = data_r.ReadToEnd();

        data_r.Close();
    return ("{[" +data+ "]}");
});

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
