# Environment Variables Setup

Create a `.env` file in the root directory with the following variables:

```env
# Base44 API Configuration
VITE_BASE44_API_KEY=your_base44_api_key_here
VITE_BASE44_PROJECT_ID=your_base44_project_id_here
VITE_BASE44_API_URL=https://api.base44.com

# Application Configuration
VITE_APP_NAME=Mzansi Prolife Development Institute NPC
VITE_APP_URL=http://localhost:5173

# Email Configuration (if using email service)
VITE_EMAIL_SERVICE_API_KEY=your_email_service_api_key

# WhatsApp Integration (if using WhatsApp API)
VITE_WHATSAPP_API_KEY=your_whatsapp_api_key
VITE_WHATSAPP_PHONE_NUMBER=27737353200

# Environment
NODE_ENV=development
```

## How to Use

1. Copy this content to a new file named `.env` in the root directory
2. Replace placeholder values with your actual credentials
3. Never commit `.env` to version control (it's in .gitignore)

