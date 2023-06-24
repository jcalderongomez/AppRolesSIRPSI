using Backend.AccesoDatos.Repositorio;
using Backend.API.AccesoDatos.Data;
using Backend.API.AccesoDatos.Repositorio;
using Backend.API.AccesoDatos.Repositorio.IRepositorio;
using Backend.API.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(
                        builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddScoped<IUnidadTrabajo, UnidadTrabajo>();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                System.Text.Encoding.ASCII.GetBytes(
                    builder.Configuration.GetSection("AppSettings:Token").Value)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });



builder.Services.AddSwaggerGen(c => {
    c.OperationFilter<SecurityRequirementsOperationFilter>();
    c.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Autorizacion Standar, Usar Bearer. Ejemplo \"bearer {token}\"",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
});

builder.Services.AddCors();
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

app.UseCors(x => x.AllowAnyOrigin()
                .AllowAnyMethod().
                AllowAnyHeader());
app.MapControllers();

app.Run();
