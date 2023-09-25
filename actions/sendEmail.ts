'use server';
import React from 'react';
import { getErrorMessage, validateString } from "@/lib/utils";
import {Resend} from "resend";
import contactFormEmail from '@/components/Contact/ContactFormEmail';


const resend = new Resend(process.env.RESEND_API_KEY );

export const sendEmail=async (formData:FormData) => {
    //going to use third party app 'RESEND' for sending emails
    const senderEmail=formData.get("senderEmail");
    const message=formData.get("message");
    
    //simple server side validation
     if(!validateString(senderEmail,500)){
        return {
            error: "Invalid sender email"
        }
     }
     if(!validateString(message,5000)){
        return {
            error: "Invalid message"
        }
     } 
     let data;
 
      try{

          await resend.emails.send({
              from:'Chatmate Form <onboarding@resend.dev>',
              to:'gautamsodhi88@gmail.com',
              subject:'Message from ChatMate contact form',
              reply_to:senderEmail as string,
              //text:message as string,
              react: React.createElement(contactFormEmail,{
                message: message as string,
                senderEmail:senderEmail as string
            }),
            });
        } catch(error:unknown){
            return{ 
                error: getErrorMessage(error)
            };
        }
        return {
            data,
        }
  };