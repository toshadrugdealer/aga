export interface IUser {
	isChecked: boolean
	id: string | null
	name: string
}
export async function fetchUsers() {
	try {
		const response = await fetch('https://randomuser.me/api/?results=2')
		if (!response.ok) {
			throw new Error('Ошибка при загрузке данных')
		}
		const data = await response.json()
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const processedUsers: IUser[] = data.results.map((user: any) => ({
			isChecked: false,
			id: user.id.value ? user.id.value : Date.now().toString(),
			name: `${user.name.first} ${user.name.last}`
		}))
		return processedUsers
	} catch (error) {
		console.error('Ошибка:', error)
		return []
	}
}
