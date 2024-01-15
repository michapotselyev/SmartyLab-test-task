// Функция для вычисления минимального количества пересадок между аэропортами
function calculateStops(startingAirport, destinationAirport, routes) {
    // Создание графа маршрутов
    const graph = {};

    // Заполнение графа маршрутами из списка
    routes.forEach(([from, to]) => {
        if (!graph[from]) {
            graph[from] = [];
        }

        // Добавление возможных направлений из текущего аэропорта
        graph[from].push(to);
    });

    // Массив для отслеживания посещенных аэропортов
    const visited = [];

    // Очередь для обхода графа в ширину
    const queue = [[startingAirport, []]];

    // Обход в ширину
    while (queue.length > 0) {
        const [currentAirport, path] = queue.shift();

        // Если текущий аэропорт - целевой, возвращаем путь
        if (currentAirport === destinationAirport) {
            return { path, stops: path.length - 1 };
        }

        // Проверка наличия маршрутов из текущего аэропорта
        if (graph[currentAirport]) {
            // Перебор возможных следующих аэропортов
            for (const nextAirport of graph[currentAirport]) {
                const route = [currentAirport, nextAirport];

                // Если маршрут еще не посещен, добавляем в очередь
                if (!visited.includes(route.join('-'))) {
                    visited.push(route.join('-'));
                    queue.push([nextAirport, [...path, currentAirport]]);
                }
            }
        }
    }

    // Если целевой аэропорт не достигнут, возвращаем -1
    return { path: undefined, stops: -1 };
}

// Список аэропортов
const airports = [
    "BGI", "CDG", "DEL", "DOH", "DSM", "EWR", "EYW", "HND", "ICN",
    "JFK", "LGA", "LHR", "ORD", "SAN", "SFO", "SIN", "TLV", "BUD",
]

// Список возможных маршрутов между аэропортами
const routes = [
    ["DSM", "ORD"],
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

// Начальный и конечный аэропорты
const startingAirport = "LGA";
const destinationAirport = "SAN";

// Вычисление минимального количества пересадок и построение пути
const { path, stops } = calculateStops(startingAirport, destinationAirport, routes);

// Печать результатов
if (path) {
    const readablePath = path.join('->');
    console.log(`> Для перемещения из аэропорта ${startingAirport} в аэропорт ${destinationAirport} требуется ${stops} пересадок.\nМаршрут: ${readablePath}`);
} else {
    console.log(`> Нет возможного маршрута из аэропорта ${startingAirport} в аэропорт ${destinationAirport}.`);
}
