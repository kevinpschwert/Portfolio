﻿
using MVCPortfolio.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;


namespace MVCPortfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            EmailModel model = new EmailModel();
            return View(model);
        }

        public ActionResult javascriptexercises()
        {
            return View();
        }

        public ActionResult fizzbuzz()
        {
            return View();
        }

        public ActionResult palindrome()
        {
            return View();
        }

        public ActionResult factorializenumber()
        {
            return View();
        }

        public ActionResult arithmeticexercises()
        {
            return View();
        }

        public ActionResult Muscatello()
        {            
            return View();
        }

        public ActionResult ThankYou()
        {
            return View();
        }

        public ActionResult Quote()
        {
            return View();
        }

        public ActionResult Weather()
        {
            return View();
        }

        public ActionResult Wiki()
        {
            return View();
        }

        public ActionResult Guess()
        {
            return View();
        }

        public ActionResult Time()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Bob(string Time)
        {
            var jim = Time;
            var yes = ViewBag.Yes;
            return RedirectToAction("Muscatello");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var body = "<p>Email From: <bold>{0}</bold>({1})</p><p>Message:</p><p>{2}</p>";
                    var from = "MyPortfolio<antonio@raynor.com>";
                   
                var email = new MailMessage(from,
                 ConfigurationManager.AppSettings["emailto"])
                 {
                     Subject = "Portfolio Contact Email",
                     Body = String.Format(body, model.FromName, model.FromEmail,model.Body),
                    IsBodyHtml = true
                };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);
                    return RedirectToAction("Index", "Home");
                    //return RedirectToAction("Sent");
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);
        }
    }
}