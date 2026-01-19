## Hitech email sender
A lightweigh Node.js utility for sending emails via Gmail SMTP using Nodemailer. Perfect for notifications,alerts, and transcation emails in your full stack apps
# ✨ Features
  - Gmail SMTP integration with secure TLS
  - Configurable timeouts for reliable delivery
  - HTML and plain text email support which you can modify for your needs
  - Environment variable-based credentials
  - Async/await error handling
  - Malawi timezon formatting (en-MW)
# 📦 Installation
 - Bash
   1. Npm init -y
   2. npm install nodemailer dotenv
# 🔧 Setup
  1. Create a .env file in your project root:
       EMAIL_USER=yourgmail@gmail.com
       EMAIL_PASS=your_app_password (use GMAIL App password (not your regular password)
       EMAIL_SENDER=recipient@example.com

  2. Save your emailSender.js or App.js which ever way you may call it
# 🚀 Usage
  ## Basic Email
  <img width="639" height="297" alt="image" src="https://github.com/user-attachments/assets/264a3220-003a-4e2a-8802-8bb3b4c10404" />
# Test Email (IIFE)
  Run using nodemon or just node emailSender.js
# ⚙️Configuration Options
  | Property | Default | Description |
  | host | smtp.gmail.com |SMTP server |
  | port | 587 |STARTTTLS port |
  | secure | false |Use TLS |
  | connectionTimeout | 10000ms |Connection timeout |
  | socketTimeout | 10000ms |Socket timeout |
# 🛠️ Customization
  <img width="797" height="306" alt="image" src="https://github.com/user-attachments/assets/a894ae03-c2d8-4b8c-9651-8d860c1d8195" />
# ✅ Testing
   <img width="887" height="228" alt="image" src="https://github.com/user-attachments/assets/49ec35ed-0680-461a-9a75-787c4d8eb63f" />
# Security Notes
  - ✅ Uses App Password (not regular Gmail password)
  - ✅ TLS with rejectUnauthorized: false for self-signed certs
  - ✅ Environment variables for credentials
  - ✅ Configurable timeouts prevent hanging
# 🚫 Troubleshooting
  | Issues | solution |
  | 535-5.7.8 | Enable 2FA + App password |
  | Connection timeout | Check firewall/VPN |
  | Invalid login | Verify .env credentials |
  | Emails in spam | Add DKIM/SPF (Gmail auto-handles) |

   
     
     

 
