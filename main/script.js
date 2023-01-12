// Що таке рекрусивна функція?
// Рекрусивна функція це - функція яка возращає саму себе, тобто
function PowX(x, n) {
	// В данному прикладі в нас є фукція з умовою
	if (n == 1) {
		return x; // Якщо наш n дорівнює 1, тоді ми возращаємо X, по іншому це називається база рекурсії
	} else {
		// Але якщо наш n не дорівнює 1, тоді ми викликаємо ще раз нашу функцію
		return x * PowX(x, n - 1); // Тут ми множимо x на нову викликаною функцією, по іншому це називають шаг рекурсії
	}
}
console.log(PowX(2, 4)); // 16
// в випадку x = 2, n = 4 функція викликає саму себе 3 раза, а на 4-й раз верне просто x, тобто 16

let students = {
	js: [
		{
			name: "John",
			progress: 100,
		},
		{
			name: "Ivan",
			progress: 60,
		},
	],

	html: {
		basic: [
			{
				name: "Peter",
				progress: 20,
			},
			{
				name: "Ann",
				progress: 18,
			},
		],
		pro: [
			{
				name: "Sam",
				progress: 10,
			},
		],
	},
};
function getTotalProgressByIteration(data) {
	let total = 0;
	let students = 0;

	for (let course of Object.values(data)) {
		if (Array.isArray(course) == true) {
			students += course.length;

			for (let i = 0; i < course.length; i++) {
				total += course[i].progress;
			}
		} else {
			for (let subCourse of Object.values(course)) {
				students += subCourse.length;
				for (let i = 0; i < subCourse.length; i++) {
					total += subCourse[i].progress;
				}
			}
		}
	}

	return total / students;
}

/* console.log(getTotalProgressByIteration(students));
 */
function getTotalProgressByRecursion(data) {
	// Ось тут йде об`явлення функції з аргументом data
	if (Array.isArray(data)) {
		// Ось тут ми проверяємо data на массив, якщо він там є, то йдемо далі, якщо ні то переходемо к блоку else
		let total = 0; // Об`явлення змінної total
		for (let i = 0; i < data.length; i++) {
			// Цикл for з data.lenght
			total += data[i].progress; // Тут ми додаємо в змінну total данні з data[i]. progress, наприклад data[2].progress = 10;
		}
		return [total, data.length]; // Тут ми возращаємо total і data.lenght, тобто наприклад 55 і 20
		// Увесь цей блок називається рекрусивною базою, тобто вона в любому случаї запуститься, але це буде грубо кажучи в кінці
	} else {
		// Цей блок запуститься якщо наша змінна data не має массиву, а просто наприклад об`єкт
		let total = [0, 0];
		for (let subData of Object.values(data)) {
			// Тут ми запускаємо массива на перебір
			const subDataArr = getTotalProgressByRecursion(subData); // Тут ми запускаємо ще раз нашу всю функцію
			total[0] += subDataArr[0]; // Тут ми записуємо в змінну total данні з subData
			total[1] += subDataArr[1];
		}
		return total;
	}
}
const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);
