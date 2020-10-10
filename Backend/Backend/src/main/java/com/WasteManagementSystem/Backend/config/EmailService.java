package com.WasteManagementSystem.Backend.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;


import com.sendgrid.helpers.mail.objects.Content;


import com.sendgrid.helpers.mail.objects.Content;

//import com.sendgrid.helpers.mail.objects.Content;

import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;

@Service
public class EmailService {

	@Value("${app.sendgrid.templateId}")
	private String templateId;
	
//	@Autowired
//	SendGrid sendGrid;

//	@Value("${app.sendgrid.templateId}")
//	private String templateId;
	
	@Autowired
	SendGrid sendGrid;
	Content content;

	
	public String sendEmail(String email) {
		try {
			Mail mail = prepareMail(email);
			Request request = new Request();
			request.setMethod(Method.POST);
			request.setEndpoint("mail/send");
			request.setBody(mail.build());
			Response response = sendGrid.api(request);
			if(response!=null) {
				System.out.println("response code from sendgrid" + response.getHeaders());
			}
		} catch(IOException e) {
			e.printStackTrace();
			return "Error in sent";
		}
		return "Mail has been sent check your email!";
	}
	
	public Mail prepareMail(String email) {
		Mail mail = new Mail();
		Email fromEmail = new Email();
		fromEmail.setEmail("ssakunchamikara@gmail.com");
		
		Email to = new Email();
		to.setEmail(email);
		

		Content content = new Content("text/plain", "and easy to do anywhere, even with Java");

		String subject = "Sending with SendGrid is Fun";
		
		Personalization personalization = new Personalization();
		
		personalization.addTo(to);
		mail.addContent(content);
//		mail.setTemplateId(templateId);
		mail.setFrom(fromEmail);
		mail.setSubject(subject);
		mail.addPersonalization(personalization);
		
		return mail;
	}


	public void setcontent(String c) {
		content = new Content("text/plain", c);
		
	}

}
