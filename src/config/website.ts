// Runtime check for website lock state.
// Behavior:
// - If `site_paid` is set to 'true' in localStorage -> site is unlocked permanently.
// - If `site_unlocked_at` exists and is less than 20 days ago -> temporarily unlocked.
// - Otherwise -> locked.
export function isWebsiteLocked(): boolean {
	if (typeof window === 'undefined') return true
	const paid = localStorage.getItem('site_paid') === 'true'
	if (paid) return false
	const unlockedAt = localStorage.getItem('site_unlocked_at')
	if (!unlockedAt) return true
	const msSince = Date.now() - parseInt(unlockedAt, 10)
	const daysSince = msSince / (1000 * 60 * 60 * 24)
	return daysSince > 20
}
