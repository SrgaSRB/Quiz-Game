using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using QuizService.Aplication.DTOs.Auth;
using QuizService.Aplication.Interfaces.Security;
using QuizService.Aplication.Interfaces.Services.Auth;
using QuizService.Aplication.Services;
using QuizService.Infrastructure.Auth;
using QuizService.Infrastructure.Data;
using System.Text;
using Microsoft.EntityFrameworkCore;
using QuizService.Aplication.Interfaces.Repositories;
using QuizService.Infrastructure.Repositories;
using Microsoft.OpenApi.Models;
using QuizService.Aplication.Interfaces.Services;

var builder = WebApplication.CreateBuilder(args);

var allowedOrigins = new[] { "https://localhost:3000", "http://localhost:3000" };

builder.Services.AddCors(options =>
{
    options.AddPolicy("FrontendDev", policy =>
    {
        policy
            .WithOrigins(allowedOrigins)   // front
            .AllowAnyHeader()              
            .AllowAnyMethod();             // GET, POST, PUT, DELETE, OPTIONS
                                           // .AllowCredentials(); in future if switch to coocies auth
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer(); // Add this line
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "QuizService API", Version = "v1" });
});

builder.Services.AddHttpContextAccessor();

builder.Services.Configure<JwtOptionsDTO>(builder.Configuration.GetSection("Jwt"));
builder.Services.AddSingleton<IJwtGenerator, JwtGenerator>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IUserReposotory, UserRepository>();
builder.Services.AddScoped<IQuizService, QuizService.Aplication.Services.QuizService>();
builder.Services.AddScoped<IQuizReposotory, QuizRepository>();
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ICategoryService, CategoryService>();

builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


var jwtSection = builder.Configuration.GetSection("Jwt");
var jwtSettings = jwtSection.Get<JwtOptionsDTO>();

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = jwtSettings.Issuer,

            ValidateAudience = true,
            ValidAudience = jwtSettings.Audience,

            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SigningKey)),

            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero,
        };
    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();

    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "QuizService API v1");
        options.RoutePrefix = string.Empty; // Set Swagger UI at the app's root
    });
}

app.UseHttpsRedirection();

app.UseCors("FrontendDev");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
