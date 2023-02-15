export default function isInClass(user, classId) {
	return user?.classes?.find(c => c.id === classId)
}
