#!/bin/bash
# 🌐 سكريبت النشر على الإنترنت

echo "🚀 دليل النشر على الإنترنت"
echo "============================="

# معلومات الخيارات
echo ""
echo "اختر خدمة النشر:"
echo "1. نشر على Heroku (الخادم)"
echo "2. نشر على Vercel (واجهة العميل)"
echo "3. نشر على GitHub Pages (للصفحات الثابتة)"
echo "4. نشر يدوي على AWS/DigitalOcean"
read -p "اختيارك (1-4): " choice

case $choice in
    1)
        echo "🚀 نشر الخادم على Heroku"
        echo ""
        echo "تأكد من:"
        echo "✅ لديك حساب Heroku (https://www.heroku.com)"
        echo "✅ تثبيت Heroku CLI"
        echo ""
        echo "الخطوات:"
        echo "1. heroku login"
        echo "2. cd server"
        echo "3. heroku create your-app-name"
        echo "4. heroku config:set MONGODB_ATLAS_URI=your_url"
        echo "5. git push heroku main"
        echo ""
        echo "التحقق: https://your-app-name.herokuapp.com/health"
        ;;
    2)
        echo "🎨 نشر واجهة العميل على Vercel"
        echo ""
        echo "تأكد من:"
        echo "✅ لديك حساب Vercel (https://vercel.com)"
        echo "✅ تثبيت Vercel CLI: npm i -g vercel"
        echo ""
        echo "الخطوات:"
        echo "1. cd client"
        echo "2. vercel login"
        echo "3. vercel"
        echo "4. تابع التعليمات"
        echo ""
        echo "ملاحظة: تأكد من متغيرات البيئة في Vercel Dashboard"
        ;;
    3)
        echo "📄 نشر على GitHub Pages"
        echo ""
        echo "الخطوات:"
        echo "1. في client/package.json أضف: \"homepage\": \"https://yourusername.github.io/repo\""
        echo "2. npm install gh-pages --save-dev"
        echo "3. أضف هذه الأسطر في package.json:"
        echo '   \"deploy\": \"npm run build && gh-pages -d dist\"'
        echo "4. npm run deploy"
        ;;
    4)
        echo "🖥️  نشر يدوي (AWS/DigitalOcean/VPS)"
        echo ""
        echo "الخطوات العامة:"
        echo "1. أنشئ server على AWS/DigitalOcean"
        echo "2. تثبيت Node.js و MongoDB"
        echo "3. سحب الكود من GitHub"
        echo "4. تثبيت المكتبات: npm install"
        echo "5. إعداد متغيرات البيئة"
        echo "6. استخدام PM2 لتشغيل التطبيق:"
        echo "   npm install -g pm2"
        echo "   pm2 start npm --name \"kitchens\" -- start"
        echo "7. استخدام Nginx كـ reverse proxy"
        echo "8. تفعيل HTTPS باستخدام Let's Encrypt"
        ;;
    *)
        echo "❌ اختيار غير صحيح"
        exit 1
        ;;
esac

echo ""
echo "📚 للمزيد من المعلومات، راجع: DEPLOYMENT_GUIDE.md"
