export const createDateString = (year: number, month: number, date: number) => {
	const yearString = year.toString().padStart(4, '0');
	const monthString = (month + 1).toString().padStart(2, '0');
	const dateString = date.toString().padStart(2, '0');
	return `${yearString}-${monthString}-${dateString}`;
};

export const createDatePath = (year: number, month: number, date: number) => {
	const yearString = year.toString().padStart(4, '0');
	const monthString = (month + 1).toString().padStart(2, '0');
	const dateString = date.toString().padStart(2, '0');
	return `${yearString}/${monthString}/${dateString}`;
};
