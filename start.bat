@echo off
REM 🚀 سكريبت تشغيل سريع للمشروع (Windows)

echo 🎯 مرحباً بك في مشروع مطابخ الجيزاوي!
echo =====================================

REM التحقق من Node.js
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ❌ Node.js غير مثبت. يرجى التثبيت من https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js مثبت

REM اختيار ما يريده المستخدم
echo.
echo اختر ما تريد تشغيله:
echo 1. تشغيل الخادم فقط
echo 2. تشغيل واجهة العميل فقط
echo 3. تشغيل لوحة الإدارة فقط
echo 4. تشغيل الكل (في نوافذ منفصلة)
set /p choice="اختيارك (1-4): "

if "%choice%"=="1" (
    echo 🚀 تشغيل الخادم...
    cd server
    call npm install
    call npm run dev
) else if "%choice%"=="2" (
    echo 🎨 تشغيل واجهة العميل...
    cd client
    call npm install
    call npm run dev
) else if "%choice%"=="3" (
    echo 👨‍💼 تشغيل لوحة الإدارة...
    cd admin
    call npm install
    call npm run dev
) else if "%choice%"=="4" (
    echo 🎉 تشغيل جميع الخدمات...
    
    start "Kitchens Server" cmd /k "cd server && npm install && npm run dev"
    timeout /t 2 /nobreak
    
    start "Kitchens Client" cmd /k "cd client && npm install && npm run dev"
    timeout /t 2 /nobreak
    
    start "Kitchens Admin" cmd /k "cd admin && npm install && npm run dev"
    
    echo ✅ تم تشغيل جميع الخدمات!
    echo الروابط:
    echo   🌐 العميل: http://localhost:3000
    echo   🔌 الخادم: http://localhost:5000
    echo   👨‍💼 الإدارة: http://localhost:3001
) else (
    echo ❌ اختيار غير صحيح
    pause
    exit /b 1
)
