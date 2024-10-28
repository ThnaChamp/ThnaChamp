// Smooth scrolling when clicking on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ตัวแปรสำหรับจัดการสไลด์
let currentIndex = 0; // เพิ่มตัวแปรนี้เพื่อติดตามภาพสไลด์ปัจจุบัน

// ฟังก์ชันแสดงสไลด์
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    
    // ซ่อนภาพทั้งหมด
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    
    // ตรวจสอบขอบเขตของสไลด์
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    }
    
    // แสดงภาพปัจจุบัน
    slides[currentIndex].classList.add('active');
}

// ฟังก์ชันเลื่อนสไลด์
function moveSlide(step) {
    currentIndex += step;
    showSlide(currentIndex);
}

// แสดงภาพแรกเมื่อโหลดหน้า
showSlide(currentIndex);

// ฟังก์ชันตรวจจับการเลื่อนหน้าจอเพื่อแสดง navbar
let lastScrollTop = 0; // ตัวแปรเพื่อเก็บตำแหน่งเลื่อนล่าสุด

window.onscroll = function() {
    showNavbarOnScroll();
};

function showNavbarOnScroll() {
    const navbar = document.querySelector('nav');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // ตำแหน่งการเลื่อนปัจจุบัน

    // เช็คว่าผู้ใช้เลื่อนมากกว่า 50px หรือไม่ ถ้าใช่ให้ซ่อน navbar
    if (scrollTop > 300) {
        if (scrollTop > lastScrollTop) {
            // ผู้ใช้กำลังเลื่อนลง ซ่อน navbar
            navbar.style.top = "-90px";
        } else {
            // ผู้ใช้กำลังเลื่อนขึ้น แสดง navbar
            navbar.style.top = "0";
        }
    } else {
        // ถ้าการเลื่อนน้อยกว่า 50px ให้ navbar แสดงอยู่เสมอ
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop; // อัปเดตตำแหน่งเลื่อนล่าสุด
}




const images = document.querySelectorAll('.img-me1 img');
let currentIndex1 = 0;

function changeImage() {
    images[currentIndex1].classList.remove('active'); // ซ่อนภาพปัจจุบัน
    currentIndex1 = (currentIndex1 + 1) % images.length; // คำนวณดัชนีถัดไป
    images[currentIndex1].classList.add('active'); // แสดงภาพถัดไป
}

document.querySelector('.img-me1').addEventListener('mouseover', () => {
    changeImage(); // เปลี่ยนภาพเมื่อเมาส์อยู่เหนือ
    setInterval(changeImage, 6000); // เปลี่ยนภาพทุก 2 วินาที
});

// เริ่มต้นแสดงภาพแรก
images[currentIndex1].classList.add('active');


const text = "Hello, I'm Thanatip Nitinantakul";
const textElement = document.getElementById('typewriter-text');

let index = 0;
let isDeleting = false;

const typingSpeed = 50;
const resetDelay = 2000;
const deleteSpeed = 100;

function typeWriter() {
    if (!isDeleting) {
        textElement.innerHTML = text.slice(0, index);
        index++;

        if (index > text.length) {
            isDeleting = true;
            setTimeout(typeWriter, resetDelay);
            return;
        }
    } else {
        index--;
        textElement.innerHTML = text.slice(0, index);

        if (index === 0) {
            isDeleting = false;
        }
    }
    setTimeout(typeWriter, isDeleting ? deleteSpeed : typingSpeed);
}

typeWriter();



