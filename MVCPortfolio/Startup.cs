using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVCPortfolio.Startup))]
namespace MVCPortfolio
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
