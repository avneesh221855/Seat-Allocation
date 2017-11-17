using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SeatAllocationWebApi.Migrations
{
    public partial class @new : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ApprovingAuthority",
                columns: table => new
                {
                    EmpCode = table.Column<string>(nullable: false),
                    EmpName = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true, defaultValue: "active")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ApprovingAuthority", x => x.EmpCode);
                });

            migrationBuilder.CreateTable(
                name: "CcCodes",
                columns: table => new
                {
                    CcCodeId = table.Column<string>(nullable: false),
                    Status = table.Column<string>(nullable: true, defaultValue: "active")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CcCodes", x => x.CcCodeId);
                });

            migrationBuilder.CreateTable(
                name: "Entites",
                columns: table => new
                {
                    EntityId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    EntityName = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true, defaultValue: "active")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entites", x => x.EntityId);
                });

            migrationBuilder.CreateTable(
                name: "LocationStructures",
                columns: table => new
                {
                    LocationCode = table.Column<string>(nullable: false),
                    CsoOwner = table.Column<int>(nullable: false),
                    CsoOwnerName = table.Column<string>(nullable: true),
                    LocationName = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true, defaultValue: "deactive")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LocationStructures", x => x.LocationCode);
                });

            migrationBuilder.CreateTable(
                name: "MasterLogs",
                columns: table => new
                {
                    Logid = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ActionTaken = table.Column<string>(nullable: true),
                    ChangeBy = table.Column<string>(nullable: true),
                    Modify = table.Column<string>(nullable: true),
                    NoChanged = table.Column<int>(nullable: false),
                    OnDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MasterLogs", x => x.Logid);
                });

            migrationBuilder.CreateTable(
                name: "MonthlyReports",
                columns: table => new
                {
                    ReportId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AbvSeats = table.Column<int>(nullable: false),
                    CcCode = table.Column<int>(nullable: false),
                    ClosedAllocatedSeats = table.Column<int>(nullable: false),
                    FloorCode = table.Column<int>(nullable: false),
                    OpenAllocatedSeats = table.Column<int>(nullable: false),
                    OpenVacantSeats = table.Column<int>(nullable: false),
                    SnapShotDate = table.Column<DateTime>(nullable: false),
                    TotalSeats = table.Column<int>(nullable: false),
                    TotalVacantSeats = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MonthlyReports", x => x.ReportId);
                });

            migrationBuilder.CreateTable(
                name: "BuildingStructures",
                columns: table => new
                {
                    BuildingCode = table.Column<string>(nullable: false),
                    BuildingName = table.Column<string>(nullable: true),
                    LocationCode = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true, defaultValue: "deactive")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BuildingStructures", x => x.BuildingCode);
                    table.ForeignKey(
                        name: "FK_BuildingStructures_LocationStructures_LocationCode",
                        column: x => x.LocationCode,
                        principalTable: "LocationStructures",
                        principalColumn: "LocationCode",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FloorStructures",
                columns: table => new
                {
                    FloorCode = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AbvSeats = table.Column<int>(nullable: false),
                    BuildingCode = table.Column<string>(nullable: true),
                    ClosedAllocatedSeats = table.Column<int>(nullable: false),
                    FloorName = table.Column<string>(nullable: true),
                    OpenAllocatedSeats = table.Column<int>(nullable: false),
                    OpenVacantSeats = table.Column<int>(nullable: false),
                    Status = table.Column<string>(nullable: true, defaultValue: "deactive"),
                    TotalSeats = table.Column<int>(nullable: false),
                    TotalVacantSeats = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FloorStructures", x => x.FloorCode);
                    table.ForeignKey(
                        name: "FK_FloorStructures_BuildingStructures_BuildingCode",
                        column: x => x.BuildingCode,
                        principalTable: "BuildingStructures",
                        principalColumn: "BuildingCode",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Requests",
                columns: table => new
                {
                    RequestId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ApprovedOn = table.Column<DateTime>(nullable: false),
                    BuildingCode = table.Column<string>(nullable: true),
                    CcCode = table.Column<string>(nullable: true),
                    CurrentAllocatedseats = table.Column<int>(nullable: false),
                    EmpCode = table.Column<string>(nullable: true),
                    Entity = table.Column<string>(nullable: true),
                    FloorCode = table.Column<int>(nullable: false),
                    Justification = table.Column<string>(nullable: true),
                    LocationCode = table.Column<string>(nullable: true),
                    NoOfseats = table.Column<int>(nullable: false),
                    RequestedBy = table.Column<string>(nullable: true),
                    RequestedOn = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()"),
                    Status = table.Column<string>(nullable: true, defaultValue: "pending"),
                    ToDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Requests", x => x.RequestId);
                    table.ForeignKey(
                        name: "FK_Requests_FloorStructures_FloorCode",
                        column: x => x.FloorCode,
                        principalTable: "FloorStructures",
                        principalColumn: "FloorCode",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RequestReleases",
                columns: table => new
                {
                    ReleaseId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    NoOfseatsReleased = table.Column<int>(nullable: false),
                    ReleasedOn = table.Column<DateTime>(nullable: false, defaultValueSql: "getdate()"),
                    RequestId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RequestReleases", x => x.ReleaseId);
                    table.ForeignKey(
                        name: "FK_RequestReleases_Requests_RequestId",
                        column: x => x.RequestId,
                        principalTable: "Requests",
                        principalColumn: "RequestId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_BuildingStructures_LocationCode",
                table: "BuildingStructures",
                column: "LocationCode");

            migrationBuilder.CreateIndex(
                name: "IX_FloorStructures_BuildingCode",
                table: "FloorStructures",
                column: "BuildingCode");

            migrationBuilder.CreateIndex(
                name: "IX_Requests_FloorCode",
                table: "Requests",
                column: "FloorCode");

            migrationBuilder.CreateIndex(
                name: "IX_RequestReleases_RequestId",
                table: "RequestReleases",
                column: "RequestId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ApprovingAuthority");

            migrationBuilder.DropTable(
                name: "CcCodes");

            migrationBuilder.DropTable(
                name: "Entites");

            migrationBuilder.DropTable(
                name: "MasterLogs");

            migrationBuilder.DropTable(
                name: "MonthlyReports");

            migrationBuilder.DropTable(
                name: "RequestReleases");

            migrationBuilder.DropTable(
                name: "Requests");

            migrationBuilder.DropTable(
                name: "FloorStructures");

            migrationBuilder.DropTable(
                name: "BuildingStructures");

            migrationBuilder.DropTable(
                name: "LocationStructures");
        }
    }
}
