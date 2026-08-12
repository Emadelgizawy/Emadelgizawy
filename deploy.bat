@echo off
REM 🌐 سكريبت النشر على الإنترنت (Windows)

echo 🚀 دليل النشر على الإنترنت
echo =============================

echo.
echo اختر خدمة النشر:
echo 1. نشر على Heroku (الخادم)
echo 2. نشر على Vercel (واجهة العميل)
echo 3. نشر على GitHub Pages
echo 4. نشر يدوي على AWS/DigitalOcean
set /p choice="اختيارك (1-4): "

if "%choice%"=="1" (
    echo 🚀 نشر الخادم على Heroku
    echo.
    echo تأكد من:
    echo ✅ لديك حساب Heroku (https://www.heroku.com)
    echo ✅ تثبيت Heroku CLI
    echo.
    echo الخطوات:
    echo 1. heroku login
    echo 2. cd server
    echo 3. heroku create your-app-name
    echo 4. heroku config:set MONGODB_ATLAS_URI=your_url
    echo 5. git push heroku main
    echo.
    echo التحقق: https://your-app-name.herokuapp.com/health
) else if "%choice%"=="2" (
    echo 🎨 نشر واجهة العميل على Vercel
    echo.
    echo تأكد من:
    echo ✅ لديك حساب Vercel (https://vercel.com)
    echo ✅ تثبيت Vercel CLI: npm i -g vercel
    echo.
    echo الخطوات:
    echo 1. cd client
    echo 2. vercel login
    echo 3. vercel
    echo 4. تابع التعليمات
) else if "%choice%"=="3" (
    echo 📄 نشر على GitHub Pages
    echo.
    echo الخطوات:
    echo 1. أضف في client/package.json
    echo 2. npm install gh-pages --save-dev
    echo 3. npm run deploy
) else if "%choice%"=="4" (
    echo 🖥️  نشر يدوي (AWS/DigitalOcean/VPS)
    echo.
    echo للمزيد من المعلومات راجع: DEPLOYMENT_GUIDE.md
) else (
    echo ❌ اختيار غير صحيح
    pause
    exit /b 1
)

pause
