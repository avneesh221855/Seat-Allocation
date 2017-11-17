using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeatAllocationWebApi.Model
{
    public class SeatAllocationSystemDatabase :DbContext
    {
        public SeatAllocationSystemDatabase(DbContextOptions options) :base(options)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Request>()
                .Property(r => r.RequestedOn)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<RequestRelease>()
                .Property(r => r.ReleasedOn)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<ApprovingAuthority>()
                .Property(a => a.Status)
                .HasDefaultValue("active");

            modelBuilder.Entity<BuildingStructure>()
                .Property(b => b.Status)
                .HasDefaultValue("deactive");

            modelBuilder.Entity<CcCode>()
               .Property(c => c.Status)
               .HasDefaultValue("active");

            modelBuilder.Entity<Entity>()
               .Property(c => c.Status)
               .HasDefaultValue("active");

            modelBuilder.Entity<FloorStructure>()
               .Property(c => c.Status)
               .HasDefaultValue("deactive");

            modelBuilder.Entity<LocationStructure>()
               .Property(c => c.Status)
               .HasDefaultValue("deactive");

            modelBuilder.Entity<Request>()
               .Property(c => c.Status)
               .HasDefaultValue("pending");

        }

        public DbSet<BuildingStructure> BuildingStructures { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<LocationStructure> LocationStructures { get; set; }
        public DbSet<FloorStructure> FloorStructures { get; set; }
        
        public DbSet<ApprovingAuthority> ApprovingAuthority { get; set; }
        public DbSet<MasterLog> MasterLogs { get; set; }
        public DbSet<CcCode> CcCodes { get; set; }
        public DbSet<Entity> Entites { get; set; }
        public DbSet<MonthlyReport> MonthlyReports { get; set; }

        public DbSet<RequestRelease> RequestReleases { get; set; }

    }
}
 