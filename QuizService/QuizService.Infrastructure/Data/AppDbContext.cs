using Microsoft.EntityFrameworkCore;
using QuizService.Domain.Enums;
using QuizService.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace QuizService.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // DbSets
        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<QuizAttempt> QuizAttempts { get; set; }
        public DbSet<UserAnswer> UserAnswers { get; set; }
        public DbSet<UserAnswerSelection> UserAnswerSelections { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            // 1. Unique constraints 
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // 2. Many-to-Many 
            modelBuilder.Entity<UserAnswerSelection>()
                .HasIndex(uas => new { uas.UserAnswerId, uas.AnswerId })
                .IsUnique();

            // 3. If parent have children, delete is disabled
            modelBuilder.Entity<Quiz>(entity =>
            {
                // Category - RESTRICT delete
                entity.HasOne(q => q.Category)
                    .WithMany(c => c.Quizzes)
                    .HasForeignKey(q => q.CategoryId)
                    .OnDelete(DeleteBehavior.Restrict);

                // CreatedBy User - RESTRICT delete
                entity.HasOne(q => q.CreatedBy)
                    .WithMany()
                    .HasForeignKey(q => q.CreatedByUserId)
                    .OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<QuizAttempt>()
                .HasOne(qa => qa.User)
                .WithMany(u => u.QuizAttempts)
                .HasForeignKey(qa => qa.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserAnswer>()
                .HasOne(ua => ua.Question)
                .WithMany(q => q.UserAnswers)
                .HasForeignKey(ua => ua.QuestionId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<UserAnswerSelection>(entity =>
            {
                // UserAnswerSelection -> UserAnswer: CASCADE
                entity.HasOne(uas => uas.UserAnswer)
                    .WithMany(ua => ua.UserAnswerSelections)
                    .HasForeignKey(uas => uas.UserAnswerId)
                    .OnDelete(DeleteBehavior.Cascade);

                // UserAnswerSelection -> Answer: RESTRICT (sprečava circular cascade)
                entity.HasOne(uas => uas.Answer)
                    .WithMany()
                    .HasForeignKey(uas => uas.AnswerId)
                    .OnDelete(DeleteBehavior.Restrict);
            });


            // 4. Enum konverzija
            /*
            modelBuilder.Entity<User>()
                .Property(u => u.Role)
                .HasConversion<string>();

            modelBuilder.Entity<Question>()
                .Property(q => q.Type)
                .HasConversion<string>();
            */

            modelBuilder.Entity<QuizAttempt>()
                .Property(qa => qa.Percentage)
                .HasPrecision(5, 2); // 100.00%

            // Maybe in future for soft delete
            //modelBuilder.Entity<User>().HasQueryFilter(u => !u.IsDeleted);
            //modelBuilder.Entity<Category>().HasQueryFilter(c => !c.IsDeleted);
            //modelBuilder.Entity<Quiz>().HasQueryFilter(q => !q.IsDeleted);
            //modelBuilder.Entity<Question>().HasQueryFilter(q => !q.IsDeleted);
            //modelBuilder.Entity<Answer>().HasQueryFilter(a => !a.IsDeleted);
            //modelBuilder.Entity<QuizAttempt>().HasQueryFilter(qa => !qa.IsDeleted);
            //modelBuilder.Entity<UserAnswer>().HasQueryFilter(ua => !ua.IsDeleted);
            //modelBuilder.Entity<UserAnswerSelection>().HasQueryFilter(uas => !uas.IsDeleted);
        }
    }
}



