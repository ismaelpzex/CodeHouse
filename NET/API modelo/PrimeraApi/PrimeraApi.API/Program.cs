using Microsoft.EntityFrameworkCore;
using PrimeraApi.CrossCutting.Configuration;
using PrimeraApi.DataAccess;

var builder = WebApplication.CreateBuilder(args);

IoC.Register(builder.Services, builder.Configuration);

string mySqlConnectionStr = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<ApplicationDbContext>(
item => item.UseMySql(
mySqlConnectionStr,
ServerVersion.AutoDetect(mySqlConnectionStr)
));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

