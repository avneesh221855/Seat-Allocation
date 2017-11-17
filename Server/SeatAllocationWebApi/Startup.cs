using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using SeatAllocationWebApi.Services;
using SeatAllocationWebApi.Repository;
using SeatAllocationWebApi.Model;
using Microsoft.AspNetCore.Routing;

namespace SeatAllocationWebApi
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddDbContext<SeatAllocationSystemDatabase>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            
           
            services.AddSingleton<IBuildingStructureServices, BuildingStructureServices>();
            services.AddSingleton<ILocationStructureServices, LocationStructureServices>();
            services.AddSingleton<IFloorStructureServices, FloorStructureServices>();
            services.AddSingleton<IRequestService, RequestService>();
            services.AddSingleton<ICcCodeServices, CcCodeService>();
            services.AddSingleton<IEntityService, EntityService>();
            services.AddSingleton<IReleaseService, ReleaseService>();
            

            services.AddSingleton<IRequestRepository, RequestRepository>();           
            services.AddSingleton<ILocationStructureRepository, LocationStructureRepository>();          
            services.AddSingleton<IFloorStructureRepository, FloorStructureRepository>();          
            services.AddSingleton<IBuildingStructureRepository, BuildingStructureRepository>();
            services.AddSingleton<ICcCodeRepository, CcCodeRepository>();
            services.AddSingleton<IEntityRepository, EntityRepository>();
            services.AddSingleton<IReleaseRepository, ReleaseRepository>();


            services.AddMvc()
              .AddJsonOptions(
                    options => options.SerializerSettings.ReferenceLoopHandling
                        = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddMvc();
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().AllowCredentials());
            app.UseMvc();
        }
        private void ConfigureRoutes(IRouteBuilder obj)
        {
            obj.MapRoute("default", "{controller}/{action?}/{id?}");
            //obj.MapRoute()

        }
    }
}
