export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<span>dashboard wrapper - layout</span>
			{children}
		</div>
	)
}
