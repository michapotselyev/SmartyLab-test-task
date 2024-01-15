// Функция flatten принимает многомерный массив arr и глубину depth
const flatten = (arr, depth) => {
    // Создаем пустой массив для хранения результата
    const result = [];

    // Вспомогательная рекурсивная функция flattenHelper
    const flattenHelper = (element, currentDepth) => {
        // Если элемент - массив и текущая глубина меньше заданной глубины
        if (Array.isArray(element) && currentDepth < depth) {
            // Рекурсивно вызываем flattenHelper для каждого элемента внутри массива
            for (const item of element) {
                flattenHelper(item, currentDepth + 1);
            }
        } else {
            // Иначе добавляем элемент в результирующий массив
            result.push(element);
        }
    };

    // Итерируем по каждому элементу в основном массиве
    for (const item of arr) {
        // Начинаем обход с глубины 0
        flattenHelper(item, 0);
    }

    // Возвращаем результирующий массив
    return result;
};

// Примеры использования
const result1 = flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0);
const result2 = flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1);
const result3 = flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2);

// Выводим результаты в консоль
console.log("Result 1:", result1);
console.log("Result 2:", result2);
console.log("Result 3:", result3);
