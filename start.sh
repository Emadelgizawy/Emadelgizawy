#!/bin/bash
# 🚀 سكريبت تشغيل سريع للمشروع

echo "🎯 مرحباً بك في مولد المشروع!"
echo "================================"

# التحقق من Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js غير مثبت. يرجى التثبيت من https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js مثبت: $(node -v)"

# التحقق من npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm غير مثبت"
    exit 1
fi

echo "✅ npm مثبت: $(npm -v)"

# اختيار ما يريده المستخدم
echo ""
echo "اختر ما تريد تشغيله:"
echo "1. تشغيل الخادم فقط"
echo "2. تشغيل واجهة العميل فقط"
echo "3. تشغيل لوحة الإدارة فقط"
echo "4. تشغيل الكل (في نوافذ منفصلة)"
read -p "اختيارك (1-4): " choice

case $choice in
    1)
        echo "🚀 تشغيل الخادم..."
        cd server
        npm install > /dev/null 2>&1
        npm run dev
        ;;
    2)
        echo "🎨 تشغيل واجهة العميل..."
        cd client
        npm install > /dev/null 2>&1
        npm run dev
        ;;
    3)
        echo "👨‍💼 تشغيل لوحة الإدارة..."
        cd admin
        npm install > /dev/null 2>&1
        npm run dev
        ;;
    4)
        echo "🎉 تشغيل جميع الخدمات..."
        echo "سيتم فتح نوافذ جديدة"
        
        # تشغيل الخادم
        if command -v gnome-terminal &> /dev/null; then
            gnome-terminal -- bash -c "cd server && npm install > /dev/null 2>&1 && npm run dev"
        elif command -v xterm &> /dev/null; then
            xterm -e "cd server && npm install > /dev/null 2>&1 && npm run dev" &
        else
            echo "⚠️  لا يمكن فتح نافذة جديدة تلقائياً"
            echo "شغل في terminal جديد: cd server && npm run dev"
        fi
        
        sleep 2
        
        # تشغيل العميل
        if command -v gnome-terminal &> /dev/null; then
            gnome-terminal -- bash -c "cd client && npm install > /dev/null 2>&1 && npm run dev"
        elif command -v xterm &> /dev/null; then
            xterm -e "cd client && npm install > /dev/null 2>&1 && npm run dev" &
        fi
        
        sleep 2
        
        # تشغيل الإدارة
        if command -v gnome-terminal &> /dev/null; then
            gnome-terminal -- bash -c "cd admin && npm install > /dev/null 2>&1 && npm run dev"
        elif command -v xterm &> /dev/null; then
            xterm -e "cd admin && npm install > /dev/null 2>&1 && npm run dev" &
        fi
        
        echo "✅ تم تشغيل جميع الخدمات!"
        echo "الروابط:"
        echo "  🌐 العميل: http://localhost:3000"
        echo "  🔌 الخادم: http://localhost:5000"
        echo "  👨‍💼 الإدارة: http://localhost:3001"
        ;;
    *)
        echo "❌ اختيار غير صحيح"
        exit 1
        ;;
esac
