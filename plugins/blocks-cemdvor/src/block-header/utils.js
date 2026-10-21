// Убирает всё кроме цифр и плюса
export const cleanPhone = (value) => value.replace(/[^\d+]/g, '');

// Форматирует для отображения: +7 (999) 123-45-67
export const formatPhone = (value) => {
    let digits = value.replace(/\D/g, ''); // только цифры
    if (!digits) return '';
    
    // Если начинается с 8, меняем на 7 для РФ
    if (digits.startsWith('8')) digits = '7' + digits.slice(1);
    // Если не начинается с 7, добавляем 7 (опционально, зависит от страны)
    if (!digits.startsWith('7')) digits = '7' + digits;

    // Ограничиваем 11 цифрами (для РФ)
    digits = digits.slice(0, 11);

    const p1 = digits.slice(1, 4); // 999
    const p2 = digits.slice(4, 7); // 123
    const p3 = digits.slice(7, 9); // 45
    const p4 = digits.slice(9, 11); // 67

    let result = '+7';
    if (p1) result += ` (${p1}`;
    if (p1.length === 3) result += ')';
    if (p2) result += ` ${p2}`;
    if (p3) result += `-${p3}`;
    if (p4) result += `-${p4}`;
    
    return result;
};