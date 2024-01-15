# Тестовое задание на позицию react developer

## Условия:
1. Вы можете использовать языки программирования Javascript или Typescript.
2. Вы можете использовать фреймворк ReactJS/React Native если сочтёте необходимым. Учтите, что некоторые задания предполагают создание только приложения на React/React Native.
3. Вы можете использовать любые библиотеки кроме тех, которые предполагают собой полное выполнение задачи (Lodash и ей подобные). Используйте свои собственные знания вместо готовых функций
4. Вы можете использовать систему контроля версий Github если сочтёте нужным.
5. Комментирование кода даёт + к общей оценке выполненных задач.
6. Вы можете использовать любые стили или библиотеки элементов
7. У вас есть 4 часа чтобы выполнить максимальное кол-во задач. Вы не обязаны выполнить их все, но максимальное количество приветствуется.

## Задача 1
```
const airports = [
  "BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN",
  "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD",
]

routes = [
  ["DSM", "ORD",
  ["ORD", "BGI"],
  ["BGI", "LGA"],
  ["SIN", "CDG"],
  ["CDG", "SIN"],
  ["CDG", "BUD"],
  ["DEL", "DOH"],
  ["DEL", "CDG"],
  ["TLV", "DEL"],
  ["EWR", "HND"],
  ["HND", "ICN"],
  ["HND", "JFK"],
  ["ICN", "JFK"],
  ["JFK", "LGA"],
  ["EYW", "LHR"],
  ["LHR", "SFO"],
  ["SFO", "SAN"],
  ["SFO", "DSM"],
  ["SAN", "EYW"],
]

startingAirport = "LGA";
```

У вас есть список аэропортов США  airports и список возможных перелетов routes со списком суб массивов, которые обозначают что вы можете перелететь из одного аэропорта только в определённый другой. Например ["LHR", "SFO"] означает что вы можете перелететь из аэропорта LHR по маршруту в аэропорт SFO. Стартовый аэропорт LGA позволяет отправиться в любой аэропорт из этого списка.

### УСЛОВИЯ
Вам надо перебраться из стартового аэропорта LGA в любой указанный аэропорт (возьмём для примера SAN). Вам надо добраться до этого аэропорта максимально коротким маршрутом с пересадками в промежуточных аэропортах. Напишите функцию чтобы узнать сколько вам пересадок понадобится чтобы добраться из LGA в любой из указанных аэропортов

## Задача 2
Если задан многомерный массив arr и глубина n, то возвращается уплощенная версия этого массива.

Многомерный массив - это рекурсивная структура данных, содержащая целые числа или другие многомерные массивы.

Уплощенный массив - это версия массива, в которой некоторые или все подмассивы удалены и заменены реальными элементами в этом подмассиве. Эту операцию уплощения следует выполнять только в том случае, если текущая глубина вложенности меньше n. Глубина элементов первого массива считается равной 0.

Пожалуйста, решите эту задачу без встроенного метода Array.flat.

### Пример 1:
Вводные данные 
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]].
n = 0

Выходные данные
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]


#### Пояснение
При передаче глубины n=0 всегда будет получен исходный массив. Это связано с тем, что наименьшая возможная глубина подмассива (0) не меньше n=0. Таким образом, ни один подмассив не должен быть сплющен.


### Пример 2:
Вводные данные
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]].
n = 1

Выходные данные
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]


#### Пояснение
Все подмассивы, начинающиеся с 4, 7 и 13, сплющиваются. Это связано с тем, что их глубина 0 меньше 1. Однако [9, 10, 11] остается несплющенным, так как его глубина равна 1.

### Пример 3:
Вводные данные
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]].
n = 2

Выходные данные
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

#### Пояснение
Максимальная глубина любого подмассива равна 1. Таким образом, все они сплющиваются.

```
/**

 * @param {any[]} arr

 * @param {number} depth

 * @return {any[]}

 */

const flatten = (arr, n) => {

   

};

flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0);
flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1);
flatten([[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2);
```

## Задача 3
Создайте приложение калькулятора с использованием React. Пользователь должен видеть интерфейс калькулятора (пример ниже, вы не обязаны использовать такие же стили)

![Пример стилей](readme-assets/Untitled.png)

Калькулятор имеет сетку кнопок с цифрами, кнопки с знаками арифметики и 2 кнопки DEL и CLEAR. Кнопка DEL удаляет последний введённый символ. Кнопка CLEAR очищает поле ввода до исходного состояния. Пользователь может совершать только операции с двумя числами. Если введены два числа и знак арифметики, то при повторном нажатии на кнопку на знак арифметики необходимо провести операцию и начать работу с результатом. Пример: пользователь ввёл “5+10” и при нажатии на “+” необходимо вывести на экран “15+”.
###### Важное примечание: вы не можете использовать eval()

