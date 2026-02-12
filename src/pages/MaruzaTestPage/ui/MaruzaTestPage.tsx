import { useState } from "react";
import { Section } from "@/shared/ui/Section";
import styles from "./MaruzaTestPage.module.scss";
import { Button, Card, Col, Row, Modal, Radio, message } from "antd";
import { useResponsive } from "@/shared/lib/hooks/useResponsive";
import { BackBtn } from "@/shared/ui/BackBtn";

// Savollar interface
interface TestQuestion {
  question: string;
  options: string[];
  answer: string; // togri javob
}

// Mavzu interface
interface Mavzu {
  id: number;
  name: string;
  questions: TestQuestion[];
}

// 1-mavzu test
const test1: TestQuestion[] = [
  {
    question: "1. Optika fanining asosiy o‘rganish obyekti nima?",
    options: [
      "A) Tovush to‘lqinlarining tarqalishi",
      "B) Yorug‘lik tabiati va uning moddalar bilan ta’siri",
      "C) Suyuqliklarning oquvchanlik xususiyati",
      "D) Yerning magnit maydoni",
    ],
    answer: "B",
  },
  {
    question:
      "2. Yorug‘likning to‘g‘ri chiziq bo‘ylab tarqalishi va qaytish qonunlari fanning qaysi bosqichida o‘rganilgan?",
    options: [
      "A) Kvant optikasi",
      "B) Zamonaviy optika",
      "C) Geometrik optika",
      "D) To‘lqin optikasi",
    ],
    answer: "C",
  },
  {
    question:
      "3. Yorug‘likning elektromagnit to‘lqin ekanligini kim isbotlagan?",
    options: [
      "A) I. Nyuton",
      "B) J. Maksvell",
      "C) A. Eynshteyn",
      "D) M. Plank",
    ],
    answer: "B",
  },
  {
    question:
      "4. Yorug‘likning interferensiya va difraksiya hodisalari uning qaysi tabiatini tasdiqlaydi?",
    options: [
      "A) Zarra (korpuskulyar) tabiatini",
      "B) Issiqlik tabiatini",
      "C) To‘lqin tabiatini",
      "D) Magnit tabiatini",
    ],
    answer: "C",
  },
  {
    question:
      "5. Fotoeffekt hodisasini tushuntirib bergan va yorug‘likning kvant tabiatini isbotlagan olim kim?",
    options: [
      "A) X. Gyuygens",
      "B) O. Frenel",
      "C) A. Eynshteyn",
      "D) T. Yung",
    ],
    answer: "C",
  },
  {
    question:
      "6. O‘zbekistondagi 'Katta Quyosh pechi' qaysi tuman (hudud)da joylashgan?",
    options: ["A) Chinoz", "B) Parkent", "C) Bo‘stonliq", "D) Zangiota"],
    answer: "B",
  },
  {
    question:
      "7. Optik tolali aloqa tizimlari asosan qaysi sohada keng qo‘llaniladi?",
    options: [
      "A) Qurilishda",
      "B) Tibbiyot xirurgiyasida",
      "C) Internet va ma’lumotlar uzatishda",
      "D) Metallurgiya sanoatida",
    ],
    answer: "C",
  },
  {
    question: "8. Lazerning kashf qilinishi nechanchi yilda yuz bergan?",
    options: ["A) 1945-yil", "B) 1960-yil", "C) 1985-yil", "D) 2000-yil"],
    answer: "B",
  },
  {
    question:
      "9. Yorug‘likning ham to‘lqin, ham zarra xossasiga ega bo‘lishi nima deyiladi?",
    options: ["A) Dispersiya", "B) Difraksiya", "C) Dualizm", "D) Refraksiya"],
    answer: "C",
  },
  {
    question:
      "10. O‘zbekiston Fanlar akademiyasining qaysi institutida lazer texnologiyalari bo‘yicha tadqiqotlar olib boriladi?",
    options: [
      "A) Tarix instituti",
      "B) Ion-plazma va lazer texnologiyalari instituti",
      "C) Botanika instituti",
      "D) Matematika instituti",
    ],
    answer: "B",
  },
];

// 2-mavzu test
const test2: TestQuestion[] = [
  {
    question:
      "1. Maksvell nazariyasiga ko‘ra, uyurmaviy elektr maydonining manbai nima?",
    options: [
      "A) Qo‘zg‘almas zaryadlar",
      "B) O‘zgarmas magnit maydoni",
      "C) O‘zgaruvchan magnit maydoni",
      "D) Doimiy elektr toki",
    ],
    answer: "C",
  },
  {
    question:
      "2. Maksvellning qaysi qonuni tabiatda magnit zaryadlari (monopollar) mavjud emasligini tasdiqlaydi?",
    options: [
      "A) Magnit maydon uchun Gaus teoremasi",
      "B) Faradey qonuni",
      "C) Amper qonuni",
      "D) Kulon qonuni",
    ],
    answer: "A",
  },
  {
    question: "3. Elektromagnit to‘lqinlar qanday to‘lqinlar hisoblanadi?",
    options: [
      "A) Bo‘ylama to‘lqinlar",
      "B) Ko‘ndalang to‘lqinlar",
      "C) Faqat mexanik to‘lqinlar",
      "D) Sirtqi to‘lqinlar",
    ],
    answer: "B",
  },
  {
    question:
      "4. Elektromagnit to‘lqinning vakuumdagi tarqalish tezligi qanchaga teng?",
    options: ["A) 3 106 m/s", "B) 340 m/s", "C) 3 108 m/s", "D) Cheksiz katta"],
    answer: "C",
  },
  {
    question:
      "5. Muhitning mutloq sindirish ko‘rsatkichi , dielektrik va magnit singdiruvchanliklari orasidagi bog‘liqlik qaysi formulada to‘g‘ri ko‘rsatilgan?",
    options: ["A) n = ε.μ", "B) n =", "C) n = ε μ", "D) n = ε + μ"],
    answer: "B",
  },
  {
    question:
      "6. Elektromagnit to‘lqinning energiya oqimi zichligini aniqlaydigan vektor qanday nomlanadi?",
    options: [
      "A) Lorens vektori",
      "B) Kulon vektori",
      "C) Umov-Poynting vektori",
      "D) Nyuton vektori",
    ],
    answer: "C",
  },
  {
    question:
      "7. Maksvell nazariyasi qaysi hodisani tushuntirishda ojizlik qiladi (chegaralangan)?",
    options: [
      "A) Yorug‘likning qaytishini",
      "B) Radioto‘lqinlarning tarqalishini",
      "C) Fotoeffekt va kvant hodisalarini",
      "D) Muhitda yorug‘lik tezligining kamayishini",
    ],
    answer: "C",
  },
  {
    question: "8. Siljish toki tushunchasini fanga kim kiritgan?",
    options: ["A) A. Amper", "B) J. Maksvell", "C) M. Faradey", "D) G. Gers"],
    answer: "B",
  },
  {
    question:
      "9. Muhitning dielektrik singdiruvchanligi  ortsa, elektromagnit to‘lqin tezligi qanday o‘zgaradi?",
    options: [
      "A) Ortadi",
      "B) O‘zgarmaydi",
      "C) Kamayadi",
      "D) Avval ortib, keyin kamayadi",
    ],
    answer: "C",
  },
  {
    question:
      "10. Maksvell tenglamalari necha guruh asosiy tenglamalardan iborat?",
    options: ["A) 2 ta", "B) 3 ta", "C) 4 ta", "D) 6 ta"],
    answer: "C",
  },
];

// 3-mavzu test
const test3: TestQuestion[] = [
  {
    question: "1. Yassi elektromagnit to‘lqin deb qanday to‘lqinga aytiladi?",
    options: [
      "A) To‘lqin sirtlari nuqtaviy bo‘lgan to‘lqinga",
      "B) To‘lqin frontlari bir-biriga parallel tekisliklardan iborat to‘lqinga",
      "C) To‘lqinlari faqat bitta yo‘nalishda tebranadigan to‘lqinga",
      "D) Energiya tashimaydigan to‘lqinga",
    ],
    answer: "B",
  },
  {
    question: "2. Umov-Poynting vektori nimani ifodalaydi?",
    options: [
      "A) To‘lqinning tarqalish tezligini",
      "B) Vaqt birligi ichida yuzadan o‘tayotgan energiya oqimi zichligini",
      "C) Muhitning sindirish ko‘rsatkichini",
      "D) To‘lqinning turg‘unlik darajasini",
    ],
    answer: "B",
  },
  {
    question:
      "3. Yorug‘lik bosimi mavjudligi elektromagnit to‘lqinning qaysi xususiyatga ega ekanligini isbotlaydi?",
    options: [
      "A) Massaga ega ekanligini",
      "B) Faqat to‘lqin xossasiga ega ekanligini",
      "C) Impulsga ega ekanligini",
      "D) Muhitda so‘nmasligini",
    ],
    answer: "C",
  },
  {
    question:
      "4. Yassi to‘lqinning garmonik ko‘rinishdagi yechimida k harfi nimani anglatadi?",
    options: [
      "A) To‘lqin soni",
      "B) Siklik chastota",
      "C) Muhitning qaytarish ko‘rsatkichi",
      "D) To‘lqin amplitudasi",
    ],
    answer: "A",
  },
  {
    question:
      "5. Ikki kogerent to‘lqin uchrashganda yorug‘likning kuchayishi (maksimum) uchun yo‘llar farqi Δ qanday bo‘lishi kerak?",
    options: ["A) Δ = m𝛌", "B) Δ = (2m+1)·𝛌/2", "C) Δ = 𝛌/4", "D) Δ = 0.5 𝛌"],
    answer: "A",
  },
  {
    question: "6. Turg‘un elektromagnit to‘lqinlar qanday hosil bo‘ladi?",
    options: [
      "A) Turli chastotali to‘lqinlar qo‘shilganda",
      "B) Ikkita qarama-qarshi yo‘nalgan bir xil yassi to‘lqinlar ustma-ust tushganda",
      "C) Yorug‘lik prizmadan o‘tganda",
      "D) To‘lqin vakuumdan muhitga o‘tganda",
    ],
    answer: "B",
  },
  {
    question:
      "7. Kompleks sindirish ko‘rsatkichi ň=n + ik dagi k koeffitsiyenti nimani tavsiflaydi?",
    options: [
      "A) To‘lqinning tezligini",
      "B) To‘lqinning muhitda yutilishi yoki so‘nishini",
      "C) To‘lqinning qaytish darajasini",
      "D) Muhitning magnit xossasini",
    ],
    answer: "B",
  },
  {
    question:
      "8. Yorug‘lik impulsi (p) va uning energiyasi (W) o‘rtasidagi bog‘liqlik qaysi formulada to‘g‘ri berilgan?",
    options: ["A) p = W ·c", "B) p = W/c", "C) p = c/W", "D) p = W"],
    answer: "B",
  },
  {
    question:
      "9. Umov-Poynting vektorining yo‘nalishi qaysi yo‘nalish bilan mos tushadi?",
    options: [
      "A) Elektr maydon kuchlanganligi yo‘nalishi bilan",
      "B) Magnit maydon induksiyasi yo‘nalishi bilan",
      "C) Energiya uzatilayotgan (to‘lqin tarqalayotgan) yo‘nalish bilan",
      "D) Sirtga o‘tkazilgan normal yo‘nalishi bilan",
    ],
    answer: "C",
  },
  {
    question:
      "10. To‘lqin intensivligi (I) Umov-Poynting vektorining nimasiga teng?",
    options: [
      "A) Maksimal qiymatiga",
      "B) O‘rtacha qiymatiga",
      "C) Eng kichik qiymatiga",
      "D) Yo‘nalishiga",
    ],
    answer: "B",
  },
];

// 4-mavzu test
const test4: TestQuestion[] = [
  {
    question:
      "1. Qaytish burchagi 30̊ bo‘lsa, tushish burchagi necha gradusga teng?",
    options: ["A) 60̊", "B) 30̊", "C) 90̊", "D) 45̊"],
    answer: "B",
  },
  {
    question: "2. Snellius qonuni qaysi hodisani ifodalaydi?",
    options: [
      "A) Yorug‘lik bosimini",
      "B) Yorug‘lik sinishini",
      "C) Dispersiyani",
      "D) Difraksiyani",
    ],
    answer: "B",
  },
  {
    question: "3. To‘la ichki qaytish qachon kuzatiladi?",
    options: [
      "A) n1 < n2 bo‘lganda",
      "B) Faqat vakuumda",
      "C) n1 > n2 bo‘lganda",
      "D) Har doim",
    ],
    answer: "C",
  },
  {
    question: "4. Bryuster burchagi ostida qaytgan nur qanday holatda bo‘ladi?",
    options: [
      "A) Tabiiy yorug‘lik",
      "B) To‘liq qutblangan",
      "C) Qisman qutblangan",
      "D) So‘ngan",
    ],
    answer: "B",
  },
  {
    question: "5. Ferma prinsipi nimaga asoslangan?",
    options: [
      "A) Maksimal energiya",
      "B) Eng qisqa masofa",
      "C) Eng kam vaqt",
      "D) Maksimal tezlik",
    ],
    answer: "C",
  },
  {
    question: "6. Frenel tenglamalari nima haqida ma’lumot beradi?",
    options: [
      "A) Nur tezligi",
      "B) Qaytgan va singan nur intensivligi",
      "C) Nur rangi",
      "D) Atom tuzilishi",
    ],
    answer: "B",
  },
  {
    question:
      "7. Yorug‘lik optik zichroq muhitga o‘tganda uning tezligi qanday o‘zgaradi?",
    options: [
      "A) Ortadi",
      "B) Kamayadi",
      "C) O‘zgarmaydi",
      "D) Nolga teng bo‘ladi",
    ],
    answer: "B",
  },
  {
    question:
      "8. Bryuster burchagida qaytgan va singan nurlar orasidagi burchak necha gradus?",
    options: ["A) 45̊", "B) 180̊", "C) 90̊", "D) 0̊"],
    answer: "C",
  },
  {
    question: "9. Optik tolali aloqa asosi bo‘lgan hodisani ko‘rsating:",
    options: [
      "A) Interferensiya",
      "B) To‘la ichki qaytish",
      "C) Difraksiya",
      "D) Dispersiya",
    ],
    answer: "B",
  },
  {
    question: "10. Sirtning qaytarish koeffitsiyenti (R) nimaga bog‘liq?",
    options: [
      "A) Faqat nur rangiga",
      "B) Muhitlarning sindirish ko‘rsatkichlariga",
      "C) Faqat havo bosimiga",
      "D) Nur manbaiga",
    ],
    answer: "B",
  },
];

// 5-mavzu test
const test5: TestQuestion[] = [
  {
    question: "1. Normal dispersiya uchun qaysi shart to‘g‘ri?",
    options: ["A) dn/d𝛌 > 0", "B) dn/d𝛌 < 0", "C) n = const", "D) n = 0"],
    answer: "B",
  },
  {
    question:
      "2. Yorug‘likning yutilish qonuni (Buger) formulasini ko‘rsating:",
    options: ["A) I = I0e-αl", "B) n = εμ", "C) E = mc2", "D) P = I/c"],
    answer: "A",
  },
  {
    question:
      "3. To‘da tezligi va fazoviy tezlik o‘rtasidagi bog‘liqlikni kim aniqlagan?",
    options: ["A) Nyuton", "B) Reley", "C) Maksvell", "D) Frenel"],
    answer: "B",
  },
  {
    question: "4. Anomal dispersiya odatda qayerda kuzatiladi?",
    options: [
      "A) Shaffof muhitda",
      "B) Vakuumda",
      "C) Kuchli yutilish sohalarida",
      "D) Faqat havoda",
    ],
    answer: "C",
  },
  {
    question:
      "5. Dispersiya hodisasi yorug‘likning qaysi tabiatini isbotlaydi?",
    options: ["A) Zarrachaviy", "B) To‘lqin", "C) Issiqlik", "D) Gravitatsion"],
    answer: "B",
  },
  {
    question: "6. Nurtolaning ishlash asosi qaysi hodisaga tayanadi?",
    options: [
      "A) Dispersiya",
      "B) To‘la ichki qaytish",
      "C) Difraksiya",
      "D) Yutilish",
    ],
    answer: "B",
  },
  {
    question: "7. Buger qonunidagi α koeffitsiyenti nima deb ataladi?",
    options: [
      "A) Sindirish ko‘rsatkichi",
      "B) Yutilish koeffitsiyenti",
      "C) Qaytish koeffitsiyenti",
      "D) Elastiklik moduli",
    ],
    answer: "B",
  },
  {
    question: "8. Dispersiya bo‘lmagan muhitda to‘da tezligi nimaga teng?",
    options: [
      "A) Nolga",
      "B) Fazoviy tezlikka",
      "C) Yorug‘lik tezligidan katta",
      "D) Doim c ga",
    ],
    answer: "B",
  },
  {
    question:
      "9. Prizmadan o‘tgan oq yorug‘likning spektrga ajralishi nima deb ataladi?",
    options: [
      "A) Interferensiya",
      "B) Difraksiya",
      "C) Dispersiya",
      "D) Qutblanish",
    ],
    answer: "C",
  },
  {
    question: "10. Klassik nazariyaga ko‘ra dispersiya manbai nima?",
    options: [
      "A) Fotofononlar",
      "B) Elektronlarning majburiy tebranishi",
      "C) Protonlar harakati",
      "D) Issiqlik nurlanishi",
    ],
    answer: "B",
  },
];

// 6-mavzu test
const test6: TestQuestion[] = [
  {
    question:
      "1. Interferensiya hodisasi kuzatilishi uchun to‘lqinlar qanday bo‘lishi shart?",
    options: [
      "A) Turli chastotali",
      "B) Kogerent",
      "C) Parallel",
      "D) Yuqori energiyali",
    ],
    answer: "B",
  },
  {
    question:
      "2. Maksimum sharti uchun optik yo‘llar farqi (Δ) nimaga teng bo‘lishi kerak?",
    options: ["A) m\\𝛌", "B) (2m+1)\\𝛌", "C) 𝛌 /4", "D) 2m\\𝛌"],
    answer: "A",
  },
  {
    question:
      "3. Yorug‘lik interferensiyasini birinchi bo‘lib laboratoriyada kim kuzatgan?",
    options: ["A) Nyuton", "B) Yung", "C) Maksvell", "D) Eynshteyn"],
    answer: "B",
  },
  {
    question:
      "4. Nyuton xalqalari qaysi ob'yektlar orasidagi havo qatlamida hosil bo‘ladi?",
    options: [
      "A) Ikki prizma",
      "B) Linza va yassi shisha",
      "C) Ikki linza",
      "D) Ikki tirqish",
    ],
    answer: "B",
  },
  {
    question:
      "5. Linzalarni 'shaffoflash' (prosvetleniye) qaysi hodisaga asoslangan?",
    options: [
      "A) Difraksiya",
      "B) Dispersiya",
      "C) Interferensiya",
      "D) Qutblanish",
    ],
    answer: "C",
  },
  {
    question: "6. Maykelson interferometri yordamida nima o‘lchanadi?",
    options: [
      "A) Yorug‘lik tezligi va kichik masofalar",
      "B) Magnit maydon",
      "C) Elektr zaryadi",
      "D) Issiqlik miqdori",
    ],
    answer: "A",
  },
  {
    question:
      "7. Interferension manzaraning yorug‘ va qorong‘u chiziqlari nima deyiladi?",
    options: ["A) Spektrlar", "B) Polosalar", "C) Modalar", "D) Fotonlar"],
    answer: "B",
  },
  {
    question: "8. Minimum shartida natijaviy amplituda qanday bo‘ladi?",
    options: [
      "A) Maksimal",
      "B) Minimal (nolga yaqin)",
      "C) O‘zgarmas",
      "D) Cheksiz",
    ],
    answer: "B",
  },
  {
    question: "9. Sovun pufakchasining rangli ko‘rinishi sababi nima?",
    options: [
      "A) Dispersiya",
      "B) Difraksiya",
      "C) Yupqa pardadagi interferensiya",
      "D) Nur sinishi",
    ],
    answer: "C",
  },
  {
    question: "10. Fabri-Pero asbobi qaysi turdagi asboblar sirasiga kiradi?",
    options: [
      "A) Mikroskop",
      "B) Teleskop",
      "C) Interferometr",
      "D) Spektrometr",
    ],
    answer: "C",
  },
];

// 7-mavzu test
const test7: TestQuestion[] = [
  {
    question:
      "1. Yorug‘likning to‘siqlarni aylanib o‘tish hodisasi nima deb ataladi?",
    options: [
      "A) Interferensiya",
      "B) Dispersiya",
      "C) Difraksiya",
      "D) Sinish",
    ],
    answer: "C",
  },
  {
    question:
      "2. Ikkilamchi to‘lqinlar manbai haqidagi prinsip kimning nomi bilan ataladi?",
    options: ["A) Nyuton", "B) Gyuygens-Frenel", "C) Maksvell", "D) Eynshteyn"],
    answer: "B",
  },
  {
    question: "3. Frenel zonalari usuli nima uchun ishlatiladi?",
    options: [
      "A) Nur tezligini o‘lchash",
      "B) Difraksion manzarani hisoblash",
      "C) Nur rangini aniqlash",
      "D) Zaryadni o‘lchash",
    ],
    answer: "B",
  },
  {
    question: "4. Parallel nurlarning difraksiyasi qanday nomlanadi?",
    options: [
      "A) Frenel difraksiyasi",
      "B) Fraungofer difraksiyasi",
      "C) Reley difraksiyasi",
      "D) Plank difraksiyasi",
    ],
    answer: "B",
  },
  {
    question: "5. Difraksiya panjarasining asosiy vazifasi nima?",
    options: [
      "A) Nur oqimini to‘sish",
      "B) To‘lqin uzunligini aniqlash va spektrga ajratish",
      "C) Nurni qutblash",
      "D) Nur tezligini oshirish",
    ],
    answer: "B",
  },
  {
    question:
      "6. Difraksiya hodisasi yorug‘likning qaysi tabiatini tasdiqlaydi?",
    options: ["A) Zarrachaviy", "B) To‘lqin", "C) Gravitatsion", "D) Magnit"],
    answer: "B",
  },
  {
    question:
      "7. Dumalshog to‘siq ortida yorug‘ dog‘ (Puasson dog‘i) hosil bo‘lishi nimaga asoslangan?",
    options: [
      "A) Geometrik optikaga",
      "B) Difraksiyaga",
      "C) Dispersiyaga",
      "D) Fotoeffektga",
    ],
    answer: "B",
  },
  {
    question:
      "8. Optik asboblarning ajrata olish qobiliyati nima bilan cheklanadi?",
    options: [
      "A) Linza rangi",
      "B) Nur difraksiyasi",
      "C) Muhit harorati",
      "D) Nur intensivligi",
    ],
    answer: "B",
  },
  {
    question: "9. Spektral asboblarning asosi hisoblangan qurilma?",
    options: [
      "A) Ko‘zgu",
      "B) Difraksiya panjarasi",
      "C) Shisha plastinka",
      "D) Magnit",
    ],
    answer: "B",
  },
  {
    question: "10. Fraungofer difraksiyasida maksimum sharti nimaga bog‘liq?",
    options: [
      "A) Faqat tirqish kengligiga",
      "B) To‘lqin uzunligi va og‘ish burchagiga",
      "C) Manba haroratiga",
      "D) Nur tezligiga",
    ],
    answer: "B",
  },
];

// 8-mavzu test
const test8: TestQuestion[] = [
  {
    question: "1. Yorug‘likning qutblanishi nimani isbotlaydi?",
    options: [
      "A) Yorug‘likning tezligini",
      "B) Yorug‘likning ko‘ndalang to‘lqinligini",
      "C) Nur yutilishini",
      "D) Nur sinishini",
    ],
    answer: "B",
  },
  {
    question: "2. Malyus qonuni formulasini ko‘rsating?",
    options: [
      "A) n = sinα sin β",
      "B) I = I0 cos2α",
      "C) E = hυ",
      "D) p = h 𝛌",
    ],
    answer: "B",
  },
  {
    question: "3. Optik o‘q deb nimaga aytiladi?",
    options: [
      "A) Nur eng tez o‘tadigan yo‘nalish",
      "B) Ikkilanish sinishi kuzatilmaydigan yo‘nalish",
      "C) Nur to‘la qaytadigan sirt",
      "D) Kristalning markazi",
    ],
    answer: "B",
  },
  {
    question: "4. Ikkilanish sinishida qaysi nur sinish qonuniga bo‘ysunadi?",
    options: [
      "A) G‘ayritabiiy nur",
      "B) Oddiy nur",
      "C) Qaytgan nur",
      "D) Tarqalgan nur",
    ],
    answer: "B",
  },
  {
    question: "5. Fazalar farqi π/2 bo‘lganda qanday qutblanish hosil bo‘ladi?",
    options: ["A) Chiziqli", "B) Doiraviy", "C) Elliptik", "D) Qutblanmagan"],
    answer: "B",
  },
  {
    question: "6. Nikol prizmasi nima uchun xizmat qiladi?",
    options: [
      "A) Nur tezligini oshirish",
      "B) Chiziqli qutblangan nur olish",
      "C) Spektrga ajratish",
      "D) Nurni fokuslash",
    ],
    answer: "B",
  },
  {
    question:
      "7. Analizator va qutblagich orasidagi burchak 9 bo‘lsa, o‘tgan nur intensivligi qancha?",
    options: ["A) I0", "B) I0 /2", "C) Nol", "D) 2·I0"],
    answer: "C",
  },
  {
    question: "8. Tanlab yutilish (dixroizm) xossasiga ega bo‘lgan qurilma?",
    options: ["A) Ob'yektiv", "B) Linza", "C) Polarid", "D) Ko‘zgu"],
    answer: "C",
  },
  {
    question:
      "9. Tabiiy yorug‘lik polaroiddan o‘tganda intensivligi qanday o‘zgaradi?",
    options: [
      "A) 2 marta kamayadi",
      "B) O‘zgarmaydi",
      "C) 4 marta ortadi",
      "D) Butunlay so‘nadi",
    ],
    answer: "A",
  },
  {
    question: "10. Qutblanish hodisasi qayerda qo‘llanilmaydi?",
    options: [
      "A) LCD monitorlarda",
      "B) 3D kinoteatrlarda",
      "C) Rentgen nurlarida",
      "D) Shakar miqdorini aniqlashda",
    ],
    answer: "C",
  },
];

// 9-mavzu test
const test9: TestQuestion[] = [
  {
    question:
      "1. Izotrop shaffof jismlarda mexanik deformatsiya natijasida yuzaga keladigan yorug‘likning ikkilanish sinishi nima deyiladi?",
    options: [
      "A) Kerr effekti",
      "B) Fotoelastiklik",
      "C) Faradey effekti",
      "D) Kotton-Muton effekti",
    ],
    answer: "B",
  },
  {
    question:
      "2. Kerr effekti moddaga qanday maydon ta’sir ettirilganda kuzatiladi?",
    options: [
      "A) Magnit maydoni",
      "B) Gravitatsion maydon",
      "C) Kuchli elektr maydoni",
      "D) Ultrabinafsha nurlanish",
    ],
    answer: "C",
  },
  {
    question: "3. Kerr effektining eng muhim amaliy xususiyati nimada?",
    options: [
      "A) Nurning rangini o‘zgartirishida",
      "B) Uni faqat qattiq jismlarda kuzatilishida",
      "C) Uning o‘ta yuqori tezkorligi (inersiyasizligi)da",
      "D) Moddaning haroratini oshirishida",
    ],
    answer: "C",
  },
  {
    question:
      "4. Qutblanish tekisligini burish xususiyatiga ega bo‘lgan moddalar qanday ataladi?",
    options: [
      "A) Shaffof moddalar",
      "B) Izotrop moddalar",
      "C) Optik aktiv moddalar",
      "D) Yarim o‘tkazgichlar",
    ],
    answer: "C",
  },
  {
    question:
      "5. Qutblanish tekisligining aylanish burchagi eritma konsentratsiyasi va nur bosib o‘tgan yo‘l bilan qanday bog‘langan?",
    options: [
      "A) φ = [α]· C· l",
      "B) φ = [α]· C/ l",
      "C) φ = [α] / (C· l)",
      "D) φ = C2 ·l",
    ],
    answer: "A",
  },
  {
    question:
      "6. Eritmadagi qand (shakar) miqdorini qutblanish tekisligining aylanishi asosida aniqlaydigan asbob nima?",
    options: [
      "A) Spektrometr",
      "B) Saxarimetr (Polariometr)",
      "C) Interferometr",
      "D) Mikroskop",
    ],
    answer: "B",
  },
  {
    question:
      "7. Magnit maydoni ta’sirida qutblanish tekisligining aylanishi qanday nomlanadi?",
    options: [
      "A) Kerr effekti",
      "B) Faradey effekti",
      "C) Puasson effekti",
      "D) Reley effekti",
    ],
    answer: "B",
  },
  {
    question:
      "8. Kerr katagi zamonaviy texnikada qanday vazifani bajarishi mumkin?",
    options: [
      "A) Yorug‘likni sekinlashtiruvchi sifatida",
      "B) O‘ta tezkor optik klapan (yopqich) sifatida",
      "C) Nur intensivligini oshirish uchun",
      "D) Issiqlik izolatori sifatida",
    ],
    answer: "B",
  },
  {
    question:
      "9. Nima uchun mexanik deformatsiyalangan shisha prizma orqali o‘tgan nur ikkiga ajraladi?",
    options: [
      "A) Chunki u yerda dispersiya yo‘qoladi",
      "B) Chunki shisha anizotrop xossaga ega bo‘lib qoladi",
      "C) Chunki shisha eriy boshlaydi",
      "D) Chunki nur to‘la qaytadi",
    ],
    answer: "B",
  },
  {
    question:
      "10. Qutblanish tekisligining aylanishi Frenel nazariyasiga ko‘ra qanday tushuntiriladi?",
    options: [
      "A) Nur zarrachalarga bo‘linishi bilan",
      "B) Doiraviy qutblangan o‘ng va chap nurlarning tezliklari farqi bilan",
      "C) Nurning yutilishi bilan",
      "D) Magnit maydonining nurni qaytarishi bilan",
    ],
    answer: "B",
  },
];

// 10-mavzu test
const test10: TestQuestion[] = [
  {
    question:
      "1. Stefan-Bolsman qonuniga ko‘ra, nurlanish quvvati haroratning nechanchi darajasiga proporsional?",
    options: ["A) 2", "B) 3", "C) 4", "D) 1"],
    answer: "C",
  },
  {
    question:
      "2. Vinning siljish qonuniga ko‘ra, harorat ortsa 𝛌max qanday o‘zgaradi?",
    options: [
      "A) Ortadi",
      "B) Kamayadi",
      "C) O‘zgarmaydi",
      "D) Nolga aylanadi",
    ],
    answer: "B",
  },
  {
    question: "3. Foton energiyasi formulasi qaysi?",
    options: ["A) E = mc2", "B) E = hυ", "C) E = kT", "D) E = F/s"],
    answer: "B",
  },
  {
    question: "4. Absolyut qora jismning yutish koeffitsiyienti nechaga teng?",
    options: ["A) 0", "B) 0.5", "C) 1", "D) Cheksiz"],
    answer: "C",
  },
  {
    question: "5. Tashqi fotoeffekt qonuniyatlarini kim tushuntirib bergan?",
    options: ["A) Nyuton", "B) Eynshteyn", "C) Stefan", "D) Kirxgof"],
    answer: "B",
  },
  {
    question:
      "6. Elektronning metalldan chiqishi uchun sarflanadigan minimal energiya nima deyiladi?",
    options: [
      "A) Kinetik energiya",
      "B) Chiqish ishi",
      "C) Potensial energiya",
      "D) Kvant",
    ],
    answer: "B",
  },
  {
    question: "7. Optik pirometr nima uchun ishlatiladi?",
    options: [
      "A) Bosimni o‘lchash",
      "B) Yuqori haroratni masofadan o‘lchash",
      "C) Nur tezligini aniqlash",
      "D) Zichlikni o‘lchash",
    ],
    answer: "B",
  },
  {
    question: "8. Fotoeffektning 'qizil chegarasi' nimaga bog‘liq?",
    options: [
      "A) Nur intensivligiga",
      "B) Metalning turiga (chiqish ishiga)",
      "C) Vaqtga",
      "D) Masofaga",
    ],
    answer: "B",
  },
  {
    question: "9. Quyosh batareyalari qaysi hodisaga asoslangan?",
    options: [
      "A) Issiqlik nurlanishi",
      "B) Ichki fotoeffekt",
      "C) Difraksiya",
      "D) Dispersiya",
    ],
    answer: "B",
  },
  {
    question:
      "10. Lyuminessensiyaning uzoq davom etadigan turi qanday ataladi?",
    options: [
      "A) Flyuoressensiya",
      "B) Fosforessensiya",
      "C) Diffuziya",
      "D) Konveksiya",
    ],
    answer: "B",
  },
];

// 11-mavzu test
const test11: TestQuestion[] = [
  {
    question:
      "1. Yorug‘likning sochilishi hodisasi qanday muhitlarda kuzatiladi?",
    options: [
      "A) Optik jihatdan bir jinsli bo‘lmagan muhitda",
      "B) Mutloq bir jinsli muhitda",
      "C) Faqat vakuumda",
      "D) Faqat shaffof bo‘lmagan jismlarda",
    ],
    answer: "A",
  },
  {
    question:
      "2. Reley qonuniga ko‘ra, sochilgan nur intensivligi (I) to‘lqin uzunligi (𝛌) bilan qanday bog‘liq?",
    options: ["A) I ~ 𝛌2", "B) I ~ 1/𝛌2", "C) I ~ 1/𝛌4", "D) I ~ 𝛌4"],
    answer: "C",
  },
  {
    question: "3. Nima sababdan bulutlar va tuman oq rangda ko‘rinadi?",
    options: [
      "A) Zarralar yirik bo‘lgani uchun barcha ranglar bir xil sochiladi",
      "B) Faqat qizil nurlar sochilgani uchun",
      "C) Ularda yorug‘lik butunlay yutilgani uchun",
      "D) Nurning sinishi natijasida",
    ],
    answer: "A",
  },
  {
    question:
      "4. Kombinatsion sochilish (Raman effekti) natijasida sochilgan nur spektrida nima paydo bo‘ladi?",
    options: [
      "A) Faqat tushayotgan nur chastotasi",
      "B) Yangi chastotali satellitlar (Stoks va antistoks chiziqlari)",
      "C) Faqat rentgen nurlari",
      "D) Hech qanday o‘zgarish bo‘lmaydi",
    ],
    answer: "B",
  },
  {
    question: "5. Stoks satellitlari deb qanday chiziqlarga aytiladi?",
    options: [
      "A) Chastotasi tushayotgan nur chastotasiga teng bo‘lgan",
      "B) Chastotasi tushayotgan nur chastotasidan kichik bo‘lgan",
      "C) Chastotasi tushayotgan nur chastotasidan katta bo‘lgan",
      "D) Faqat ultra-binafsha sohadagi chiziqlarga",
    ],
    answer: "B",
  },
  {
    question:
      "6. Mandelshtam-Brillyuen effekti nurning qanday to‘lqinlarda sochilishi natijasidir?",
    options: [
      "A) Muhitdagi akustik (tovush) to‘lqinlarida",
      "B) Elektromagnit to‘lqinlarda",
      "C) Gravitatsion to‘lqinlarda",
      "D) Suv to‘lqinlarida",
    ],
    answer: "A",
  },
  {
    question:
      "7. Kompton effekti yorug‘likning qaysi xususiyatini tasdiqlaydi?",
    options: [
      "A) To‘lqin tabiatini",
      "B) Faqat nurning sinishini",
      "C) Korpuskulyar (zarra) tabiatini",
      "D) Magnit maydoniga bog‘liqligini",
    ],
    answer: "C",
  },
  {
    question:
      "8. Kompton sochilishida sochilgan nurning to‘lqin uzunligi (𝛌’) tushayotgan nurga (𝛌) nisbatan qanday bo‘ladi?",
    options: [
      "A) Kamayadi (𝛌' < 𝛌)",
      "B) Ortadi (𝛌' > 𝛌)",
      "C) O‘zgarmaydi (𝛌' = 𝛌)",
      "D) Nolga teng bo‘ladi",
    ],
    answer: "B",
  },
  {
    question:
      "9. Yorug‘likning molekulyar sochilishi nima sababdan yuzaga keladi?",
    options: [
      "A) Begona chang zarralari tufayli",
      "B) Zichlikning issiqlik fluktuatsiyalari (tebranishlari) natijasida",
      "C) Nur intensivligi juda yuqori bo‘lgani uchun",
      "D) Muhitning rangi tufayli",
    ],
    answer: "B",
  },
  {
    question:
      "10. Tindal effekti qanday muhitlarda yorug‘lik dastasining 'yo‘lini' ko‘rish imkonini beradi?",
    options: [
      "A) Toza vakuumda",
      "B) Magnit maydonida",
      "C) Oyna yuzasida",
      "D) Kolloid eritmalar va muallaq zarrali muhitlarda",
    ],
    answer: "D",
  },
];

// 12-mavzu test
const test12: TestQuestion[] = [
  {
    question:
      "1. Magnit maydoni ta’sirida spektral chiziqlarning ajralishi nima deyiladi?",
    options: [
      "A) Shtark effekti",
      "B) Zeeman effekti",
      "C) Faradey effekti",
      "D) Doppler effekti",
    ],
    answer: "B",
  },
  {
    question: "2. Faradey effekti nurning qaysi xossasiga ta’sir qiladi?",
    options: [
      "A) Rangi",
      "B) Tezligi",
      "C) Qutblanish tekisligi",
      "D) Intensivligi",
    ],
    answer: "C",
  },
  {
    question: "3. Lazer nurlanishining asosiy xususiyati nima?",
    options: [
      "A) Tarqoqligi",
      "B) Monoxromatikligi va kogerentligi",
      "C) Issiqligi",
      "D) Tabiiyligi",
    ],
    answer: "B",
  },
  {
    question:
      "4. Doppler effektiga ko‘ra, manba kuzatuvchiga yaqinlashsa chastota qanday o‘zgaradi?",
    options: ["A) Ortadi", "B) Kamayadi", "C) O‘zgarmaydi", "D) Nol bo‘ladi"],
    answer: "A",
  },
  {
    question: "5. Linzaning optik kuchi birligi nima?",
    options: ["A) Metr", "B) Dioptriya", "C) Lyuks", "D) Kandela"],
    answer: "B",
  },
  {
    question: "6. Yoritilganlik qaysi asbob bilan o‘lchanadi?",
    options: ["A) Lyuksmetr", "B) Termometr", "C) Barometr", "D) Ampermetr"],
    answer: "A",
  },
  {
    question: "7. Shtark effekti qanday maydon ta’sirida yuzaga keladi?",
    options: ["A) Magnit", "B) Akustik", "C) Gravitasiya", "D) Elektr"],
    answer: "D",
  },
  {
    question: "8. Golografiya nima?",
    options: [
      "A) Oddiy rasm",
      "B) Tasvirni hajmiy (3D) qayd qilish",
      "C) Nurni qaytarish",
      "D) Ranglarni ajratish",
    ],
    answer: "B",
  },
  {
    question: "9. Yorug‘lik oqimining birligi nima?",
    options: ["A) Lyumen", "B) Lyuks", "C) Kandela", "D) Vat"],
    answer: "A",
  },
  {
    question: "10. Qaysi nur linzadan o‘tganda yo‘nalishini o‘zgartirmaydi?",
    options: [
      "A) Fokusdan o‘tuvchi",
      "B) Optik markazdan o‘tuvchi",
      "C) Parallel nur",
      "D) Chekka nur",
    ],
    answer: "B",
  },
];

const mavzular: Mavzu[] = [
  { id: 1, name: "1-mavzu test", questions: test1 },
  { id: 2, name: "2-mavzu test", questions: test2 },
  { id: 3, name: "3-mavzu test", questions: test3 },
  { id: 4, name: "4-mavzu test", questions: test4 },
  { id: 5, name: "5-mavzu test", questions: test5 },
  { id: 6, name: "6-mavzu test", questions: test6 },
  { id: 7, name: "7-mavzu test", questions: test7 },
  { id: 8, name: "8-mavzu test", questions: test8 },
  { id: 9, name: "9-mavzu test", questions: test9 },
  { id: 10, name: "10-mavzu test", questions: test10 },
  { id: 11, name: "11-mavzu test", questions: test11 },
  { id: 12, name: "12-mavzu test", questions: test12 },
];

const MaruzaTestPage: React.FC = () => {
  const { sm } = useResponsive();

  const [scores, setScores] = useState<number[]>(
    Array(mavzular.length).fill(0),
  );
  const [visible, setVisible] = useState<boolean>(false);
  const [currentMavzu, setCurrentMavzu] = useState<Mavzu | null>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const openTest = (mavzu: Mavzu) => {
    if (mavzu.id > 1 && scores[mavzu.id - 2] < 8) {
      message.warning(
        "Avvalgi mavzu testini 8 yoki undan ortiq togri javob bilan tugatishingiz kerak.",
      );
      return;
    }
    setCurrentMavzu(mavzu);
    setUserAnswers(Array(mavzu.questions.length).fill(""));
    setVisible(true);
  };

  const handleAnswerChange = (index: number, value: string) => {
    if (!userAnswers) return;
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const submitTest = () => {
    if (!currentMavzu) return;
    let correct = 0;
    currentMavzu.questions.forEach((q, i) => {
      if (userAnswers[i].toUpperCase() === q.answer.toUpperCase()) correct++;
    });

    const newScores = [...scores];
    newScores[currentMavzu.id - 1] = correct;
    setScores(newScores);

    setVisible(false);
    setCurrentMavzu(null);

    if (correct >= 8) {
      message.success(
        `Siz ${correct} togri javob berdingiz. Keyingi test ochildi!`,
      );
    } else {
      message.error(
        `Siz ${correct} togri javob berdingiz. Keyingi testni ochish uchun kamida 8 togri javob kerak.`,
      );
    }
  };

  return (
    <Section className={styles.section}>
      <BackBtn />
      <Card className={styles.card}>
        <Row gutter={[10, 10]}>
          {mavzular.map((mavzu) => (
            <Col key={mavzu.id} span={sm ? 12 : 24}>
              <Button
                type="primary"
                className={styles.btn}
                onClick={() => openTest(mavzu)}
                disabled={mavzu.id > 1 && scores[mavzu.id - 2] < 8}
              >
                {mavzu.name}
              </Button>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Modal */}
      <Modal
        title={currentMavzu ? `${currentMavzu.name}` : ""}
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width="80%"
        style={{ top: 20 }}
        styles={{ body: { maxHeight: "70vh", overflow: "auto" } }}
      >
        {currentMavzu &&
          currentMavzu.questions.map((q, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <p>{q.question}</p>
              <Radio.Group
                onChange={(e) => handleAnswerChange(i, e.target.value)}
                value={userAnswers[i]}
              >
                {q.options.map((opt) => {
                  const value = opt.split(")")[0];
                  return (
                    <Radio key={value} value={value}>
                      {opt}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </div>
          ))}
        <Button type="primary" onClick={submitTest}>
          Testni yuborish
        </Button>
      </Modal>
    </Section>
  );
};

export default MaruzaTestPage;
